"use strict";

const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const headingText = item.querySelector("h2").textContent;
  const elementCount = item.querySelectorAll("li").length;

  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${elementCount}`);
});
