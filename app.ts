let name: string 
// defined varible as my name, Katherine
// const states: number= 50;
// defined constant of how many states as an integer, 50
// const sum = 5 + 4;
// named a variable for the sum of 5 + 4, which should output 9

sayHello=()=>{
    alert("Hello World")
}
sayHello()

checkAge=(name, age)=> {
    if (age < 21) {
        return alert(`Sorry" ${name} ",you aren't old enough to view this page`)
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17)

let vegetables = ["corn", "onions", "broccoli", "greenbeans"]
for (let a = 0; a < vegetables.length; a++) {
    console.log(vegetables[a]);
}


let friends = [
    {
        name: "George",
        age: 27
    },
    {
        name: "Audrey",
        age: 25
    },
    {
        name: "Tricia",
        age: 35
    },
    {
        name: "Wallace",
        age: 18
    },
    {
        name: "William",
        age: 16
    }
];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].name);
    console.log(friends[i].age)
}
checkAge("George", 27)
checkAge("Audrey", 25)
checkAge("Tricia", 35)
checkAge("Wallace", 18)
checkAge("William", 16)


getLength=(word1) =>{
    return word1.length
}
getLength ("Hello World")

const sum = getLength("Hello World")
if (sum % 2 == 0){
    console.log ("The world is nice and even!")
}else {
    console.log ("The world is an odd place!")
}

