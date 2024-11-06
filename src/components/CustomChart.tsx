import { useTheme } from "styled-components";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { CustomChartProps } from "@/types";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

export function CustomChart({ labels, data, type }: CustomChartProps) {

    const theme = useTheme();
    const options = {
        responsive: true,
        scaleShowVerticalLines: false,
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                },
                ticks: {
                    color: theme.typographies.subtitle
                }
            },
            y: {
                border: {
                    display: false
                },
                grid: {
                    color: theme.appDefaultStroke
                },
                ticks: {
                    color: theme.typographies.subtitle
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
    const chatData = {
        labels,
        datasets: [
            {
                data,
                borderColor: 'rgb(12,112,242)',
                backgroundColor: 'rgba(12,112,242,1)',
            }
        ]
    }

    return type === 'bar' ? (<Bar options={options} data={chatData} />) : (<Line options={options} data={chatData} />)
}