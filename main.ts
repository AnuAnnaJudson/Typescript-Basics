export {};
let message = "Welcome back"; //here file is treated as script not a module
// a module has its own scope , scripts share global scope to fix this error use export {}
//To see the corresponding changes in js file after a change is made here use tsc <filename.ts>
// or simply use the command tsc main --watch
//in a different terminal use node <filename> to get the output of js file as usual

console.log(message);

let x = 10; //let can be used when you need to reassign values to the variable
//let can be left uninitialized
const y = 20; //cannot reassign or left uninitialized

let sum;
const title = "Learning typescript"; //alsways use const for variables which does not need to be reassigned

let isBeginner: boolean = true; //here define type as shown here
let total: number = 0;
let name: string = "Flower"; //cannot reassign any other type value to this one

let sentence: string = `my name is ${name}
I am a beginner in typescript
`; // A template literal can be used to use a variable in a string also for multiline string values
console.log(sentence);
let n: null = null;
let u: undefined = undefined;
//null and undefined are also types in typescipt which are basically called as subtypes as you can
//intialize other type variables using this types as shown below

let isNew: boolean | null = null;
let myName: string | undefined = undefined; //also union type
console.log(isNew, myName);

let numArray: number[] = [1, 2, 3, 4, 5];
let newNumArray: Array<number> = [1, 2, 3]; //2 ways to declare arrays

let person1: [string, number] = ["Name", 22]; // this is called a puple where it contains different types of values

//ENUM TYPE
//number and order of values are fixed also length is fixed
enum Color {
  Red = 10,
  Green = 20,
  Blue = 90,
} //enum is atype which helps us give fancy names to a set of numeric value

let c: Color = Color.Blue; //by default here the value will be 1. In enum without specifying values the first element jas a value of 0 and progress
//We can also change the initial value number and the rest will have the consecutive numeric values,
//ie. here if we give Red=5 then Green will be 6 and so on by default
//I we give Green as 20 then blue will be 21
//Values will be consecutive to the previous initailaized on if not explicitly initialized
console.log(c);

let randomValue: unknown = true;
randomValue = "hello";
randomValue = 70;

function hasName(obj: any): obj is { name: string } {
  //function to check whether the given object has a property of the name "name"
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(randomValue)) {
  console.log(randomValue.name);
}

// console.log(randomValue.name);// all these dont throw error , only shown error in runtime
//to tackle this issue we have type unknown
//type unknowns cannot be called or constructed

// randomValue();
// (randomValue as string).toUpperCase(); //this method is called type assertion similar to type casting

//TYPE INFERENCE
let a;
a = 10;
a = true;

let b = 20; //here type checking happpens unlike the above option, only works where there is initialisation,
//here type is inferred
//Which means here b can be assigned only number values


//UNION TYPES
let multiType: number | boolean; //allows both types when reassigning and only allows these specified types unlike any type
multiType = 20;
multiType = true;


//FUNCTIONS
function add(num1: number, num2: number=10): number {//optional parameters should come after required paramaters, here num 1
                                                   // is required if you need to make it optional and num 2 required, switch the order before putting ? to num1
                                                   //ypu can also set default value in paramter as  num2: number=10
  //parameters can have types as shown and to specify the type
  //it return you can use :<type> after parameter list
  //even if return type not specified the intellisense shows the return type correctly ,
  //that means type would be inferred
  if (num2) {
    return num1 + num2;
  }
  return num1;
}

console.log(add(10, 20)); //hover over add to see the intellisense hints

console.log(add(2)); //you can make parameters optional by putting "?" after the name of the variable

//INTERFACE

// function fullName(person: { firstname: string, lastname: string }) {
//     console.log(`${person.firstname} ${person.lastname}`);
// }
interface Person{//to create a new type without ahving to seperately specify the attributes like in line no.103
    firstname :string;
    lastname?: string;//lastname is made optional
}
function fullName(person:Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}


let p={
    firstname:"Bruce",
    // lastname:"Wayne"
}
fullName(p)


//CLASSES AND INHERTANCE
class Employee{
    employeeName: string;
    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
        
    }
}

let emp1=new Employee('Barry')
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{//inhertance: inherits properties of base class here Employee
    constructor(managerName:string){
        super(managerName);//to initialise employeeName in base class
    }
    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);
        
    }
}

let m1=new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//ACCESS MODIFIERS
//by default each class member is public, can access from anywhere
//private members can be accessed only within the class(secure class properties)
//cannot access private members in derived class either
//protected members can be used with the class itself and also in derived class
