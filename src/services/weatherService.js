import axios from 'axios';

export default{
    getCurrentWether,
}
const CITY_KEY= 212473   // Petah Tiqwa
const API_KEY ='Ri5y2eX4Y3kO65mtvxhPDAX7AsZ1tJb1'
// const API_KEY ='m9lAGyPN4SxWZAFBBSghB43DxuBB1VDj'

 async function getCurrentWether(){
  const res = await axios.get(
    `https://dataservice.accuweather.com/currentconditions/v1/${CITY_KEY}?apikey=${API_KEY}`
  )    
  return res.data[0]
}