const btn = document.querySelector(".btn1");

function handleClick() {
  const url = "https://randomuser.me/api/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => randomUser(data.results));

  function randomUser(userRandom) {
    userRandom.forEach((item) => {
      const wrapper = document.querySelector(".user");
      wrapper.classList.add("flex", "flex-wrap", "gap-5");
      const div = document.createElement("div");
      const imgDiv = document.createElement("div");

      const img = document.createElement("img");
      const title = document.createElement("h2");
      const gmail = document.createElement("h3");
      const tel = document.createElement("h4");
      const street = document.createElement("h5");

      div.classList.add(
        "rounded-lg",
        "shadow-lg",
        "shadow-gray-500",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "w-[300px]",
        "h-[330px]",
        "py-3",
        "px-5"
      );
      imgDiv.classList.add(
        "w-[150px]",
        "h-[150px]",
        "overflow-hidden",
        "rounded-full",
        "mb-5"
      );
      img.classList.add("w-full");
      imgDiv.appendChild(img);
      img.src = item.picture.large;
      title.textContent = `${item.name.title} ${item.name.first} ${item.name.last}`;
      gmail.textContent = item.email;
      street.textContent = item.location.street.name;
      tel.textContent = item.cell;

      div.append(imgDiv, title, gmail, street, tel);
      wrapper.appendChild(div);
      title.classList.add("text-lg", "font-medium");
      gmail.classList.add("text-lg", "font-medium");
      tel.classList.add("text-lg", "font-medium");
      street.classList.add("text-lg", "font-medium");
    });
  }
}

handleClick();
btn.addEventListener("click", handleClick);
