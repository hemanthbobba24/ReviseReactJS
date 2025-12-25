// import './App.css';

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

import './App.css';

function App() {
  // Cart items
  const item1 = {
    name: "Modern Chair",
    price: 1299,
    quantity: 2
  };

  const item2 = {
    name: "Desk Lamp",
    price: 599,
    quantity: 1
  };

  const item3 = {
    name: "Oak Table",
    price: 2499,
    quantity: 1
  };

  // Your calculations here
  const item1Total = item1.price * item1.quantity
  const item2Total = item2.price * item2.quantity
  const item3Total = item3.price * item3.quantity
  
  const subtotal = item1Total + item2Total + item3Total
  const tax = Math.round(0.18 * subtotal)
  const finalTotal = subtotal + tax

  return (
    <div className="App">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        {/* Item 1 */}
        <div className="cart-item">
          <span>{item1.name} × {item1.quantity}</span>
          <span className="item-total">₹{item1Total}</span>
        </div>

        {/* Item 2 - You complete */}
        <div className = "cart-item">
          <span>{item2.name} x {item2.quantity}</span>
          <span className="item-total">{item2Total}</span>
        </div> 
        
        {/* Item 3 - You complete */}
        <div className='cart-item'>
          <span>{item3.name} x {item3.quantity}</span>
          <span className="item-total">{item3Total}</span>
        </div>

        <hr />

        {/* Summary */}
        <div className="summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Tax (18%):</span>
            <span>₹{tax}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
























