import React from "react";
import type { CoinMarketData } from "@/types/coin-data";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

type DataProps = {
  data: CoinMarketData;
};

const CoinCard = ({ data }: DataProps) => {
  const isPositive = data.price_change_percentage_24h >= 0;
  const borderColor = isPositive ? "border-green-500" : "border-red-500";
  const textColor = isPositive ? "text-green-500" : "text-red-500";
  const animationName = isPositive ? "pulse-green" : "pulse-red";

  return (
    <div
      className={`rounded-xl border-2 p-4 bg-gray-900 text-white ${borderColor}`}
      style={{
        animation: `${animationName} 2.5s infinite`,
      }}
    >
      <style>
        {`
          @keyframes pulse-green {
            0%, 100% {
              box-shadow: 0 0 10px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.6);
            }
            50% {
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.8);
            }
          }

          @keyframes pulse-red {
            0%, 100% {
              box-shadow: 0 0 10px rgba(239, 68, 68, 0.4), 0 0 20px rgba(239, 68, 68, 0.6);
            }
            50% {
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.8);
            }
          }
        `}
      </style>
      <div className="flex gap-2">
        <div className="w-7">
          <img src={data.image} alt={data.name} />
        </div>
        <h2>{data.name} </h2>
      </div>
      <p className={`text-sm ${textColor}`}>
        {data.price_change_percentage_24h.toFixed(4)}%
      </p>

      <Stack direction="row" sx={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart data={data.sparkline_in_7d.price} height={100} />
        </Box>
      </Stack>
    </div>
  );
};

export default CoinCard;
