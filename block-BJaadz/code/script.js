// Select the h1 element and store it in a variable named heading.

let heading = document.querySelector("h1");

// Check the typeof heading and log it.

console.log(typeof heading);

// Change the color of heading to black.

heading.style.color = "black";

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs = document.querySelectorAll("hr");

/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray
Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/

let allHrsArray = Array.from(allHrs);

// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.map((element) =>
    element.style.border = "1px solid black"
)

// Change the background of all the hr to "antiquewhite" using for of loop.

for (let ele of allHrsArray) {
    ele.style.backgroundColor = "antiquewhite";
}

// Change the 'border-radius' of all the hr to "5px" using array.

for (let ele of allHrsArray) {
    ele.style.borderRadius = "5px";
}

// Change the alignment of the heading(h1) to center.

heading.style.textAlign = "center";

// Change the font size of the heading to 3rem.

heading.style.fontSize = "3rem";

// Change the border of hr with class 'image' to `2px solid purple`.

let eleArr = [];
allHrsArray.forEach(function(elem) {
    if (elem.getAttribute("class") === "image") {
        elem.style.border = "2px solid purple";
        return eleArr.push(elem);
    }
})

// Hide the box number 17 (last box).

document.body.children[0].lastElementChild.children[16].remove();

// Change the border of all the hr element from solid to dashed type

allHrsArray.map((p) =>
    p.style.border = "dashed"
)

// Create a pragraph element and store it in variable named 'para' using `createElement`

let para = document.createElement("p");

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

para.innerText = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";

// Remove all the elements from box 1

let rmElement = document.body.children[0].lastElementChild.firstElementChild.children;
for (let element of rmElement) {
    element.remove();
}

// Replace all the elements inside box 1 with the para (you created above)

let docu = document.body.children[0].lastElementChild.firstElementChild;
docu.append(para);

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/

let box16 = document.body.children[0].lastElementChild.children[15];
box16.parentNode;
box16.childNodes;
box16.previousSibling;
box16.nextSibling;
box16.firstChild;

box16.previousElementSibling;
box16.nextElementSibling;
box16.firstElementChild;
box16.lastElementChild;


// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

let box2 = document.body.children[0].lastElementChild.children[1];
box2.append("Append inserts as last child");

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.

let box3 = document.body.children[0].lastElementChild.children[2];
box3.prepend("Prepend inserts as first child");

// Change the border of box 4 to '1px solid black'

let box4 = document.body.children[0].lastElementChild.children[3];
box4.style.border = '1px solid black';

// Change the border radius of box 5 to 10px.

let box5 = document.body.children[0].lastElementChild.children[4];
box5.style.borderRadius = '10px';

// Change the text color of box 6 to black.

let box6 = document.body.children[0].lastElementChild.children[5];
box6.style.color = 'black';

// Change the font size of the para inside box 1 to 0.8rem.

let box1 = document.body.children[0].lastElementChild.children[0];
box1.style.fontSize = "0.8rem"

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue

// function boxOdd(boxIndex){
//   return boxIndex % 2 !== 0;
// }

let allBox = Array.from(document.body.children[0].lastElementChild.children);

allBox.filter(function(box, index) {
    if (index % 2 !== 0) {
        return box;
    }
}).forEach((element) =>
    element.style.backgroundColor = "aliceblue"
)

// add a class named "awesome-box" to the box 6 using classList property of DOM element.

box6.className = "awesome-box";


// Using the toggle classList property toggle the class `awesome-box` from box 2

box2.classList.toggle = "awesome-box";

// Using the remove classList proeprty remove the class `awesome-box` from box 4

box4.classList.remove("awesome-box");

// Change the background of the body to bisque

document.body.style.background = "bisque";

// Create a button and store it in a variable named 'btn'

let btn = document.createElement("button");

// textContent of the button should be 'Click Me'

btn.append("Click Me");

// Change the background of the btn to 'oldlace'

btn.style.background = "oldlace";

// Change the font size of the btn to 1rem

btn.style.fontSize = "1rem";

// Change the border of the btn to '1px solid black'

btn.style.border = "1px solid black";

// Add the padding of '0.5rem 1rem' to btn

btn.style.padding = '0.5rem 1rem';

// Append the btn in box number 9

let box9 = document.body.children[0].lastElementChild.children[8];
box9.append(btn);

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

let imgElm = document.createElement("img");
imgElm.src = `data:image/jpeg;base64,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;;`;
// Select the box 7 using class seven

let box7 = document.getElementsByClassName('seven')[0];

// Remove all the elements form box seven

let arrayOfBox7 = Array.from(box7.children);
arrayOfBox7.forEach((p) =>
    p.remove()
)

// Append the imgElm to the box no 7

box7.append(imgElm);

// Change the width and height of the image to `100%`

imgElm.style.width = "100%";
imgElm.style.height = "100%";

// Select the box 5 using class five

let class5 = document.getElementsByClassName('five');

// Create an input element

let input = document.createElement("input");

// Change the placeholder property of the input element to "Enter you email!"

input.placeholder = "Enter you email!";

// Append the input element to the box 5 you selected above

class5[0].append(input);

// Create two anchor (a) element with  the text of `AltCampus` and `Google`

let anchor1 = document.createElement("a");
anchor1.innerText = "Altcampus"

let anchor2 = document.createElement("a");
anchor2.innerText = "Google";

// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`

anchor1.href = `https://altcampus.school`;
anchor2.href = `https://google.com`;

// Append both the elements to box 5 you selected above.

box5.append(anchor1, anchor2);