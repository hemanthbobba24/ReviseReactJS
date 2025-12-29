
// function App() {
//   // Product 1
//   const product1 = {
//     name: "Modern Chair",
//     price: 1299,
//     category: "Chairs",
//     inStock: true
//   };


//   const product2 = {
//     name: "queen bed",
//     price: 799,
//     category: "bed",
//     inStock: true
//   };

//   const product3 = {
//     name: "Wooden Table",
//     price: 999,
//     category: "Table",
//     inStock: false
//   };

//   return (
//     <div className="App">
//       <h1>Cloud Furniture Catalog</h1>
      
//       {/* Product 1 Card */}
//       <div className ="products">
//       <div className="product-card">
//         <h2>{product1.name}</h2>
//         <p className="category">Category: {product1.category}</p>
//         <p className="price">₹{product1.price}</p>
//         <p className="stock">
//           {product1.inStock ? "✓ In Stock" : "✗ Out of Stock"}
//         </p>
//       </div>

//       {/* Product 2 Card - You create */}
//        <div className = "product-card">
//         <h2>{product2.name}</h2>
//         <p className="category">Category: {product2.category}</p>
//         <p className = "price">₹{product2.price}</p>
//         <p className = "stock">{product2.inStock ? "✓ In Stock":"✗ Out of Stock"}</p>
//        </div>
      
//       {/* Product 3 Card - You create */}
//       <div className = "product-card">
//         <h2>{product3.name}</h2>
//         <p className = "category">Category: {product3.category}</p>
//         <p className = "price">{product3.price}</p>
//         <p className = "stock">{product3.inStock ? "✓ In stock":"✗ Out of Stock"}</p>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   // Cart items
//   const item1 = {
//     name: "Modern Chair",
//     price: 1299,
//     quantity: 2
//   };

//   const item2 = {
//     name: "Desk Lamp",
//     price: 599,
//     quantity: 1
//   };

//   const item3 = {
//     name: "Oak Table",
//     price: 2499,
//     quantity: 1
//   };

//   // Your calculations here
//   const item1Total = item1.price * item1.quantity
//   const item2Total = item2.price * item2.quantity
//   const item3Total = item3.price * item3.quantity
  
//   const subtotal = item1Total + item2Total + item3Total
//   const tax = Math.round(0.18 * subtotal)
//   const finalTotal = subtotal + tax

//   return (
//     <div className="App">
//       <div className="cart-container">
//         <h1>Shopping Cart</h1>
        
//         {/* Item 1 */}
//         <div className="cart-item">
//           <span>{item1.name} × {item1.quantity}</span>
//           <span className="item-total">₹{item1Total}</span>
//         </div>

//         {/* Item 2 - You complete */}
//         <div className = "cart-item">
//           <span>{item2.name} x {item2.quantity}</span>
//           <span className="item-total">{item2Total}</span>
//         </div> 
        
//         {/* Item 3 - You complete */}
//         <div className='cart-item'>
//           <span>{item3.name} x {item3.quantity}</span>
//           <span className="item-total">{item3Total}</span>
//         </div>

//         <hr />

//         {/* Summary */}
//         <div className="summary">
//           <div className="summary-row">
//             <span>Subtotal:</span>
//             <span>₹{subtotal}</span>
//           </div>
//           <div className="summary-row">
//             <span>Tax (18%):</span>
//             <span>₹{tax}</span>
//           </div>
//           <div className="summary-row total">
//             <span>Total:</span>
//             <span>₹{finalTotal}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//DAY 3 
// Challenge 1: User Profile Component
// Create a reusable component for user profiles:
// Requirements:

// Component name: UserCard
// Props: name, location, role, isActive
// Show green badge if active, gray if not
// Use ternary for badge

// Create:

// src/UserCard.js - the component
// Use it in App.js with 3 different users
// Map an array of users to UserCard components
//  function App() {
//           const userDetails = 
//           [
//             {id:1, name:"hemanth" , location: "kansas", role:"student" , isActive: true},
//             {id:2, name:"Sri ram" , location: "missouri", role:"student" , isActive: false},
//             {id:3, name:"bobba" , location: "arkansas", role:"developer" , isActive: true}
//           ]
//           // const {name, location, role, isActive} = userDetails
//           return (
//             <div className = "userdetails">
//               {userDetails.map(item =>
//                 (
//                   <UserCard
//                   key = {item.id}
//                   name = {item.name}
//                   location = {item.location}
//                   role = {item.role}
//                   isActive = {item.isActive}
//                   />
//                 )
//               )

//               }

//             </div>
//           )
          
//  };

// export default App

// Create array with 6 products from Cloud Furniture
// Create ProductCard component in a separate file
// Use map() to display all products in a grid
// Add filter buttons:

// "All Products"
// "In Stock Only"
// "Sale Items" (products with discount > 0)



// Your task:

// Show all products first
// Add 4 filter buttons:

// All Products
// In Stock Only
// Sale Items (discount > 0)
// In Stock + Sale (both conditions)


// // Test each filter by manually changing which array to display
// import './App.css';
// // import UserCard from './userCard.js';
// import ProductCard from './ProductCard.js'
// function App() {
//   const productDetails = [
//     {
//       id: 1,
//       name: "wooden chair",
//       price: 29.99,
//       category: "chair",
//       inStock: true, 
//       discount: 10,
//       rating: 4.5
//     },
//     {
//       id: 2,
//       name: "wooden Table",
//       price: 59.99,
//       category: "Table",
//       inStock: true, 
//       discount: 10,
//       rating: 4.7
//     },
//     {
//       id: 3,
//       name: "wooden cot",
//       price: 89.99,
//       category: "Bed",
//       inStock: false, 
//       discount: 15,
//       rating: 3.9
//     },
//     {
//       id: 4,
//       name: "plastic chair",
//       price: 19.99,
//       category: "chair",
//       inStock: false, 
//       discount:18,
//       rating: 4.2
//     },

//   ]
//   const instock = productDetails.filter(item => item.inStock)
//   const discountAvailable = productDetails.filter(item => item.discount > 0)
//   const instockanddiscount = productDetails.filter(item => item.inStock && item.discount > 0)
//   return (
    
//     <div className = "productCard">
//       <div className = "buttons">
//         <button>in Stock ({instock.length})</button>
//         <button>discount</button>
//         <button>discountandinstock</button>
//       </div>
//       {
//         productDetails.map(productDetails =>
//         <ProductCard
//         key = {productDetails.id}
//         name = {productDetails.name}
//         price = {productDetails.price}
//         category = {productDetails.category}
//         inStock = {productDetails.inStock}
//         discount = {productDetails.discount}
//         rating = {productDetails.rating}
//         />
//       )}
//     </div>
//   )
// }
// export default App;


//Day - 3 use state 
import './App.css';
import ProductCard from './ProductCard';
import { useState } from 'react';

function App() {
  // const productDetails = [
  //    {
  //     id: 1,
  //     name: "wooden chair",
  //     price: 29.99,
  //     category: "chair",
  //     inStock: true, 
  //     discount: 10,
  //     rating: 4.5
  //   },
  //   {
  //     id: 2,
  //     name: "wooden Table",
  //     price: 59.99,
  //     category: "Table",
  //     inStock: true, 
  //     discount: 10,
  //     rating: 4.7
  //   },
  //   {
  //     id: 3,
  //     name: "wooden cot",
  //     price: 89.99,
  //     category: "Bed",
  //     inStock: false, 
  //     discount: 15,
  //     rating: 3.9
  //   },
  //   {
  //     id: 4,
  //     name: "plastic chair",
  //     price: 19.99,
  //     category: "chair",
  //     inStock: false, 
  //     discount:18,
  //     rating: 4.2
  //   }
  // ]
  // const allProducts = productDetails.map(item => item);
  // const inStockProducts = productDetails.filter(item => item.inStock)
  // const discountProducts = productDetails.filter(item => item.discount > 0)
  // const discountAndInstock = productDetails.filter(item => item.discount > 0 && item.inStock)
  // const [current, setcurrent] = productDetails.useState("allProducts");
  // return (
    
  //   <div className="App">
  //     <div className = "buttons">
  //       <button className = {current === "allProducts" ? "active" : ""}>all products</button>
  //       <button className = {current === "discount" ? "active" : ""}>discount</button>
  //       <button className = {current === "instock" ? "active" : ""}>instock</button>
  //       <button className = {current === "instockdiscount" ? "active" : ""}>discount instock</button>
  //     </div>
  //     {
  //     if (current === "allProducts") }
  //     {
  //     productDetails.map(item => 
  //       <ProductCard
  //       key = {item.id}
  //       name = {item.name}
  //       price = {item.price}
  //       category = {item.category}
  //       inStock = {item.inStock}
  //       discount = {item.discount}
  //       rating = {item.rating}
  //       />
  //     )
  //     }
      
  //   </div>
  // );
  // const [current, setCurrent] = useState(0)
  // return (
  //   <div className = "App">
  //     <button className = "increase" onClick = {() => setCurrent(current+1)}>click me to increase!</button>
  //     <button className = "decrease" onClick = {() => current != 0 ? setCurrent(current-1): setCurrent(0)}>click me to decrease!</button>
  //     <button className = "reset" onClick = {() => setCurrent(0)}>click me to reset!</button>
  //     {current}
  //   </div>
  // )

  // const [current, setCurrent] = useState(true)
  // return (
  //   <div className = "App">
  //     <button className = {current === true ? "green":"gray"}
  //     onClick={() => current === true ? setCurrent(false):setCurrent(true)}
  //     >{current === true ? "on":"off"}</button>
  //   </div>
  // )

  // const [current, setCurrent] = useState("")
  // return (
  //   <div className = "App">
  //     <input value = {current} onChange={(e) => setCurrent(e.target.value)} > 
  //     </input>
  //     <p>hello {current || "stranger"}</p>
  //   </div>
  // )


// const [current, setCurrent] = useState("hide")
  // return (
  //   <div className ="App">
  //     <p>{productDetails.name} </p>
  //     <p>{productDetails.price} </p>
  //     <div className = {current === "show" ? "show" : "hide"}>
  //       <p>{productDetails.category} </p>
  //       <p>{productDetails.rating} </p>
  //       <p>{productDetails.status} </p>
  //     </div>
  //     <button className = "button" onClick={() => current === "show" ? setCurrent("hide") : setCurrent("show")}>{current === "show" ? "hide info" : "more info"}</button>
  //   </div>
  // )
  const productDetails = [
   { id : 1,
    name : "wooden chair",
    price : 79.99,
    category : "chair",
    status : true,
    discount : 10,
    rating : 4.5,
   },
   { id : 2,
    name : "wooden table",
    price : 89.99,
    category : "table",
    status : true,
    discount : 0,
    rating : 4.7,
   },
   { id : 3,
    name : "wooden bed",
    price : 129.99,
    category : "bed",
    status : false,
    discount : 0,
    rating : 4.5,
   },
   { id : 4,
    name : "wooden bench",
    price : 89.99,
    category : "table",
    status : false,
    discount : 10,
    rating : 4.9,
   }
  ]
  let showproducts = []
  const [current, setCurrent] = useState("allproducts")
  if(current === "allproducts"){
     showproducts = productDetails.map(item => item)
  }
  if(current === "instock"){
     showproducts = productDetails.filter(item => item.status)
  }
  if(current === "discount"){
     showproducts = productDetails.filter(item => item.discount > 0)
  }
  if(current === "discountinstock"){
     showproducts = productDetails.filter(item => item.status && item.discount > 0)
  }
  return (
    <div className = "App">
       <button className = {current === "allproducts" ? "clicked" : ""} onClick={() => setCurrent("allproducts")}>all products</button>
       <button className = {current === "instock" ? "clicked" : ""} onClick={() => setCurrent("instock")}>in stock</button>
       <button className = {current === "discount" ? "clicked" : ""} onClick={() => setCurrent("discount")}>discount</button>
       <button className = {current === "discountinstock" ? "clicked" : ""} onClick={() => setCurrent("discountinstock")}>discount instock</button>


      <div className = "products">
        {showproducts.map(item =>
        <ProductCard
        key = {item.id} {...item}
        />
        )}
      </div>
      
    </div>
  )
}

export default App;







































