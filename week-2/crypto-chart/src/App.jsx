import { useEffect } from "react";
import "./App.css";
import { CryptoChart } from "./components/CryptoChart";
import { useState } from "react";

const apiUrl = "https://68f0-221-146-231-106.ngrok-free.app/get-prices";

const coinNames = ["bitcoin", "ethereum"];

// const data = [
//   { xLabel: `BTC-${createDate()}`, price: 90000 },
//   { xLabel: `BTC-${new Date().toISOString()}`, price: 1000 },
//   { xLabel: `BTC-${new Date().toISOString()}`, price: 100000 },
//   { xLabel: `BTC-${new Date().toISOString()}`, price: 120000 },
// ];
function App() {
  const [data, setData] = useState([]);

  async function fetchChartData(coinName) {
    const res = await fetch(`${apiUrl}/${coinName}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await res.json();
    console.log("responseData", responseData);
    const parsedData = responseData.data.prices.hour.prices.map((item) => {
      const date = new Date(item[1] * 1000);
      return {
        date: date.getHours() + ":" + date.getMinutes(),
        price: item[0],
      };
    });

    return parsedData;
  }

  useEffect(() => {
    (async function () {
      const promises = coinNames.map(
        async (coinName) => await fetchChartData(coinName)
      );
      const [data1, data2] = await Promise.all(promises);
      const combinedData = data1.map((coin, index) => {
        return {
          bitcoinPrice: coin.price,
          ethereumPrice: data2[index].price,
          date: coin.date,
        };
      });
      setData(combinedData);
    })();
  }, []);

  return (
    <>
      {data.length}
      <h1>Crypto Chart</h1>
      <div style={{}}>
        <CryptoChart data={data} />
      </div>
    </>
  );
}

export default App;
