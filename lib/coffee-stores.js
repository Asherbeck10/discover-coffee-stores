
const getUrlForCoffeeStore=(latLong,query,limit)=>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}


const fetchCoffeeStores= async ()=> {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.
          FOURSQUARE_API_KEY,
        },
      };
      
      const response =await fetch(getUrlForCoffeeStore(
        "51.591010316787695%2C-0.19425003309275127",
        "coffee",
        6
        ), options)
         const data= await response.json()
         return data.results
  }
  
  export default  fetchCoffeeStores


