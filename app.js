let selectedImg = "./images/1.jpg"; 

const bgImages = document.querySelectorAll(".bg-img");
bgImages.forEach(img => {
  img.addEventListener("click", () => {
    bgImages.forEach(i => i.classList.remove("selectedImg"));
    img.classList.add("selectedImg");
    selectedImg = img.src;
  });
});

function post() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const postContainer = document.getElementById("post");

  if (!title || !description) {
    alert("Please enter both title and description.");
    return;
  }

  postContainer.innerHTML += `
    <div class="card m-3" style="background-image:url('${selectedImg}'); background-size:cover; color:white;">
      <div class="card-header">@Blog</div>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
      <div class="ms-auto m-2">
        <button onclick="edt(event)" class="btn btn-success">Edit</button>
        <button onclick="dlt(event)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  `;

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

function dlt(event) {
  const card = event.target.closest(".card");
  card.remove();
}

function edt(event) {
  const card = event.target.closest(".card");
  const title = card.querySelector(".card-title").innerText;
  const description = card.querySelector(".card-text").innerText;

  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  card.remove();
}
