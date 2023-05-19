import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import zoomPlugin from "chartjs-plugin-zoom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const darkTheme = createTheme({ palette: { mode: "dark" } })

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
)

export default function BarChart({ chartData, chartLabel, topLabel }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          drag: {
            enabled: false,
          },
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
  }

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: topLabel,
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={1} sx={{ m: 3, width: "80%", margin: "auto" }}>
        <Bar options={options} data={data} />
      </Paper>
    </ThemeProvider>
  )
}
