const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((num) => {
    return num * 2;
})
  
console.log(numTimes2)

// --

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];


const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping)
console.log(secondTopping)

const car = {
    make: 'Audi',
    model: 'q5',
    };
  
const { make, model } = car;

console.log(make)
console.log(model)
  

console.log(car.make)
console.log(car.model)

const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)

const myCar = {...car}

myCar.model = 'q7'

console.log(car)
console.log(myCar)

const propertyName = 'email';

const userProfile = {
    [propertyName]: 'amgoat@gmail.com'
}

const findUser = userProfile[propertyName];

console.log(findUser);


function petSentence(noun = 'cat', adjective = 'white') {
    console.log('This  + ${noun} +  is + adjective');
}

petSentence('dog', 'black');


let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} 
else {
  console.log('yuck');
}
// let taste = pizza === 'tasty' ? 'yum' : 'yuck';

console.log(taste);





const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null



const LANG = localLangConfig || 'en'



console.log('Language setting:', LANG);


const userSavedTheme = 'dark'; 

const USER_THEME = userSavedTheme || 'light'

console.log('User theme setting:', USER_THEME);



// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.name;

console.log(cat);