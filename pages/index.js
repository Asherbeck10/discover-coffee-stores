import Head from "next/head";
import Banner from '../Components/banner'
import Image from 'next/image'
import Card from '../Components/card'
import coffeeStoresData from '../data/coffee-stores.json'
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores:coffeeStoresData
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log(props)
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
      {props.coffeeStores.length>0 && (<>
      <h2 className={styles.heading2}>Toronto Store</h2>
      <div className={styles.cardLayout}>
      {props.coffeeStores.map((coffeeStore)=>{
        return(<Card className={styles.card}
          key={coffeeStore.id} name={coffeeStore.name} imgUrl={coffeeStore.imgUrl} href={`/coffee-store/${coffeeStore.id}`}/>
          )
      })}
      </div>
      </>)}

      </main>
    </div>
  );
}
          