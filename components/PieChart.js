import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import { createTheme, ThemeProvider } from "@mui/material/styles"

ChartJS.register(ArcElement, Tooltip, Legend)

const darkTheme = createTheme({ palette: { mode: "dark" } })

export default function PieChart({ pieChartData, pieLabel }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={1} sx={{ m: 0, width: "30%" }}>
        <Pie
          data={{
            labels: pieLabel,
            datasets: [
              {
                label: "# of Votes",
                data: pieChartData,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </Paper>
    </ThemeProvider>
  )
}
