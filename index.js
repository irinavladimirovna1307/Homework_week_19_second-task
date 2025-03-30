//получаю необходимые элементы
const postTitle = document.getElementById("postTitle");
const postText = document.getElementById("postText");
const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output");
const postContainer = document.querySelector(".post__container");

//создаю функцию с фетч запросом
function post() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postTitle.value,
      body: postText.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let postWrapper = document.createElement("div"); // отрисовка html разметки поста
      postWrapper.classList.add("post__wrapper");
      /*console.log(json.title); */
      postWrapper.innerHTML = `
          <p class="posted__title">${json.title}</p>
          <p class="posted__text">${json.body}</p>
  `;
      postContainer.appendChild(postWrapper);

      console.log("Пост добавлен:", postWrapper);
      postTitle.value = "";
      postText.value = "";
    })
    .catch((err) => {
      console.log("Ошибка запроса:" + err);
    });
}

//добавляю обработчик событий для кнопки, для добавления поста
button.addEventListener("click", (event) => {
  event.preventDefault();
  if (postTitle.value.trim() === "" || postText.value.trim() === "") {
    //проверка на пустоту полей
    alert("Заполните поле ввода!");
  } else {
    /*postTitle = document.querySelector(".post__title");
    postText = document.querySelector(".post__text"); */
    post();
  }
});
