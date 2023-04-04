import { useRouter } from "next/router"
import Head from 'next/head'

const CoffeeStore=()=>{
    const router=useRouter()
    console.log("router",router)
    return <div> Page name {router.query.id}
    <Head>
    <title>{router.query.id}</title>
    </Head>
    </div>
}
export default CoffeeStore