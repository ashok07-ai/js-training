// QuerySelector method returns the first element that matches a css selector
// Syntax for query Selector => document.querySelector(CSS selectors)

// Methods of Query Selector
// 1. The querySelector() Method
// 2. The querySelectorAll() Method

// Get Element Methods
// 1. The getElementById() Method
// 2. The getElementsByTagName() Method
// 3. The getElementByClassName() Method

// document.body.style.backgroundco

// EXAMPLES 

// GetElementById
const heading = document.getElementById("heading")
console.log(heading);

// GetElementByClassName
const listItems = document.getElementsByClassName("list-items");
console.log(listItems)

// GetElementByTagName
const liTags = document.getElementsByTagName("ul");
console.log(liTags)

// querySelector
const selectSingleDiv = document.querySelector("div");
console.log(selectSingleDiv)

// querySelectorAll
const selectAllDiv = document.querySelectorAll("div");
console.log(selectAllDiv)


// Styling an element 
const title = document.querySelector("#heading");
title.style.color = "yellow";

const listItemsStyle = document.querySelectorAll(".list-items");

for (let i = 0; i <= listItemsStyle.length; i++) {
    listItemsStyle[i].style.color = "white";
    listItemsStyle[i].style.fontSize = "1.5rem";
    listItemsStyle[i].style.backgroundColor = "red";
}

// Creating Elements

// Creating single li element
const ulOne = document.querySelector("ul");
const li = document.createElement("li");
ulOne.append(li);
li.setAttribute("class", "list-items");
li.innerText = "Avatar"


// Creating multiple li elements at once
const movie_details = ["Joker", "SpecialOps", "FamilyMan"]
const ul = document.querySelector("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    ul.append(li)
    li.setAttribute("class", "list-items");

    // remove the attribute name
    // li.removeAttribute("class")
    li.innerText = movie_details[i]

    // removes all the added list
    // li.remove()
}

// Difference between inner-text and inner-html
const itemss = document.getElementById("heading");
itemss.innerText = '<a href="#"> Code </a>';
// itemss.innerHTML = '<a href="#"> Code </a>';
