//Traditional way to write a function
function myName(){
    console.log("hemanth")
}
myName()

//modern way to write the function
const myName1 = () => console.log("hemanth")
myName1()

function double(x) {
    return x*2
}
const doublePattern1 = (x) =>{
    return x*2
}
const doublePattern2 = (x) => x*2


// Challenge 2: Product formatter
// Write an arrow function that takes a product object and returns:
// "Chair (₹1299) - Available" or "Table (₹2499) - Out of Stock"
const formatProduct = (product) => `${product.name} (${product.price}) - ${product.inStock ? `Available` : `Out of Stock`}`

const product = { name: "Chair", price: 1299, inStock: true }
console.log(formatProduct(product))


// Challenge 3: Filter and map
// From this array, get names of products under ₹2000
const products = [
    { name: "Chair", price: 1299 },
    { name: "Table", price: 2499 },
    { name: "Lamp", price: 599 }
]

const affordable = products.filter(item => item.price < 2000)

const affordableNames = affordable.map(item => item.name)
console.log(affordableNames)  // Should print: ["Chair", "Lamp"]

const affordableNames2 = products.filter(item => item.price < 2000).map(item => item.name)
console.log(affordableNames2)

const affordableIndices = products.filter(item => item.price < 2000).map((item, index) => index)
console.log(affordableIndices) // cannot use this because 
// when we do the filter it will change the indices for every iteration

//use this instead 
const arr = products
    .map((item, index) => item.price < 2000 ? index : -1)
    .filter(index => index !== -1)



// Write arrow function to calculate total price (price * quantity for each item)
const cart = [
    { name: "Chair", price: 1299, quantity: 2 },
    { name: "Lamp", price: 599, quantity: 1 }
]
const getTotal = (cart) =>{
    const totals = cart.map(item => item.price*item.quantity)
       return totals.reduce((total, num) => total+num, 0)
} 

console.log(getTotal(cart))  // Should be: 3197


// Rewrite the grade calculator as an arrow function
const getGrade = (score) => score >= 90 ? "A" : 
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F"



console.log(getGrade(85))  // Should print: B
console.log(getGrade(95))  // Should print: A
console.log(getGrade(55))  // Should print: F


// Write arrow function: age >= 18 AND hasLicense = true → "Can drive"
// Otherwise → "Cannot drive"
const canDrive = (age, hasLicense) => age >= 18 && hasLicense ? "Can drive " : "Cannot drive"

console.log(canDrive(20, true))   // Can drive
console.log(canDrive(16, true))   // Cannot drive
console.log(canDrive(20, false))  // Cannot drive


// Arrow function that takes (price, userType)
// guest: no discount, member: 10% off, premium: 20% off
const calculatePrice = (price, userType) => userType === "guest" ? price : 
userType === "member" ? (price - price*(0.1)) : (price - price*0.2)

console.log(calculatePrice(1000, "guest"))    // 1000
console.log(calculatePrice(1000, "member"))   // 900
console.log(calculatePrice(1000, "premium"))  // 800



// From products array, filter price > 1000 AND inStock = true
// Then return just their names
const products2 = [
    { name: "Chair", price: 1299, inStock: true },
    { name: "Table", price: 2499, inStock: false },
    { name: "Lamp", price: 599, inStock: true },
    { name: "Sofa", price: 8999, inStock: true }
]

const expensiveAvailable = products2.filter(item => item.price > 1000 && item.inStock).map(item => item.name)

console.log(expensiveAvailable)  // Should be: ["Chair", "Sofa"]



// Write arrow function that finds product with matching id
const findById = (allProducts, id) => allProducts.find(item => item.id === id)

const allProducts = [
    { id: 1, name: "Chair" },
    { id: 2, name: "Table" },
    { id: 3, name: "Lamp" }
]

console.log(findById(allProducts, 2))  // Should print: { id: 2, name: "Table" }



// Write arrow function that:
// 1. Takes array of prices
// 2. Filters prices > 500
// 3. Applies 18% tax to each
// 4. Returns the array of final prices

const processPrices = (prices) => prices.filter(item => item > 500).map(item => item+(item*0.18))


const prices = [300, 600, 1000, 450]
console.log(processPrices(prices))  // Should be: [708, 1180]