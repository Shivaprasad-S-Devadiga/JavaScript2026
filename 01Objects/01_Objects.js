//SIGLETON
//Object.create


//OBJECT LITERALS

const mySyml = Symbol("key1")

const myUser = {
    name :"shiv",
    "full name" : "Shiv D",
    [mySyml] : "key2", //symbol declarartion
    age :18,
    location : "Jaipur",
    isLogedin : false,
    lastLogedin : ["monday", "friday"],
}

console.log(typeof mySyml)

console.log(myUser.name); // not prefered way to acess
console.log(myUser["full name"]) // preferef beacuse of this case

//FREEZE OBJECT
//Object.freeze(myUser)
myUser.location = "UDUPI"
console.log(myUser.location)


myUser.greeting = function(){
    console.log("Hello JS user");
}
myUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingTwo());