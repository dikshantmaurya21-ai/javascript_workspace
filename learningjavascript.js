console.log("hello")
const account_id = 3435435
let accountemail = "dikshant@gmail.com"
var accountpassword = "2345"
let accountCity = "delhi"
// let account_id = 3
console.log(account_id)

accountemail = "dikshant@123.com"
accountpassword = "2313"
accountCity = "uttar pradesh" 
// accountstate;

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountemail, accountpassword, accountCity])