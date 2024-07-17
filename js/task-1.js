"use strict";

const categories = document.querySelector("#categories");
const categoriesChildrens =  categories.children;
const childrenNum =  categoriesChildrens.length;

console.log(`Number of categories: ${childrenNum}`);

for (const child of categoriesChildrens) {
  const heading = child.querySelector("h2");
  const headingText = heading.textContent;
  const innerUl = child.querySelector("ul");
  const innerUlChildrenNum = innerUl.children.length;

  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${innerUlChildrenNum}`);
}
