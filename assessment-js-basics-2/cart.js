///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0)

console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal + (cartTotal * tax) - couponValue
    
}
console.log(calcFinalPrice(100, 10, 0.05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The Customer Model for a Cart page should have:
Customer Name: string, to identify the customer
Items in cart: array with the items that customer chose to buy
Customer Delivery address: string, for delivery's purposes and availability
Billing name: strint to idenify payor
payment type: a string or boolean that direct to the specified payment type
card number: number to identify the card 
card security code: number tha validates the card
card expeiration date: string to validate card
billing address: string for billing references
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerObject = {
    'customerName': 'Matias',
    'items': ['pepperoni pizza', 'regular coke'],
    'customerDeliveryAddress': '123 Utah Street, 84036 Utah',
    'billingName': 'Jon',
    'paymentType': 'applePay',
    'cardNumber': 12345678903214,
    'cardSecurityCode': 000,
    'cardExpDate': '01/01/2050',
    'billingAddress': '321 Utah Street, 84036 Utah',
       
}
