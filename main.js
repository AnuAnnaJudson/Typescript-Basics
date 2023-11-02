"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back"; //here file is treated as script not a module
// a module has its own scope , scripts share global scope to fix this error use export {}
//To see the corresponding changes in js file after a change is made here use tsc <filename.ts>
// or simply use the command tsc main --watch
//in a different terminal use node <filename> to get the output of js file as usual
console.log(message);
var x = 10; //let can be used when you need to reassign values to the variable
//let can be left uninitialized
var y = 20; //cannot reassign or left uninitialized
var sum;
var title = "Learning typescript"; //alsways use const for variables which does not need to be reassigned
var isBeginner = true; //here define type as shown here
var total = 0;
var name = "Flower"; //cannot reassign any other type value to this one
var sentence = "my name is ".concat(name, "\nI am a beginner in typescript\n"); // A template literal can be used to use a variable in a string also for multiline string values
console.log(sentence);
var n = null;
var u = undefined;
//null and undefined are also types in typescipt which are basically called as subtypes as you can
//intialize other type variables using this types as shown below
var isNew = null;
var myName = undefined; //also union type
console.log(isNew, myName);
var numArray = [1, 2, 3, 4, 5];
var newNumArray = [1, 2, 3]; //2 ways to declare arrays
var person1 = ["Name", 22]; // this is called a puple where it contains different types of values
//ENUM TYPE
//number and order of values are fixed also length is fixed
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 20] = "Green";
    Color[Color["Blue"] = 90] = "Blue";
})(Color || (Color = {})); //enum is atype which helps us give fancy names to a set of numeric value
var c = Color.Blue; //by default here the value will be 1. In enum without specifying values the first element jas a value of 0 and progress
//We can also change the initial value number and the rest will have the consecutive numeric values,
//ie. here if we give Red=5 then Green will be 6 and so on by default
//I we give Green as 20 then blue will be 21
//Values will be consecutive to the previous initailaized on if not explicitly initialized
console.log(c);
var randomValue = true;
randomValue = "hello";
randomValue = 70;
function hasName(obj) {
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
var a;
a = 10;
a = true;
var b = 20; //here type checking happpens unlike the above option, only works where there is initialisation,
//here type is inferred
//Which means here b can be assigned only number values
//UNION TYPES
var multiType; //allows both types when reassigning and only allows these specified types unlike any type
multiType = 20;
multiType = true;
//FUNCTIONS
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
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
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "Bruce",
    // lastname:"Wayne"
};
fullName(p);
//CLASSES AND INHERTANCE
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Barry');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//ACCESS MODIFIERS
//by default each class member is public, can access from anywhere
//private members can be accessed only within the class(secure class properties)
//cannot access private members in derived class either
//protected members can be used with the class itself and also in derived class
