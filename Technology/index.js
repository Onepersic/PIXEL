const techData = {
  stc: {
    title: "STC",
    text: "STC — это древние шаблоны технологий времён Золотого века человечества. Они считаются бесценными, потому что позволяют создавать забытые машины, оружие и устройства. Для Адептус Механикус любой найденный фрагмент STC — почти священная реликвия.",
    image: "stc.jpg"
  },
  implants: {
    title: "Кибернетические импланты",
    text: "Импланты позволяют техножрецам и другим служителям Механикус заменить слабую плоть на более надёжные и функциональные механизмы. Это может быть улучшение зрения, силы, памяти или полная замена конечностей.",
    image: "implants.jpg"
  },
  machines: {
    title: "Обрядовые машины",
    text: "Многие машины в мире Механикус обслуживаются не только технически, но и ритуально. Их работа сопровождается священными кодами, литаниями и обрядами активации, ведь техника рассматривается как нечто большее, чем просто металл и провода.",
    image: "machines.jpg"
  },
  plasma: {
    title: "Плазменное оружие",
    text: "Плазменное оружие невероятно разрушительно, но также опасно для самого владельца. Оно использует нестабильную энергию и считается одной из самых мощных технологий, к которым Империум имеет доступ.",
    image: "plasma.jpg"
  },
  servitors: {
    title: "Боевые сервиторы",
    text: "Сервиторы — это кибернетически изменённые существа, используемые для тяжёлой работы, обслуживания техники или боевых задач. Они лишены обычной воли и полностью подчинены заложенным командам.",
    image: "servitors.jpg"
  },
  machineSpirit: {
    title: "Машинный дух",
    text: "Машинный дух — важное понятие в вере Адептус Механикус. Считается, что сложные механизмы обладают внутренней сущностью, которую необходимо уважать, успокаивать и правильно пробуждать через ритуалы и обслуживание.",
    image: "spirit.jpg"
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-buttons button");

function openModal(id) {
  const tech = techData[id];
  if (!tech) return;

  modalTitle.textContent = tech.title;
  modalText.textContent = tech.text;
  modalImage.src = tech.image;
  modalImage.alt = tech.title;

  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    openModal(id);
  });
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const activeButton = document.querySelector(".filter-buttons button.active");
  const activeFilter = activeButton ? activeButton.dataset.filter : "all";

  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = name.includes(searchValue);
    const matchesCategory = activeFilter === "all" || category === activeFilter;

    if (matchesSearch && matchesCategory) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}