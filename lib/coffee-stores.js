import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,

});
const getUrlForCoffeeStore=(latLong,query,limit)=>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}
const getListOfCoffeeStorePhotos=async()=>{
  const photos= await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 30,})
    const unsplashResults=photos.response.results
    return unsplashResults.map((result)=>(result.urls["small"]))
 
  };





const fetchCoffeeStores= async ()=> {
    const photos=await getListOfCoffeeStorePhotos()
  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.FOURSQUARE_API_KEY,
        },
      };
      
      const response =await fetch(getUrlForCoffeeStore(
        "51.591010316787695%2C-0.19425003309275127",
        "coffee",
        6
        ), options)
         const data= await response.json()
         return data.results.map((result,i)=>{
          return{id:result.fsq_id,
                 address:result.location.formatted_address,
                 name:result.name,
                 neighborhood:result.location.locality,
                 imgUrl:photos.length>0 ? photos[i]: null,}
         })
  }
  
  export default  fetchCoffeeStores


