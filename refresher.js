///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variable scope //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_0() {
    GlobalVariableExample = 1;
    console.log("GlobalVariableExample inside example_0: -->> ", GlobalVariableExample);    // -->> 1
}
example_0();
console.log("GlobalVariableExample outside example_0: -->> ", GlobalVariableExample);       // -->> 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checking for equality //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_1() {
    var x = 5;
    var y = "5";

    // do type conversion if needed, then check for equality
    // so y is converted from "5" to 5
    // then the comparison is made
    console.log('(5 == "5"): -->> ', (x == y));  // -->> true

    // no type conversion done, x & y must have same type
    console.log('(5 === "5"): -->> ', (x === y)); // -->> false
}
example_1();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Manipulating objects //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_2() {
    var Car = {
        "company": "Tesla",
        "model": "Model X",
        "released": 2019
    };
    Car.model = "Roadster";
    Car.released = 2020;
    console.log(`${Car.company} is set to release the ${Car.model} in ${Car.released}`);
}
example_2();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating Instances of certain Type or Class //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_3() {
    var Student = function (name, university) {
        this.name = name;
        this.university = university;
    };
    var s0 = new Student("Omar", "Guc");
    var s1 = new Student("Amin", "Guc");
    console.log(`${s0.name} is a student at the ${s0.university}`);
    console.log(`${s1.name} is a student at the ${s1.university}`);
}
example_3();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modifying class members or Fields //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_4() {
    var Student = function (name, university) {
        this.name = name;
        this.university = university;
    };
    Student['age'] = 0;
    var s0 = new Student("Omar", "Guc");
    s0.age = 25;
    var s1 = new Student("Amin", "Guc");
    s1.age = 24;
    console.log(`${s0.name} is a ${s0.age} years old student at the ${s0.university}`);
    console.log(`${s1.name} is a ${s1.age} years old student at the ${s1.university}`);
}
example_4();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Private class members and functions + priviliged functions //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function example_5() {
    // a private static counter that counts how many bank accounts have been created
    var staticBankAccountsCounter = 0;  // not accessible outside example_5 function
    function BankAccount(username, password) {

        // initSecret is a private function
        // it can access private members
        // but it cannot be called from outside the class
        function initSecret() {
            secret = staticBankAccountsCounter++;
        }

        // getSecret is a priviliged function
        // because it has access to private members
        // yet at the same time, the function itself is public
        this.getSecret = function () {
            return secret;
        }

        // getPassword is a priviliged function
        // because it has access to private members
        // yet at the same time, the function itself is public
        this.getPassword = function () {
            return password;
        }

        this.username = username;   // public member
        var secret = 0;             // private member
        var password = password;    // private member
        var that = this;            // private member

        initSecret();               // called on instantiation to assign a new seret id to the object
    }
    var account = new BankAccount("batman", "xxx");
    console.log(account.username);
    console.log(account.getPassword());     // the only way to access password is through this function call
    console.log(account.getSecret());       // the only way to reach the value secret is through this function

    var account2 = new BankAccount("spiderman", "aaa");
    console.log(account2.username);
    console.log(account2.getPassword());    // the only way to access password is through this function call
    console.log(account2.getSecret());      // the only way to reach the value secret is through this function
}
example_5();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
