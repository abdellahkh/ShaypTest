import Head from "next/head";
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cryptocurrencies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
        <div className={styles.grid}>
          <a href="/cryptos" className={styles.card}>
            <h3>top 20 cryptocurrencies &rarr;</h3>
            <p>Find more informations about the bests</p>
          </a>
          <a href="/converter" className={styles.card}>
            <h3>Converter &rarr;</h3>
            <p>Convert your cryptocurrenccy</p>
          </a>
        </div>
      </main>
    </div>
  );
}
