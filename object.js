//Given an array of objects, each object representing a person with a 
//name and age property, write a function that returns a new array containing
// the names of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
const adult_age=(people)=>{
   return people.filter(person => person.age >= 18).map(person => person.name)

}

//const adult_age=function(people){
  //let maximum=[];
  //let maxAge=18;
 // for(let i=0;i<=people.length;i++){
    //let age=people.age
    //if(age <= maxAge){
      //maximum=people[i];
   // }
  //}
 // return maxAge
//}
 console.log(adult_age(people));


//Write a function that takes an array of objects, where each object 
//represents a product with a name, price, and category property. 
//The function shouuld return an object that groups the products by 
//their categories, with the category names as keys and the arrays of 
//products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];

const ProductCategory = (products) =>{
  // initialize an empty object
  const result = {}
  // Loop throu each product exracting the name,price, category
  for(let i = 0; i < products.length; i++){
      const { name, price, category} = products[i]
      // if the 'category' does not exist as a key in the 'result' object, we initiallize it as an empty array
      if(!result[category]){
          result[category] = []
      }
      // The function then pushes an object containing the name and price properties to the appropriate category array
      result[category].push({name, price,category})
  }
  return result
}
const product = ProductCategory(products)
console.log(product);
//Given an array of objects, where each object represents a student 
//with a name and an array of scores, write a function that returns a 
//new array containing the names of all students whose average score is 
//greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
let average= []
for(let x=0;x<students.length;x++){
  let marks=averages(students[x].scores);
  console.log(students[x].name + ": " + marks)
  average.push(marks)
}

console.log("total average: " +averages(average));

function averages(array) {
  return array.reduce((total, marks) => total +marks, 0)/ array.length;
}

//Given an object representing a car, with properties for the make, model, year,
//and a method to display the car's information, write a function that takes 
//the car object and adds a new method to the object called age. 
//The age method should return the current age of the car based on the current 
//year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  age:[],
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

function add_age(){
  for(let i=0;i < add_age.length;i++){
    
  }
}

