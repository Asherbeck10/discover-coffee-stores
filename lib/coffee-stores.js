import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,

});
const getUrlForCoffeeStore=(latLong,query,limit)=>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}&radius=4000`
}
const getListOfCoffeeStorePhotos=async()=>{
  const photos= await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 40,})
    const unsplashResults=photos.response.results
    return unsplashResults.map((result)=>(result.urls["small"]))
 
  };





const fetchCoffeeStores= async (latLong="51.55281468882872%2C-0.15885416337944155", limit=6)=> {
    const photos=await getListOfCoffeeStorePhotos()
  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
      };
      
      const response =await fetch(getUrlForCoffeeStore(latLong,"coffee", limit), options)
         const data= await response.json()
         return data.results.map((result,i)=>{
          return{id:result.fsq_id,
                 address:result.location.formatted_address,
                 name:result.name,
                 neighbourhood:result.location.locality,
                 imgUrl:photos.length>0 ? photos[i]: null,}
         })
  }
  
  export default  fetchCoffeeStores


