// Challenge 1: Swap variables using array destructuring
let a = 5
let b = 10
// Your code here to swap them
// After swap: a = 10, b = 5

// //traditional way
// let temp = 0;
// temp = a;
// a = b;
// b = temp;
;[a, b] = [b, a]
console.log(a, b)

// Challenge 2: Extract nested properties
const user = {
    name: "Hemanth",
    address: {
        city: "Bangalore",
        pincode: 560001
    }
}
// Extract city and pincode using destructuring
// Your code here
const {city, pincode} = user.address
console.log(city, pincode)


// Challenge 3: Function that formats product
// Should destructure and return: "Chair (₹1299) - In Stock"
const formatProduct = ({name, price, inStock}) => {
    return  inStock === true ? `${name} (${price}) - In Stock` : `${name} (${price}) - Out of Stock`}
console.log(formatProduct({ name: "Chair", price: 1299, inStock: true }))
console.log(formatProduct({ name: "Table", price: 2499, inStock: false }))


// Challenge 4: Add item to cart immutably
const cart = [
    { id: 1, name: "Chair", quantity: 2 },
    { id: 2, name: "Table", quantity: 1 }
]

const newItem = { id: 3, name: "Lamp", quantity: 1 }
// Create new cart with newItem added (don't modify original)
const updatedCart = [
    ...cart,
    newItem
]
console.log(updatedCart)


//challenge 5
const products = [
    { id: 1, name: "Chair", quantity: 2 },
    { id: 2, name: "Table", quantity: 1 }
]

// Update quantity of id=1 to 5 (create new array, don't modify original)
const updatedProducts = products.map(item => item.id === 1 ? {...item, quantity: 5} : item)
console.log(updatedProducts)


// Challenge 6: Merge user info immutably
const basicInfo = { name: "Hemanth", age: 25 }
const contactInfo = { email: "hemanth@example.com", phone: "1234567890" }

// Merge both objects into one
const fullInfo = {...basicInfo, ...contactInfo}// Your code here
console.log(fullInfo)


// Challenge 7: Remove item from cart immutably
const cart2 = [
    { id: 1, name: "Chair" },
    { id: 2, name: "Table" },
    { id: 3, name: "Lamp" }
]

// Remove item with id=2 (create new array without it)
const updatedCart2 = cart2.filter(item => item.id !== 2)
console.log(updatedCart2)






// Challenge 8: Extract and format
const order = {
    orderId: "ORD123",
    customer: {
        name: "Hemanth",
        email: "hemanth@example.com"
    },
    items: [
        { name: "Chair", price: 1299 },
        { name: "Lamp", price: 599 }
    ]
}

// Extract: orderId, customer name, first item name
// Your code here using destructuring
const {
    orderId,
    customer:{name},
    items:[{name : firstItem}]
} = order
// const orderPrint = order.map(item => item.orderId, item.customer.name).filter((item,index) => item.index === 0).map(item => item.items.name)
// Expected output: "Order ORD123 for Hemanth - First item: Chair"
console.log(`order ${orderId} for ${name} - First item: ${firstItem}`)





// Challenge 1: Extract specific properties
const laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 80000,
    specs: {
        ram: "16GB",
        storage: "512GB SSD"
    }
}

// Extract brand, price, and ram using destructuring
const {brand, price, specs:{ram}} = laptop
// Your code here

console.log(brand, price, ram)  // Dell 80000 16GB


// Challenge 2: Rename while destructuring
const book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 300
}

// Extract title as bookTitle and author as bookAuthor
const {title:bookTitle, author:bookAuthor} = book
// Your code here

console.log(bookTitle, bookAuthor)  // JavaScript Guide John Doe



// Challenge 3: Default values
const settings = {
    theme: "dark",
    language: "English"
    // notifications is missing
}

// Extract theme, language, and notifications (default to true if missing)
const {theme, language, notifications = true} = settings
// Your code here

console.log(theme, language, notifications)  // dark English true



// Challenge 4: Get first and last
const scores = [85, 92, 78, 95, 88]

// Get first score and last score using destructuring
// Your code here
const [first] = scores
const last = scores[scores.length-1]

console.log(first, last)  // 85 88




// Challenge 5: Skip elements
const colors = ["red", "green", "blue", "yellow", "purple"]

// Get first, third, and fifth colors (skip second and fourth)
// Your code here
const [first1, ,third, ,fifth] = colors
 
console.log(first1, third, fifth)  // red blue purple



// Challenge 6: Get first two and rest
const numbers = [10, 20, 30, 40, 50]

// Get first, second, and remaining in an array called rest
// Your code here
const [first3, second3, ...rest] = numbers

console.log(first3, second3, rest)  // 10 20 [30, 40, 50]



// Challenge 10: Add new property
const user6 = {
    name5: "Hemanth",
    age: 25
}

// Add email property without modifying original
// Your code here
const  updatedUser = {...user6, email : "hemanth@gmail.com"}

console.log(updatedUser)  
// { name: "Hemanth", age: 25, email: "hemanth@example.com" }





// Write a function that creates a product description
// Use destructuring in parameters with default values

// const createProduct = ({name, price, inStock}) =>{
//     return `${name} costs ${price===undefined ? 0 : price} and ${inStock ===false ? `is out of Stock` : `is in Stock`}`
// }

const createProduct = ({name, price = 0, inStock = true}) =>{
    return `${name} costs ${price} and ${inStock ? `is in stock` : `is out of stock`}`
}

// Test cases:
console.log(createProduct({ name: "Chair", price: 1299 }))
// "Chair costs ₹1299 and is in stock"

console.log(createProduct({ name: "Table", price: 2499, inStock: false }))
// "Table costs ₹2499 and is out of stock"

console.log(createProduct({ name: "Lamp" }))
// "Lamp costs ₹0 and is in stock"
// (price defaults to 0, inStock defaults to true)
//Destructure name, price, inStock in function parameters
//price should default to 0 if not provided
//inStock should default to true if not provided
//Return the formatted string