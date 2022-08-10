//#1

const asianCountries = ["Iran", "Iraq", "Afghanistan"];
const euroCountries = ["Germany", "Swiss", "Norway", ...asianCountries];

console.log(euroCountries);

const both = [...asianCountries, ...euroCountries];
console.log(both);

//#2

const arr1 = ["this", "is", "going", "to", "be", "copied"];
const arr1Copy = [...arr1];

console.log(arr1Copy);

//#3
const numbers = [12, 334, 556, 73, 332, -23, -8334];
console.log(Math.max(...numbers));

//#4

console.log(Math.min(...numbers));

//#5
const person = { name: "John" };
const job = { role: "Teacher" };

//#5.1
const personClone = { ...person };
console.log(personClone);

//#5.2

const employee = { ...person, ...job };
console.log(employee);

//#5.3
(employee.name = "Ezekiel"), (employee.role = "Programmer");
console.log(employee);

//Bonus 6

const isWholeNumber = (a, b, c, d) => ((a + b + c + d) / 4) % 1 === 0;
console.log(isWholeNumber(9, 2, 2, 5));
