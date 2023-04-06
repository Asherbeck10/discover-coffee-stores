import { useRouter } from "next/router"
import Link from 'next/link'
import coffeeStoreData from '../../data/coffee-stores.json'
import Head from "next/head";
import styles from '../../styles/coffee-store.module.css'

export async function getStaticProps(staticProps) {
    const params=staticProps.params
    return {
      props: {
        coffeeStore:coffeeStoreData.find((coffeeStore)=>{
            return coffeeStore.id.toString()===params.id;
        })
      }, // will be passed to the page component as props
    }
  }
  export async function getStaticPaths() {
    const paths=coffeeStoreData.map(coffeeStore=>{
        return{
            params:{
                id:coffeeStore.id.toString()
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
    console.log("router",router)
    const {name,address,neighbourhood}=props.coffeeStore
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (<div> 
    <Head>
        <title>{name}</title>
    </Head>
    <Link href='/'>
        Back To Home
    </Link>
    <p>{address}</p>
    <p>{name}</p>
    <p>{neighbourhood}</p>
    </div>)
    
}
export default CoffeeStore