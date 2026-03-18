const characters = {
  cawl: {
    title: "Белизарий Коул",
    text: "Один из величайших магосов Империума."
  },
  techpriest: {
    title: "Техножрец",
    text: "Жрец машин и хранитель технологий."
  },
  skitarii: {
    title: "Скитарий",
    text: "Кибернетический солдат Механикус."
  }
};

function openModal(id) {
  document.getElementById("modalTitle").textContent = characters[id].title;
  document.getElementById("modalText").textContent = characters[id].text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function filterCharacters(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function searchCharacters() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}