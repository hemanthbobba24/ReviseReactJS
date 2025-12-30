// src/practice/Day4.js
import { useState, useEffect } from 'react'

function Day4() {
  //   const [user, setuser] = useState([])
  //   const [loading,setLoading] =useState(true)
  //   useEffect(() => {
  //     setLoading(true)
  //     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data =>{
  //       setuser(data)
  //       setLoading(false)
  //     })
  //   }
  //   ,[])
  //   if(loading){
  //     return <p>loading...</p>
  //   }
  // return (
  //   <div>
  //     <h1>Fetching data from API</h1>
  //     <p>number of users: {user.length}</p>
  //     {user.map(data =>(
  //         <div key={data.id}>
  //           <h3>user name: {data.name}</h3>
  //           <p>user mail: {data.email}</p>
  //         </div>
  //     ))}
  //   </div>
  // )
//   Now let's do a challenge!
// Challenge: Fetch products from FakeStore API
// Goal:

// Fetch from: https://fakestoreapi.com/products
// Display: title, price, image
// Add loading state
// Add error handling (optional)

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
useEffect(()=>{
setLoading(true)
fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
    setProducts(data)
setLoading(false)
}).catch(err => {
  setError(err.message)
  setLoading(false)
})
},[])
if(loading){
  return <p>loading....</p>
}
if(error){
  return <p>error occurred: {error}</p>
}
return (
  <div>
    {products.map(data =>(
      <div key = {data.id}>
      <h2>{data.title}</h2>
      <p>price: {data.price}</p>
      <img src = {data.image} alt = {data.title}></img>
      </div>
    ))}
  </div>
)
}

export default Day4