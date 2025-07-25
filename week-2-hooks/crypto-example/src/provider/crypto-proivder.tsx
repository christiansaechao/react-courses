import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import type { CoinMarketData } from "@/types/coin-data";

type CryptoContextType = {
  cryptoData: CoinMarketData[];
  isLoading: boolean;
  addCoinById: (id: string) => Promise<void>;
};

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

const cg = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    "x-cg-demo-api-key": "CG-8M4HZobc6QHe14B7i5mJxPzm",
  },
});

//https://api.coingecko.com/api/v3/coins/{id}

const CryptoProvider = ({ children }: React.PropsWithChildren) => {
  const [cryptoData, setCryptoData] = useState<CoinMarketData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addCoinById = async (id: string) => {
      try {
      setIsLoading(true);
      const { data } = await cg.get(`/coins/${id}`, {
        params: {
          vs_currency: "usd",
          sparkline: true,
          precision: 2,
        },
      });
      console.log(data);
      setCryptoData([data, ...cryptoData]);
    } catch (err) {
      console.error("Error fetching crypto data", err);
    } finally {
      setIsLoading(false);
    }
  }

  const getCryptoData = async () => {
    try {
      setIsLoading(true);
      const { data } = await cg.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          per_page: 12,
          sparkline: true,
          precision: 2,
        },
      });

      setCryptoData(data);
    } catch (err) {
      console.error("Error fetching crypto data", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData, isLoading, addCoinById }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;

export const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  
  return context;
};
