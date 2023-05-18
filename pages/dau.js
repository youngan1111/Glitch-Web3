import Header from "../components/Header"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Paper from "@mui/material/Paper"
import dynamic from "next/dynamic"
import axios from "axios"

const ComponentsWithNoSSR = dynamic(() => import("../components/BarChart"), {
  ssr: false,
})

const PieChartWithNoSSR = dynamic(() => import("../components/PieChart"), {
  ssr: false,
})

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

export default function DAU() {
  const [DAU, setDAU] = useState(0)
  const [yesterdayDAU, setYesterdayDAU] = useState(0)
  const [graphData, setGraphData] = useState({})
  const [pieChartData, setPieChartData] = useState({})

  const itemsPerPage = 100

  const forCount = (list) => {
    const count = {}
  }

  const getRecursive = async (offset = 0, maxItems, temp) => {
    if (maxItems < offset) {
      const count = {}
      const countType = {}

      temp.forEach((ele) => {
        if (
          count[new Date(ele.created_at * 1000).toLocaleDateString()] ===
          undefined
        ) {
          count[new Date(ele.created_at * 1000).toLocaleDateString()] =
            new Set()
          count[new Date(ele.created_at * 1000).toLocaleDateString()].add(
            ele.from_l1_address
          )
        } else {
          count[new Date(ele.created_at * 1000).toLocaleDateString()].add(
            ele.from_l1_address
          )
        }

        if (countType[type[ele.type]] === undefined)
          countType[type[ele.type]] = 1
        else countType[type[ele.type]] += 1
      })

      const sortedCountType = Object.entries(countType)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

      setPieChartData(sortedCountType)
      setGraphData(count)
      return
    }
    const { data } = await axios.get(
      `https://api-testnet.zkbnbchain.org/api/v1/executedTxs?offset=${offset}&limit=${itemsPerPage}`
    )
    temp = [...temp, ...data.txs]

    await getRecursive(offset + itemsPerPage, maxItems, temp)
  }

  const countUser = (list) => {
    const count = {}

    list.forEach((x) => {
      if (count[x.from_l1_address] === undefined) count[x.from_l1_address] = 1
      else count[x.from_l1_address] += 1
    })

    return Object.keys(count).length
  }

  const getDAU = async () => {
    const { data } = await axios.get(
      `https://api-testnet.zkbnbchain.org/api/v1/executedTxs?offset=0&limit=${itemsPerPage}`
    )
    const yesterday = new Date()
    const doubleYesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    doubleYesterday.setDate(doubleYesterday.getDate() - 2)

    const yesterdayUTC = yesterday.getTime() / 1000
    const doubleYesterdayUTC = doubleYesterday.getTime() / 1000

    setDAU(countUser(data.txs.filter((x) => x.created_at > yesterdayUTC)))
    setYesterdayDAU(
      countUser(
        data.txs.filter(
          (x) =>
            x.created_at > doubleYesterdayUTC && x.created_at < yesterdayUTC
        )
      )
    )

    getRecursive(0, data.total, [])
  }

  useEffect(() => {
    getDAU()
  }, [])

  return (
    <>
      <Header path="/dau" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · DAU
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <Typography variant="h5" component="div">
          {DAU} DAU
        </Typography>
      </Paper>

      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Yesterday DAU
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <Typography variant="h5" component="div">
          {yesterdayDAU} DAU
        </Typography>
      </Paper>

      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · DoD DAU Change rate
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <Typography variant="h5" component="div">
          {(((DAU - yesterdayDAU) / yesterdayDAU) * 100).toFixed(2)}%
        </Typography>
        <Typography variant="body2">DoD Change(%)</Typography>
      </Paper>

      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · DoD DAU Change
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <Typography variant="h5" component="div">
          {DAU - yesterdayDAU} DoD Change
        </Typography>
        <Typography variant="body2">DoD Change</Typography>
      </Paper>

      <ComponentsWithNoSSR
        chartData={Object.values(graphData).map((x) => x.size)}
        chartLabel={Object.keys(graphData)}
        topLabel={"zkBNBChain Stats-DAU & Transactions"}
      />

      {/* <PieChartWithNoSSR
        pieChartData={Object.values(pieChartData).map(
          (x) =>
            (x / Object.values(pieChartData).reduce((acc, x) => acc + x)) * 100
        )}
        pieLabel={Object.keys(pieChartData).map((x) => `${x}(%)`)}
      /> */}
    </>
  )
}
