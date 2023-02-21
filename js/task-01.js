const categories = document.querySelectorAll("#categories > li.item");
console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").innerText;
  const elementsLength = category.querySelectorAll("li").length;
  console.log("Category: ", categoryName);
  console.log("Elements: ", elementsLength);
});
