
`This is used to print any statement`
 
//${} --- > this is used to print the variable inside the ``

// for if statements we directly wirite the condition and write the statement
// after ? that you want to  print if the condition is true 
// : is like else to print if the consdition is not true

const a = "Hemanth Sri Ram"
const age1 = 25
const message1 = `My name is ${a} and my age is ${age1}`
console.log(message1)



let name = "hemanth sri ram"
 age = 25
const message = `I am ${name} next year I will be ${age+1}`
console.log(message)
console.log(age)

const productName = "Gaming chair"
const stock = 5
const price = 15000
const availability = `${
    stock > 0 ? `gaming chair is availability is at 15000`:
    `gaming chair is out of stock`}`
console.log(availability)


const orderTotal = 3500
const isMember = true
const discount = `${isMember ? orderTotal*0.2 : orderTotal*0.1}`
const finalPrice = orderTotal - discount
console.log(discount)
console.log(finalPrice)
console.log(orderTotal)

const score = 85
const grade = score>=90 ? "A" : score>=80 ? "B" : score >=70 ? "C" : score>=60 ? "D" : "F"
console.log(grade)


const cartTotal = 1500
const location = "metro" 
const shippingCost = cartTotal >= 2000 ? 0 : location === "metro" ? 100 : 200

console.log(`Cart: ₹${cartTotal}`)
console.log(`Shipping: ₹${shippingCost}`)
console.log(`Total: ₹${cartTotal + shippingCost}`)



const userAge = 17
const isPremium = false
const accountYears = 3

const badge = userAge < 18 ? "Junior User" : isPremium && accountYears >= 2 ? 
"VIP Member" : isPremium ? "Premium Member" : "Regular User"

console.log(`Status: ${badge}`)







const product = {
    name: "Modern Desk",
    price: 4500,
    stock: 0,
    rating: 4.5,
    discount: 15
}
const productCard = `
Name : ${product.name}
Original Price : ${product.price}
Discounted Price : ${product.discount > 0 ? product.price - (product.price*(product.discount/100)) : product.price}
stock : ${product.stock <= 0 ? "OUT OF STOCK" : "IN STOCK"}
Rating message : ${product.rating >= 4.5 ? "EXCELLENT" : product.rating >= 4 ? "GOOD" : "AVERAGE"}
`
console.log(productCard)




// Create your own product from Cloud Furniture
const chair = {
    name: "Your Product Name",
    price: 1299,
    quantity: 3,
    inStock: true
}
const productSummary = `
name = ${chair.name}
price = ${chair.price}
subtotal = ${chair.price*chair.quantity}
stock status = ${chair.inStock ? "In Stock" : "Out of Stock"}
Message = ${chair.quantity >= 2 ? "bulk discount eligible ":""}
`
console.log(productSummary)


const items = 4
const itemPrice = 500
const userType = "guest"
const couponCode = "SAVE10" 
const subtotal = items*itemPrice
const userDiscount = userType === "guest" ? 0 : userType === "member" ? 5 : 10
const couponDiscount = couponCode === "SAVE10" ? 10 : 0
const userDiscountAmount = subtotal - (subtotal*(userDiscount/100))
const total = userDiscountAmount - (userDiscountAmount*(couponDiscount/100))
console.log(`
Items: ${items}
Subtotal: ₹${subtotal}
User Discount: ${userDiscount}%
Coupon Discount: ${couponDiscount}%
Total: ₹${total}
`)