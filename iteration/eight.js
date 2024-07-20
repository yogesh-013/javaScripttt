const array = [1,2,3,4,5,6,7,8,9]
const ans = array.reduce( (prev , curr) => prev + curr , 10 )
console.log(ans)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const newAns = shoppingCart.reduce( (prev , curr) => prev + curr["price"] , 4   )
console.log(newAns)