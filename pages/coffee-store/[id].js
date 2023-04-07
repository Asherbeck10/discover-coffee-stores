import { useRouter } from "next/router"
import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image'
import styles from '../../styles/coffee-store.module.css'
// import coffeeStoreData from '../../data/coffee-stores.json'
import fetchCoffeeStores from '../../lib/coffee-stores'
import cls from "classnames"

export async function getStaticProps(staticProps) {
  const coffeeStores= await fetchCoffeeStores()
    const params=staticProps.params
    return {
      props: {
        coffeeStore:coffeeStores.find((coffeeStore)=>{
            return coffeeStore.fsq_id.toString()===params.id;
        })
      }, // will be passed to the page component as props
    }
  }
  export async function getStaticPaths() {
    const coffeeStores= await fetchCoffeeStores()
    const paths=coffeeStores.map(coffeeStore=>{
        return{
            params:{
                id:coffeeStore.fsq_id.toString()
            }
        }
    })
    return {
      paths,
      fallback: true, // can also be true or 'blocking'
    }
  }
  

const CoffeeStore=(props)=>{
    const router=useRouter()
    
    const {name,address,neighbourhood,imgUrl}=props.coffeeStore
  const handleUpvoteButton=()=>{
    console.log("handle upvote")
  }
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (<div className={styles.layout}> 
    <Head>
        <title>{name}</title>
    </Head>
    <div className={styles.container}>
    <div className={styles.col1}>
        <div className={styles.backToHomeLink}>
    <Link href='/'>
        Back To Home
    </Link>
    </div>
    <div className={styles.nameWrapper}>
    <h1 className={styles.name}>{name}</h1>
    </div>
    <Image src={imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} width="600" height="360" className={styles.storeImg} alt={name}></Image>
    </div>
    <div className={cls("glass",styles.col2)}>
        <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg"  alt="" width="24" height= "24"></Image>
            <p className={styles.text}> {address}</p>
        </div>
        <div className={styles.iconWrapper}>
            <Image   src="/static/icons/nearMe.svg" alt="" width="24" height= "24" ></Image>
            <p className={styles.text}>{neighbourhood}</p>
        </div>
        <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" alt="" width="24" height= "24"></Image>
            <p className={styles.text}>1</p>
        </div>
        <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!</button>
    </div>
    </div>
    </div>)

    
    
}

export default CoffeeStore