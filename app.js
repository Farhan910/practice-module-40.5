const allName = () => {
  const num = prompt('hey warning')
  const parsing =parseInt(num)
  const numb = parsing + 200;
  alert(numb)

  const link = confirm("you want to see the link ?");
  if (link == true) {
    console.log(5500);
  }



};

// const name = 'Hero';const age = 34;
// const person = {name, age}; console.log(person);

// const person = { name : ”Babe” }
// console.log(person.name);


const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
console.log(ratName);

let person =null;
console.log(person ? person : "person is null");


const obj = {a:1};
console.log(Object.keys(obj).length===0);