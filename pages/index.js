import Head from "next/head";
import Banner from '../Components/banner'
import Image from 'next/image'

import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick=()=>console.log("Hi banner button")
  return (
    <div>
      <Head>
        <title>Coffee Connoisseur</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={styles.main}>
        
      <Banner buttonText="View stores nearby" handelOnClick={handleOnBannerBtnClick}/>
      <div className={styles.heroImage}>
      <Image src="/static/hero-image.png" alt="" width={700} height={400}/>
      </div>

      </main>
    </div>
  );
}
          