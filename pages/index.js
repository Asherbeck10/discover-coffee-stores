import Head from "next/head";
import Banner from '../Components/banner'
import Image from 'next/image'
import Card from '../Components/card'
// import coffeeStoresData from '../data/coffee-stores.json'
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3U5/uIAmtj/GtCc6krXrVecpfs5vLecQAPc1rvV4h1fc='
    }
  };
  
  const response =await fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=51.591010316787695%2C-0.19425003309275127&radius=2000&limit=6', options)
    const data= await response.json()
    
    // .catch(err => console.error(err));
  return {
    props: {
      coffeeStores:data.results
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log(props)
  const handleOnBannerBtnClick=()=>console.log("Hi banner button")
  return (
    <div className={styles.container}>
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
      <h2 className={styles.heading2}>North London Store</h2>
      <div className={styles.cardLayout}>
      {props.coffeeStores.map((coffeeStore)=>{
        return(<Card className={styles.card}
          key={coffeeStore.fsq_id} name={coffeeStore.name} imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} href={`/coffee-store/${coffeeStore.fsq_id}`}/>
          )
      })}
      </div>
      </>)}

      </main>
    </div>
  );
}
          