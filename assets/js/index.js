// math object//
console.log(Math.round(3.45689))

console.log(Math.round(5.4598048495)) 

console.log(Math.floor(7.999999))

console.log(Math.ceil(57.99035))

console.log(Math.min(-7,5,9,31,99))

console.log(Math.max(-9, -13, 200, 4000, 50, -10))

console.log(Math.abs(-6))

console.log(Math.sqrt(158)) 

console.log(Math.pow(12,2)) 

console.log(Math.E) 

console.log(Math.log(10)) 

console.log(Math.log(30)) 
// math object end//

// non-primitive datatypw and comparision start//
let sumOne = 3 
let sumTwo = 6 
console.log(sumOne === sumTwo) 

let devision1= 7
let devision2= 7
console.log(devision1==devision2)

/*let nameone= "surbhi"
let nametwo= "sakshi"
console.log(nameone == nametwo)*/

let num1=[9,8,7]
num1[0]=10
num1[2]=11
console.log(10,8,11)

let num2=[2,3,4]
num2[1]=5
console.log(2,5,4)

console.log(num1==num2)
// comparision end//

//objects//

let person = {
    name:'Surbhi Sahu',
    fathername:'Sunil Sahu',
    age:20,
    role:'student',
    job:false,
    salary:null
};

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.salary)

console.log(person['name'])
console.log(person['job'])
console.log(person['role'])

//object end//

//array start//

let selectorprofile =['profile1','profile2','profile3','profile4','profile5'];

console.log(selectorprofile)

let profile1 = {
     name:'Sakshi',
     age:20,
     role:'student',
     job:false,
     salary:null
};
console.log(profile1)

let profile2 = {
    name:'Aayush',
    age:'26',
    role:'student',
    job:true,
    salary:'10k'
};
console.log(profile2)

let profile3 ={
    name:'hussian',
    age:19,
    role:'student',
    job:false,
    salary:null
};
console.log(profile3)

let profile4 ={
    name:'surbhi',
    age:20,
    role:'student',
    job:false,
    salary:null

}
console.log(profile4)

let profile5 ={
     name:'Divya',
     age:26,
     role:'Employe',
     job:true,
     salary:'15k'
     
}
console.log(profile5)

//array end//