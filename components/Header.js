import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useQuery } from "react-query";



export default function Header() {
  return <Headers />;
}

function Headers() {

  const { isLoading, error, data } = useQuery("allCoins", () =>
    fetch("https://api.coinpaprika.com/v1/global").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card className={styles.mainHeader}>
      <Card.Body>
        <Card.Text>
        Nombres de cryptocurrencies présent sur le marché : <span>{data.cryptocurrencies_number}</span>
        </Card.Text>
        <Card.Text>
        La part du marché du bitcoin est de {data.bitcoin_dominance_percentage}%
        </Card.Text>
        <Card.Text>
        Le volume de monnaies qui a transité au cours de ces dernières 24H : {data.volume_24h_usd}
        </Card.Text>
        <Card.Text>
        Le market cap global des cryptocurrencies : {data.market_cap_usd}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
