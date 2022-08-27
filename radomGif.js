//1 api urls  GIPHY
const endpoint =
  "https://api.giphy.com/v1/gifs/search?api_key=QOyX0ji2P88VQGG3U1EnamCCMel0vIk2&q=cat&limit=25&offset=0&rating=g&lang=en"; //加 random/?query=cat&

const unsplashImage = document.getElementById("unsplashImage"); //拿img位置
const imageLink = document.getElementById("imageLink"); //拿a位置
const creator = document.getElementById("creator"); //拿name位置
const GenerateCat = document.getElementById("GenerateCat"); //拿button位置
const lastNumber = 0;
function randomImage() {
  //2 發出請求
  fetch(endpoint)
    .then((response) => {
      console.log("resolved", response);
      //3 發出請求
      return response.json();
    })
    .then((data) => {
      let number = Math.floor(Math.random() * 25) + 1;
      if (number === lastNumber) {
        number += 1;
      }
      console.log(number);
      //4 改原本html内容
      console.log("data", data); // x ""data"+ data"
      console.log(unsplashImage);
      unsplashImage.alt = data.data[number].title;
      //4 加上gif
      unsplashImage.src = data.data[number].images.original.url;
      creator.innerText = data.data[number].title;
      imageLink.setAttribute("href", data.data[number].bitly_gif_url);
      lastNumber = number;
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}

randomImage();
//5 點了就会拿一張前圖
GenerateCat.addEventListener("click", randomImage);
