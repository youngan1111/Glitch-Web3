import { useEffect, useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import axios from "axios"
import Pagination from "@mui/material/Pagination"
import { Container } from "../styles/Custom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const darkTheme = createTheme({ palette: { mode: "dark" } })

export default function Transactions() {
  const [numOfPages, setNumOfPags] = useState(10)
  const [data, setData] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 2 }, () => null))
  )

  const itemsPerPage = 20

  const type = [
    "Empty",
    "Register",
    "Deposit",
    "Deposit Nft",
    "Transfer",
    "Withdraw",
    "Create Collection",
    "Mint Nft",
    "Transfer Nft",
    "Atomic Match",
    "Cancel Offer",
    "Withdraw Nft",
    "Full Exit",
    "Full Exit Nft",
  ]

  const status = [
    "Fail",
    "Pending",
    "Executed",
    "Packed",
    "Committed",
    "Verified",
  ]

  const getPageInfo = async (offset = 0) => {
    const { data } = await axios.get(
      `https://api-testnet.zkbnbchain.org/api/v1/executedTxs?offset=${offset}&limit=${itemsPerPage}`
    )
    setNumOfPags(Math.ceil(data.total / 20))
    setData(data.txs)
    console.log(data.txs)
  }

  useEffect(() => {
    getPageInfo()
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Paper elevation={1} sx={{ width: "100%", m: 3, mt: 5 }}>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size="small"
                sx={{ tableLayout: "fixed" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell width="15%">Txn Hash</TableCell>
                    <TableCell width="6%">Block</TableCell>
                    <TableCell width="6%">Type</TableCell>
                    <TableCell width="6%">Status</TableCell>
                    <TableCell width="14%">Created Time</TableCell>
                    <TableCell width="18%">From</TableCell>
                    <TableCell width="18%">To</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Transaction Fee</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((txn, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {txn.hash}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {txn.block_height}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {type[txn.type]}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {status[txn.status]}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {new Date(Number(txn.created_at) * 1000).toString()}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {txn.from_l1_address}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {txn.to_l1_address}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {txn.amount / Math.pow(10, 18)} {txn.asset_name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {txn.gas_fee / Math.pow(10, 18)} {txn.asset_name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                count={numOfPages}
                onChange={(e, page) => getPageInfo((page - 1) * itemsPerPage)}
              />
            </TableContainer>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}
