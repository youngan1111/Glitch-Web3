import Header from "../components/Header"
import Typography from "@mui/material/Typography"
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

export default function Relations() {
  const [numOfPages, setNumOfPags] = useState(10)
  const [data, setData] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 2 }, () => null))
  )

  const itemsPerPage = 20

  const getPageInfo = async (offset = 0) => {
    const { data } = await axios.get(
      `https://api-testnet.zkbnbchain.org/api/v1/accounts?offset=${offset}&limit=10`
    )
    setData(data.accounts)
    setNumOfPags(data.total)
    console.log(data.accounts)
  }

  useEffect(() => {
    getPageInfo()
  }, [])

  return (
    <>
      <Header path="/relations" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Relations
      </Typography>

      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Txn Hash</TableCell>
                <TableCell>Block</TableCell>
                <TableCell>temp</TableCell>
                <TableCell>temp</TableCell>
                <TableCell>temp</TableCell>
                <TableCell align="right">temp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((bid, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {bid.hash}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {bid.block_height}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {bid.amount}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {bid.created_at}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {bid.gas_fee}
                  </TableCell>
                  <TableCell align="right" style={{ color: "red" }}>
                    {bid.asset_name}
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
    </>
  )
}
