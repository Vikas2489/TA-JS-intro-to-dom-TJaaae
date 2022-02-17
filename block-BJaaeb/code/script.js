/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)
*/

function createInputElm(label, type = "text") {
    let label1 = document.createElement("label");
    label1.innerText = `${label}:`;
    let input = document.createElement("input");
    input.type = `${type}`;
    label1.append(input);
    return label1;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function stringLiteral(string) {
    let h1 = document.createElement("h1");
    h1.innerText = string;
    return h1;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

function createList(arr) {
    let ul = document.createElement("ul");
    arr.forEach(function(element) {
        li = document.createElement("li");
        li.innerText = `${element}`;
        ul.append(li);
    });
    return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);


// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(array) {
    let ul = document.createElement("ul");
    array.forEach(function(element) {
        li = document.createElement("li");
        let para = document.createElement("p");
        li.append(para);
        para.innerText = element.name;
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = " ";
        input.id = " ";
        li.append(input);
        let span = document.createElement("span");
        span.innerText = "X";
        li.append(span);
        return ul.append(li);
    });
    return ul;
}

// TEST
createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn JS', isDone: true },
]);
createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn React', isDone: true },
    { name: 'Learn JS', isDone: true },
]);