
/**
 * this fuction calculete total price of a new order
 * 
 * param {Array} products array objets
 * returns price total(number)
 */

export const totalPrice =(products)=>{
    let sum=0;
    products.forEach(product => sum += product.price);
    return sum
}
