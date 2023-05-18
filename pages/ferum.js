import Header from "../components/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

export default function Ferum() {
  const [orderList, setOrderList] = useState([])

  useEffect(async () => {}, [])

  return (
    <>
      <Header />
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell width={"10%"}>주문자</TableCell>
                <TableCell align="right">함수명</TableCell>
                <TableCell align="right">주문타입</TableCell>
                <TableCell align="right">side</TableCell>
                <TableCell align="right">팔고</TableCell>
                <TableCell align="right">산다</TableCell>
                <TableCell align="right">수량</TableCell>
                <TableCell align="right">가격</TableCell>
                <TableCell align="right">주문시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width={"10%"} component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell align="right">{row[1]}</TableCell>
                  <TableCell align="right">{row[2]}</TableCell>
                  <TableCell align="right">{row[3]}</TableCell>
                  <TableCell align="right">{row[4]}</TableCell>
                  <TableCell align="right">{row[5]}</TableCell>
                  <TableCell align="right">{row[6]}</TableCell>
                  <TableCell align="right">{row[7]}</TableCell>
                  <TableCell align="right">
                    {new Date(Number(row[8] / 1000)).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
