"use strict";

const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const heading = item.querySelector("h2");
  if (heading !== null) {
    const headingText = heading.textContent;
    const elementCount = item.querySelectorAll("li").length;

    console.log(`Category: ${headingText}`);
    console.log(`Elements: ${elementCount}`);
  }
});