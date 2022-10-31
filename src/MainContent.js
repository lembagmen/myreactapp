import message from './Message.js';

//DESTRUCTURING -----------------------------------------------------------------------------------------------------------------
const names = ["James", "Rowen", "Jessie", "Tims", "Maki", "Eunice", "Mark"];
const nameList = names.map((item) => <li>{item}</li>);
const greetings = <h1>{message}</h1>

const vehicles = ["mustang", "F-150", "expedition"];
const [car, truck, suv] = vehicles;

const [name1, name2, name3,, name4,, name5] = names;

const apple = {
   color: "red",
   shape: "round",
   quantity: 10,
}
let {color: appleColor, shape: appleShape} = apple;



const greenApple = {
   color: "green",
   price: 25,
}



//SPREAD Operator ------------------------------------------------------------------------------------------------------------------
let setOfNumbers1 = [23, 34, 56, 34, 5, 8, 11, 43];
let setOfNumbers2 = [23, 34, 56, 34, 5, 8, 11, 43];
let combineNumbers = [...setOfNumbers1, ...setOfNumbers2].map((number) =><div>{number}</div>);

let [first, second, ...rest] = setOfNumbers1;



// let fruitData = {...apple, ...greenApple} //{fruitData.color} = green
let fruitData = {...greenApple, ...apple} //{fruitData.color} = red


let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange);

let speed = 200;
let speedWarning = speed >= 120 ? speed >= 200 ? "Daredevil" : "Too fast" : speed >= 80 ? "Fast" : "OK";



function MainContent(){
   return(
      <div>
         {speedWarning}
         <div className="banner">{greetings}</div>
            <section>
               <ul>
                  {nameList}
               </ul>
               <p>
                  {car},
                  {truck},
                  {suv}
               </p>
            </section>
            <section>
               <form>
                  <input type="text" className="form-control"></input>
               </form>
            </section>

            <div className="row">
               <div className="col-sm-6">
                  <p>{name1}, {name2}, {name3}, {name4}, {name5}</p>
                  <p>{appleColor}, {appleShape}</p>
                  <p>{combineNumbers}</p>
               </div>
               <div className="col-sm-6">
                  <p>{first}</p>
                  <p>{second}</p>
                  <p>{rest}</p>
                  <p>{fruitData.color}, {fruitData.price}, {fruitData.quantity}, {fruitData.shape}</p>
               </div>
            </div>
      </div>
   );
}
export default MainContent;