let content = document.getElementById("content");

let url = "https://source.unsplash.com/random/";

fetch(url)
  .then((res) => {
    creatHtml(res.url);
  })
  .catch((err) => {
    console.log(err);
  });
function creatHtml(img) {
  let x = document.createElement("img");
  x.src = img;
  x.id = "new";
  content.appendChild(x);
}
let opts = {
  headers: {
    mode: "non-cors",
  },
};

let url2 = "https://api.adviceslip.com/advice";

fetch(url2)
  .then((res) => {
    return res.json();
  })
  .then(function (x) {
    advice(x.slip.advice);
  })
  .catch((err) => {
    console.log(err);
  });

function advice(slip) {
  document.getElementById("h1").innerHTML = slip;
}
