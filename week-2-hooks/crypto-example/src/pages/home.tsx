import CoinCard from "@/components/coin-card";
import { useCrypto } from "@/provider/crypto-proivder";

const Home = () => {
  const { cryptoData, isLoading } = useCrypto();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-10 p-4">
      {cryptoData?.map((coin) => (
        <CoinCard key={coin.id} data={coin} />
      ))}
    </div>
  );
};

export default Home;
