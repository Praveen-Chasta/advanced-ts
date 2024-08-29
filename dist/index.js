"use strict";
// Advance TS Concept  (Pick, Partial, Readonly, Record, Exclude, Map)
function updateUser(user) {
    return "Hai My Name " + `${user.name}` + "and my email is " + `${user.email}`;
}
console.log(updateUser({ name: "Happy", email: "happysingh@gmail.com" }));
