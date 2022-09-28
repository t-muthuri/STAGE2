// document.addEventListener("DOMContentLoaded", () => {
//   });

const aLeft = document.querySelector(".a-left");
const aRight = document.querySelector(".a-right");
const bg1 = document.querySelector(".content");
const bg2 = document.querySelector(".featured-icon");
const bg3 = document.querySelector(".side-img");

//image id
let id = 1;

//event handler - click event to the right arrow

aRight.addEventListener("click", () => {
  //increment id
  id++;
  //if the id is larger than the number of images
  if (id > 3) {
    //set the id to the first image
    id = 1;
  }
  //set all images to current id
  bg1.style.backgroundImage = "url(graffiti1" + id + ".jpg)";
  bg2.style.backgroundImage = "url(graffiti1" + id + ".jpg)";
  bg3.style.backgroundImage = "url(447951" + id + ".jpg)";
  console.log("alert");
});

//add click event to the left arrow

aLeft.addEventListener("click", () => {
  id--;
  //if the id goes below the first image
  if (id < 1) {
    //set the id to the last image
    id = 3;
  }
  //set all images to current id
  bg1.style.backgroundImage = "url(graffiti1" + id + ".jpg)";
  bg2.style.backgroundImage = "url(graffiti1" + id + ".jpg)";
  bg3.style.backgroundImage = "url(447951" + id + ".jpg)";
  console.log("alert");
});
