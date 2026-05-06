//* Primitive Type => TypeScript is support total 7 type of data like:
/*
1.  string => "string";
2.  number => 123;
3.  boolean => tru/false;
4.  null => null;
5.  undefine => undefine;
6.  symbol => !$%&*(;
7.  Bigint => 125458795421 + 12546598712 = 23456897845131
*/
//? Example:

let Myname: string = "suzan";
let age: number = 1235;
let isActive: boolean = true;

//* 🧠 Non-Primitive Type কি?
// Non-Primitive Type হলো এমন ডাটা টাইপ যেগুলো একাধিক ভ্যালু (multiple values) বা complex structure ধরে রাখতে পারে। like:
/*
1.  object.
2.  array.
3.  function.
4.  custom type (interface/type)
*/
// object
type TUser = {
  name: string;
  age: number;
};

let user: TUser = {
  name: "suzan",
  age: 30,
};
// array
let newArray: (string | number)[] = ["md", "suzan", "sheik", 125];

//* object, literal & optional type

// object

let developer: { name: string; age: number } = {
  name: "suzan",
  age: 30,
};

//* 🧱 2. Literal Type ✅ কি?
// Literal type মানে হলো — exact নির্দিষ্ট value।

let access: "success" | "error";
access = "error"; // 👉 এখানে: শুধু "success" বা "error" allowed

type TLiteralValue = {
  name: string;
  role: "user" | "admin"; //* user | admin fix value this is literal value
  age?: number; //* optional
};

let literalValue: TLiteralValue = {
  name: "suzan",
  role: "admin",
};

function calculate(num: number, num2: number): number {
  return num * num2;
}
calculate(10, 10);

//* spread Operator

let SchoolFriend = ["abdullah", "sorif"];
let collageFriend = ["tusher", "raju"];

SchoolFriend.push(...collageFriend);

//* Rest Operator

function sum(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10

//* Destructuring

type TMyBoject = {
  bojectName: string;
  myAge: number;
};

let myBoject: TMyBoject = {
  bojectName: "suzan",
  myAge: 20,
};

let { myAge } = myBoject;

//* Type Alias

type TAlias = {
  objectName: string;
  myAge: number;
};

let oneObject: TAlias = {
  objectName: "suzan",
  myAge: 20,
};

//* 