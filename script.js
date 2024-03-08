// let gameNum = 2363;
// let userNum = prompt("Guess the game number: ");

// while (userNum != gameNum){
//     userNum = prompt("You Entered the wrong number. Guess Again:");
// }

// console.log("Congratulations, You entered the Right Number");


// let fullName = prompt("Enter your full name without spaces:");

// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// let courses = ["ccb", "ccc", "cwd", "dit", "dchmn"];

// for (let i = 0; i < courses.length; i++){
// console.log("value =", courses[i]);
// }

// for (let det of courses){
//     console.log(det.toLocaleUpperCase());
// }

// let marks = [45, 78, 66, 89, 34];

// let sum = 0;

// for (val of marks){
//     sum += val;
// }

// let avg =sum / marks.length;
// console.log(`avg marks of class = ${avg}`);

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 5;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// items.push("jasmeet", "kumar");

// console.log(items);
// let del = items.pop();
// console.log(items);
// console.log("deleted item is", del);

// console.log(items.toString());

// let marvelHeroes = ["ironman", "spiderman", "batman", "antman", "batman", "spiderman"];

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));
// console.log(marvelHeroes);
// let dcHeroes = ["flash", "shaktiman", "superman"];

// // let allHeroes = dcHeroes.concat(marvelHeroes);
// marvelHeroes.unshift("deepak kumar");
// console.log(marvelHeroes);
// let delVal = marvelHeroes.shift();

// console.log(marvelHeroes);
// console.log("deleted ", delVal);


// let number = [1,2,3,4,5,6,7,8,9];

// number.splice(2, 0, 101,102,23,45);
// console.log(number);

// let comapnies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(comapnies);
// comapnies.shift();
// console.log(comapnies);
// comapnies.splice(1, 1, "ola");
// console.log(comapnies);
// comapnies.push("Amazon");
// console.log(comapnies);

// function sum(a,b){
//     ans = a * b;
//     return ans;
// } 

// let key = sum(15,2);
// console.log(key);

// let arrowsSum = (a,b) => {
//     console.log(a + b);
// } 

// arrowsSum(7, 3);

// let arrowsMul = (x,y) => {
//     console.log(x * y);
// } 

// arrowsMul(7, 3);

// function countVowel(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//          {
//             count++;
//         }
//     }
//     return count;
// }
// count("jasmeetkaaur");

// let countVowel = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//          {
//             count++;
//         }
//     }
//     return count;
// }


// let ava = ["delhi", "deepak", "kumar"];

// ava.forEach((vall, pos, ava) => {
//     console.log(vall, pos, ava);
// }

// )

// let nums = [2, 3, 4, 5 ,6, 7, 8, 9];

// nums.forEach((num) =>{
// console.log(num * num);
// });

// let oddArr = nums.filter((val) => {
//     return val%2 !== 0;
// })

// console.log(oddArr);
// console.log(nums);


// let marks = [78, 92, 56, 96, 98, 47];

// let newMarks = marks.filter((val) => {
//     return val > 90;
// })

// console.log(newMarks);
// console.log(marks);


// let n = prompt("Enter a number :");

// let arr = [];
// for ( let i=1; i <= n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//  return res + curr;
// })

// console.log("sum = ", sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
//    })
   
//    console.log("factorial = ", factorial);


// let para = document.querySelector("h2");

// console.dir(para.innerText);

// para.innerText = para.innerText + " from Apna college Students";

// console.dir(para.innerText);

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// divs[0].innerText = "this my uniques 1st div";
// divs[1].innerText = "this my uniques 2nd div";
// divs[2].innerText = "this my uniques 3rd div";

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let graph = document.querySelector("p");
// console.log(graph.setAttribute("style", "color:yellow;"));

// let link = document.querySelector("a");
// console.log(link.setAttribute("href", "https://www.google.com"));

// let newDiv = document.querySelector("div");

// newDiv.style.backgroundColor = "red";

// let button = document.createElement("button");
// button.innerText = "click me!";
// console.log(button);

// let div = document.querySelector("div");
// div.append(button);

// let heading = document.createElement("h1");
// heading.innerHTML = "<i>This is new Heading </i>";

// document.querySelector("body").prepend(heading);

// let newButton = document.createElement("button");
// newButton.innerText = "click me";

// document.querySelector("body").append(newButton);

// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";
// newButton.style.fontSize = "30px";
// newButton.style.border = "none";

// let newPara = document.querySelector("p");
// newPara.classList.add("newClass");

// let modeBtn = document.querySelector("#btn");
// let body = document.querySelector("body");
// let para = document.querySelector("p");
// let nowMode = "light";

// modeBtn.addEventListener("click", () => {
//  if (nowMode === "light") {
//     nowMode = "dark"
//     body.classList.add("dark")
//     body.classList.remove("light")
    // para.classList.add("newpara")
    // para.classList.remove("npara")
//  } else{
//     nowMode = "light"
//     body.classList.add("light")
//     body.classList.remove("dark")
    // para.classList.add("npara")
    // para.classList.remove("newpara")
//  }

//  console.log(nowMode)
// });

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if(turnO) {
         box.innerText = "O";
         turnO = false;
      }else {
         box.innerText = "X";
         turnO = true;
      }
      box.disabled = true;

      checkWinner();
   });
});

const disableBoxes = () => {
   for (let box of boxes) {
      box.disabled = true;
   }
};

const enableBoxes = () => {
   for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner = () => {
   for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      
      if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
         }
      } 
   }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);