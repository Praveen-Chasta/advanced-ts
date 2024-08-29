// Advance TS Concept  (Pick, Partial, Readonly, Record, Exclude, Map)

// 1. Pick 


interface User{
    name   : string,
    email  : string,
    number : number
}


type UserInfo = Pick<User, "name" | "email">


// function getUserInfo(user : UserInfo){
//     return "Hai My Name " + `${user.name}` + "and my email is " + `${user.email}`
// }



// console.log(getUserInfo({name:"Praveen Chasta", email:"praveen.chastaa@gmail.com"}))


// 2. Partial

// type updateUserInfo = Partial<UserInfo>

// function updateUser(user : updateUserInfo){
//     return "Hai My Name " + `${user.name}` + "and my email is " + `${user.email}`
// }

// console.log(updateUser({name: "Happy", email: "happysingh@gmail.com"}))