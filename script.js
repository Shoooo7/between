
"use strict";

// BETWEEN — интерактивная версия интерфейса

const books = [
  {
    id: 1,
    title: "Моби Дик",
    author: "Герман Мелвилл",
    genre: "Приключения",
    year: 1851,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
    description: "Морское путешествие капитана Ахава, одержимого охотой на огромного белого кита."
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Драма",
    year: 1866,
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
    description: "Роман о преступлении, совести, нравственном выборе и последствиях человеческих поступков."
  },
  {
    id: 3,
    title: "Дракула",
    author: "Брэм Стокер",
    genre: "Ужасы",
    year: 1897,
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80",
    description: "Классическая история о таинственном графе Дракуле и борьбе с древним злом."
  },
  {
    id: 4,
    title: "Машина времени",
    author: "Герберт Уэллс",
    genre: "Фантастика",
    year: 1895,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
    description: "Путешественник отправляется в далёкое будущее и обнаруживает необычную судьбу человечества."
  },
  {
    id: 5,
    title: "Алиса в Стране чудес",
    author: "Льюис Кэрролл",
    genre: "Фэнтези",
    year: 1865,
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=80",
    description: "Необыкновенное путешествие Алисы в мир абсурда, загадок и фантазии."
  },
  {
    id: 6,
    title: "Франкенштейн",
    author: "Мэри Шелли",
    genre: "Ужасы",
    year: 1818,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
    description: "История учёного, который создаёт жизнь и сталкивается с последствиями своего эксперимента."
  },
  {
    id: 7,
    title: "Остров сокровищ",
    author: "Роберт Льюис Стивенсон",
    genre: "Приключения",
    year: 1883,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
    description: "Приключенческая история о пиратском сокровище, карте и опасном путешествии."
  },
  {
    id: 8,
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    genre: "Детектив",
    year: 1887,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
    description: "Знаменитый сыщик раскрывает сложные преступления с помощью логики и наблюдательности."
  },
  {
    id: 9,
    title: "1984",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    year: 1949,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=500&q=80",
    description: "Антиутопический роман о тотальном контроле, свободе мысли и власти."
  },
  {
    id: 10,
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    genre: "Классика",
    year: 1925,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    description: "История богатства, любви, иллюзий и американской мечты."
  }
];

const translations = {
  ru: {
    home: "Главная",
    catalog: "Каталог",
    authors: "Авторы",
    community: "Сообщество",
    ratings: "Рейтинги",
    login: "Войти",
    eyebrow: "МЕЖДУНАРОДНАЯ КНИЖНАЯ ПЛАТФОРМА",
    hero1: "Мир книг.",
    hero2: "Без границ.",
    description: "Открывай произведения со всего мира.<br>Создавай собственную библиотеку.<br>Находи людей, которые любят книги так же, как ты.",
    search: "Название книги или автор...",
    searchButton: "Искать →",
    day: "✦ Книга дня",
    popular: "Популярные книги",
    all: "Смотреть все →",
    explore: "Исследуй библиотеку",
    library: "Личная библиотека",
    libraryText: "Собирай любимые книги",
    clubs: "Книжные клубы",
    clubsText: "Обсуждай и находи друзей",
    publishing: "Публикация книг",
    publishingText: "Делись своими историями",
    world: "Мировое сообщество",
    worldText: "Читай вместе с миром",
    read: "Читать →",
    noResults: "Ничего не найдено. Попробуй изменить запрос."
  },
  en: {
    home: "Home",
    catalog: "Catalog",
    authors: "Authors",
    community: "Community",
    ratings: "Ratings",
    login: "Sign in",
    eyebrow: "INTERNATIONAL BOOK PLATFORM",
    hero1: "World of books.",
    hero2: "Without borders.",
    description: "Discover books from around the world.<br>Create your own library.<br>Find people who love books just like you.",
    search: "Book title or author...",
    searchButton: "Search →",
    day: "✦ Book of the day",
    popular: "Popular books",
    all: "View all →",
    explore: "Explore the library",
    library: "Personal library",
    libraryText: "Collect your favorite books",
    clubs: "Book clubs",
    clubsText: "Discuss books and meet people",
    publishing: "Publish books",
    publishingText: "Share your stories",
    world: "Global community",
    worldText: "Read together with the world",
    read: "Read →",
    noResults: "Nothing found. Try another search."
  }
};

let currentLanguage = "ru";
let currentBooks = [...books];
let toastTimer;

// Безопасное чтение локальных данных
function loadSaved(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Не удалось сохранить данные браузера");
  }
}

let favorites = loadSaved("between-favorites", []);
let userLibrary = loadSaved("between-library", {});
let readingProgress = loadSaved("between-progress", {});

// Создаём универсальное модальное окно
const modal = document.createElement("div");
modal.className = "modal-overlay";
modal.id = "betweenModal";
modal.innerHTML = `
  <div class="modal-window" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="Закрыть">×</button>
    <div class="modal-content"></div>
  </div>
`;
document.body.appendChild(modal);

const modalContent = modal.querySelector(".modal-content");

function openModal(content) {
  modalContent.innerHTML = content;
  modal.classList.add("visible");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("visible");
  document.body.classList.remove("modal-open");
}

modal.querySelector(".modal-close").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Уведомления
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Карточка книги

function createBookCard(book) {
  const saved = favorites.includes(book.id);
  const status = userLibrary[book.id] || "none";

  return `
    <article class="book-card">
      <button class="favorite-button ${saved ? "saved" : ""}"
        data-favorite="${book.id}"
        aria-label="Добавить в избранное">
        ${saved ? "★" : "☆"}
      </button>

      <div class="book-cover"
        data-open-book="${book.id}"
        role="button"
        tabindex="0"
        aria-label="Открыть ${book.title}"
        style="background-image: linear-gradient(0deg, rgba(0,0,0,.3), transparent), url('${book.image}')">
      </div>

      <h3 data-open-book="${book.id}">${book.title}</h3>
      <p>${book.author}</p>

      <select class="book-status" data-status-book="${book.id}">
        <option value="none" ${status === "none" ? "selected" : ""}>Добавить в библиотеку</option>
        <option value="planned" ${status === "planned" ? "selected" : ""}>Хочу прочитать</option>
        <option value="reading" ${status === "reading" ? "selected" : ""}>Читаю</option>
        <option value="finished" ${status === "finished" ? "selected" : ""}>Прочитано</option>
      </select>
    </article>
  `;
}


function renderBooks(list) {
  const popular = document.getElementById("popularBooks");
  const catalog = document.getElementById("catalogBooks");
  const count = document.getElementById("bookCount");
  const empty = document.getElementById("emptyMessage");

  if (popular) {
    popular.innerHTML = books.slice(0, 5).map(createBookCard).join("");
  }

  if (catalog) {
    catalog.innerHTML = list.map(createBookCard).join("");
  }

  if (count) count.textContent = `Найдено: ${list.length}`;
  if (empty) empty.hidden = list.length > 0;
}

// Открытие информации о книге
function openBook(bookId) {
  const book = books.find(item => item.id === Number(bookId));
  if (!book) return;

  const saved = favorites.includes(book.id);

  openModal(`
    <div class="book-detail">
      <img src="${book.image}" alt="${book.title}" class="detail-cover">
      <div>
        <p class="eyebrow">${book.genre} · ${book.year}</p>
        <h2>${book.title}</h2>
        <p class="detail-author">${book.author}</p>
        <p>${book.description}</p>
        <div class="modal-actions">
          <button class="gold-button" data-read="${book.id}">Читать книгу</button>
          <button class="outline-button" data-favorite="${book.id}">
            ${saved ? "Убрать из избранного" : "В избранное"}
          </button>
        </div>
      </div>
    </div>
  `);
}

// Демонстрационная читалка
     

async function openReader(bookId) {
  const book = books.find(item => item.id === Number(bookId));
  if (!book) return;

  const sourceUrl = "https://www.gutenberg.org/cache/epub/35/pg35.txt";

  openModal(`
    <div class="reader" id="betweenReader">
      <p class="eyebrow">BETWEEN READER</p>
      <h2>${book.title}</h2>
      <p class="detail-author">${book.author}</p>

      <div class="reader-toolbar">
        <button id="fontDecrease">A−</button>
        <button id="fontIncrease">A+</button>
        <button id="readerTheme">Сменить фон</button>
      </div>

      <p id="chapterTitle">Загружаем книгу...</p>
      <div class="reader-text" id="readerText">
        Подключаем текст произведения...
      </div>

      <div class="reader-controls">
        <p id="chapterProgress">Загрузка...</p>
        <div class="reader-navigation">
          <button id="prevChapter">← Назад</button>
          <button id="nextChapter">Далее →</button>
        </div>
        <button class="gold-button" id="saveProgress">
          Сохранить место чтения
        </button>
      </div>

      <p class="auth-note">
        Источник оригинального текста:
        Project Gutenberg, eBook №35.
      </p>
    </div>
  `);

  const reader = document.getElementById("betweenReader");
  const readerText = document.getElementById("readerText");
  const chapterTitle = document.getElementById("chapterTitle");
  const chapterProgress = document.getElementById("chapterProgress");

  let chapters = [];
  let currentChapter = 0;
  let fontSize = 18;
  let lightMode = false;

  const savedProgress = readingProgress[book.id] || 0;

  try {
    if (book.id !== 4) {
      throw new Error("Эта книга пока не подключена");
    }

    const response = await fetch(sourceUrl);

    if (!response.ok) {
      throw new Error("Не удалось загрузить книгу");
    }

    const rawText = await response.text();

    const start = rawText.indexOf("*** START OF");
    const end = rawText.indexOf("*** END OF");

    if (start === -1 || end === -1 || end <= start) {
      throw new Error("Не удалось обработать текст");
    }

    const text = rawText.slice(
      start,
      end
    ).replace(/^[^\n]*\n/, "");

    const chapterRegex =
      /^\s*(XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I|Epilogue)\s*$/gm;

    const matches = [...text.matchAll(chapterRegex)];

    chapters = matches.map((match, index) => ({
      title: match[1],
      text: text.slice(
        match.index + match[0].length,
        matches[index + 1]
          ? matches[index + 1].index
          : text.length
      ).trim()
    })).filter(chapter => chapter.text.length > 100);

    if (!chapters.length) {
      throw new Error("Не найдены главы книги");
    }

    currentChapter = Math.min(
      Math.floor(savedProgress / 100 * chapters.length),
      chapters.length - 1
    );

    function renderChapter() {
      const chapter = chapters[currentChapter];

      chapterTitle.textContent =
        "Глава " + chapter.title;

      readerText.textContent = chapter.text;

      chapterProgress.textContent =
        `Глава ${currentChapter + 1} из ${chapters.length}`;

      document.getElementById("prevChapter").disabled =
        currentChapter === 0;

      document.getElementById("nextChapter").disabled =
        currentChapter === chapters.length - 1;
    }

    document.getElementById("prevChapter").addEventListener("click", () => {
      if (currentChapter > 0) {
        currentChapter--;
        renderChapter();
      }
    });

    document.getElementById("nextChapter").addEventListener("click", () => {
      if (currentChapter < chapters.length - 1) {
        currentChapter++;
        renderChapter();
      }
    });

    document.getElementById("saveProgress").addEventListener("click", () => {
      readingProgress[book.id] = Math.round(
        (currentChapter / chapters.length) * 100
      );

      saveData("between-progress", readingProgress);
      showToast("Место чтения сохранено");
    });

    document.getElementById("fontIncrease").addEventListener("click", () => {
      fontSize = Math.min(fontSize + 2, 30);
      readerText.style.fontSize = fontSize + "px";
    });

    document.getElementById("fontDecrease").addEventListener("click", () => {
      fontSize = Math.max(fontSize - 2, 14);
      readerText.style.fontSize = fontSize + "px";
    });

    document.getElementById("readerTheme").addEventListener("click", () => {
      lightMode = !lightMode;
      reader.classList.toggle("reader-light", lightMode);
    });

    renderChapter();

  } catch (error) {
    chapterTitle.textContent = "Не удалось загрузить книгу";

    readerText.textContent =
      "Проверь подключение к интернету. Возможно, браузер блокирует загрузку текста.";

    chapterProgress.innerHTML = "";

    const link = document.createElement("a");
    link.href = sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Открыть оригинал книги";

    readerText.appendChild(document.createElement("br"));
    readerText.appendChild(link);

    console.error("Between Reader:", error);
  }
}


  

// Поиск
function performSearch() {
  const query = document.getElementById("searchInput").value
    .trim()
    .toLocaleLowerCase();

  currentBooks = books.filter(book => {
    return (
      book.title.toLocaleLowerCase().includes(query) ||
      book.author.toLocaleLowerCase().includes(query) ||
      book.genre.toLocaleLowerCase().includes(query)
    );
  });

  renderBooks(currentBooks);
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  performSearch();
});

// Поиск обновляется при вводе
document.getElementById("searchInput").addEventListener("input", () => {
  if (document.getElementById("searchInput").value.trim() === "") {
    currentBooks = [...books];
    renderBooks(currentBooks);
  }
});

// Избранное
function toggleFavorite(bookId) {
  const id = Number(bookId);

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Книга удалена из избранного");
  } else {
    favorites.push(id);
    showToast("Книга добавлена в избранное");
  }

  saveData("between-favorites", favorites);
  renderBooks(currentBooks);
}

function openFavorites() {
  const selected = books.filter(book => favorites.includes(book.id));

  openModal(`
    <h2>Моя библиотека</h2>
    <p class="detail-author">Избранные книги: ${selected.length}</p>
    <div class="modal-book-list">
      ${selected.length
        ? selected.map(book => `
          <button class="modal-book-item" data-open-book="${book.id}">
            ${book.title} — ${book.author}
          </button>
        `).join("")
        : "<p>Пока нет сохранённых книг. Добавь книгу в избранное.</p>"
      }
    </div>
  `);
}

function setBookStatus(bookId, status) {
  const id = Number(bookId);

  if (!books.some(book => book.id === id)) return;

  if (status === "none") {
    delete userLibrary[id];
  } else {
    userLibrary[id] = status;
  }

  saveData("between-library", userLibrary);
  showToast("Статус книги обновлён");
}

function openMyLibrary() {
  const statuses = {
    planned: "Хочу прочитать",
    reading: "Читаю",
    finished: "Прочитано"
  };

  const groups = Object.entries(statuses).map(([key, title]) => {
    const selected = books.filter(
      book => userLibrary[book.id] === key
    );

    return `
      <section class="library-group">
        <h3>${title} (${selected.length})</h3>
        <div class="modal-book-list">
          ${
            selected.length
              ? selected.map(book => `
                  <button class="modal-book-item" data-open-book="${book.id}">
                    ${book.title} — ${book.author}
                  </button>
                `).join("")
              : "<p>Пока здесь нет книг.</p>"
          }
        </div>
      </section>
    `;
  }).join("");

  openModal(`
    <div class="my-library">
      <p class="eyebrow">BETWEEN LIBRARY</p>
      <h2>Моя библиотека</h2>
      ${groups}
    </div>
  `);
}


// Переключение темы
const themeButton = document.getElementById("themeButton");

function applyTheme(theme) {
  document.body.classList.toggle("light-theme", theme === "light");
  themeButton.textContent = theme === "light" ? "☀" : "☾";
  saveData("between-theme", theme);
}

applyTheme(loadSaved("between-theme", "dark"));

themeButton.addEventListener("click", () => {
  const next = document.body.classList.contains("light-theme")
    ? "dark"
    : "light";
  applyTheme(next);
});

// Язык интерфейса
function applyLanguage(language) {
  currentLanguage = language;
  const t = translations[language];

  document.documentElement.lang = language;
  document.querySelectorAll(".nav a").forEach((link, index) => {
    link.textContent = [
      t.home, t.catalog, t.authors, t.community, t.ratings
    ][index] || link.textContent;
  });

  document.querySelector(".login-button").textContent = t.login;
  document.querySelector(".eyebrow").textContent = t.eyebrow;
  document.querySelector(".hero h1").innerHTML =
    `${t.hero1}<br><span>${t.hero2}</span>`;
  document.querySelector(".hero-description").innerHTML = t.description;
  document.getElementById("searchInput").placeholder = t.search;
  document.querySelector(".search-box button").textContent = t.searchButton;
  document.querySelector(".featured-card .section-heading h2").textContent = t.day;
  document.querySelector(".popular-card .section-heading h2").textContent = t.popular;
  document.querySelector(".popular-card .section-heading a").textContent = t.all;
  document.querySelector(".catalog-section h2").textContent = t.explore;

  const featureCards = document.querySelectorAll(".feature");
  const featureTexts = [
    [t.library, t.libraryText],
    [t.clubs, t.clubsText],
    [t.publishing, t.publishingText],
    [t.world, t.worldText]
  ];

  featureCards.forEach((card, index) => {
    card.querySelector("h3").textContent = featureTexts[index][0];
    card.querySelector("p").textContent = featureTexts[index][1];
  });

  renderBooks(currentBooks);
  document.getElementById("languageButton").textContent =
    language.toUpperCase();
}

document.getElementById("languageButton").addEventListener("click", () => {
  applyLanguage(currentLanguage === "ru" ? "en" : "ru");
});

function openLogin() {
  let profile = loadSaved("between-profile", null);

  // Если пользователь уже создал профиль
  if (profile) {
    openModal(`
      <div class="auth-form">
        <p class="eyebrow">BETWEEN PROFILE</p>
        <h2>Твой профиль</h2>
        <p>Имя: <strong id="profileName"></strong></p>
        <p>Почта: <span id="profileEmail"></span></p>
        <button class="gold-button" id="logoutButton">Выйти из профиля</button>
      </div>
    `);

    document.getElementById("profileName").textContent = profile.name;
    document.getElementById("profileEmail").textContent = profile.email;

    document.getElementById("logoutButton").addEventListener("click", () => {
      localStorage.removeItem("between-profile");
      document.getElementById("loginButton").textContent =
        translations[currentLanguage].login;
      closeModal();
      showToast("Ты вышел из профиля");
    });

    return;
  }

  // Форма регистрации и входа
  openModal(`
    <div class="auth-form">
      <p class="eyebrow">WELCOME TO BETWEEN</p>
      <h2>Твоя история начинается здесь</h2>

      <div class="auth-tabs">
        <button class="auth-tab selected" data-auth-tab="login">Войти</button>
        <button class="auth-tab" data-auth-tab="register">Регистрация</button>
      </div>

      <form id="authForm">
        <div id="nameField" hidden>
          <label for="authName">Твоё имя</label>
          <input id="authName" type="text" placeholder="Как тебя называть?">
        </div>

        <label for="authEmail">Электронная почта</label>
        <input id="authEmail" type="email"
          placeholder="example@mail.com" required>

        <label for="authPassword">Демо-пароль</label>
        <input id="authPassword" type="password"
          minlength="6" placeholde="Минимум 6 символов" required>

        <button class="gold-button" type="submit" id="authSubmit">
          Войти
        </button>
      </form>

      <p class="auth-note">
        Демоверсия: профиль сохраняется только на этом устройстве.
        Пароль не сохраняется. Настоящую авторизацию подключим через сервер.
      </p>
    </div>
  `);

  let mode = "login";

  const nameField = document.getElementById("nameField");
  const nameInput = document.getElementById("authName");
  const emailInput = document.getElementById("authEmail");
  const passwordInput = document.getElementById("authPassword");
  const submitButton = document.getElementById("authSubmit");

  modalContent.querySelectorAll("[data-auth-tab]").forEach(button => {
    button.addEventListener("click", () => {
      mode = button.dataset.authTab;

      modalContent.querySelectorAll("[data-auth-tab]").forEach(tab => {
        tab.classList.toggle("selected", tab === button);
      });

      nameField.hidden = mode !== "register";
      nameInput.required = mode === "register";

      submitButton.textContent =
        mode === "login" ? "Войти" : "Создать профиль";
    });
  });

  document.getElementById("authForm").addEventListener("submit", event => {
    event.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    if (password.length < 6) {
      showToast("Пароль должен содержать минимум 6 символов");
      return;
    }

    if (mode === "register") {
      const name = nameInput.value.trim();

      if (!name) {
        showToast("Введи своё имя");
        return;
      }

      profile = {
        name: name,
        email: email
      };

      saveData("between-profile", profile);

      document.getElementById("loginButton").textContent = name;
      closeModal();
      showToast("Профиль успешно создан!");
      return;
    }

    profile = loadSaved("between-profile", null);

    if (!profile || profile.email !== email) {
      showToast("Профиль с такой почтой не найден");
      return;
    }

    document.getElementById("loginButton").textContent = profile.name;
    closeModal();
    showToast("Добро пожаловать обратно!");
  });
}


document.getElementById("loginButton").addEventListener("click", openLogin);

// Навигация по разделам
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");

    if (target === "#authors") {
      event.preventDefault();
      openSection("Авторы", "Здесь появятся страницы авторов, подписки и новые публикации.");
    }

    if (target === "#community") {
      event.preventDefault();
      openSection("Сообщество", "Здесь будут книжные клубы, обсуждения, комментарии и читательские списки.");
    }

    if (target === "#popular") {
      event.preventDefault();
      openSection("Рейтинги", "Здесь появятся рейтинги книг, оценки читателей и подборки.");
    }
  });
});

function openSection(title, description) {
  openModal(`
    <p class="eyebrow">BETWEEN COMMUNITY</p>
    <h2>${title}</h2>
    <p class="section-placeholder">${description}</p>
    <p class="auth-note">Этот раздел будет расширен на следующих этапах разработки.</p>
  `);
}

// Кнопка "Читать" у книги дня
document.querySelector("[data-book]").addEventListener("click", () => {
  openModal(`
    <p class="eyebrow">КНИГА ДНЯ</p>
    <h2>Гордость и предубеждение</h2>
    <p class="detail-author">Джейн Остин</p>
    <p>История о любви, характере, предубеждениях и непростых человеческих отношениях.</p>
    <p class="auth-note">Полный текст появится после проверки прав на конкретное издание.</p>
  `);
});
// Нажатия на карточки и избранное

document.addEventListener("change", (event) => {
  const select = event.target.closest("[data-status-book]");

  if (!select) return;

  setBookStatus(select.dataset.statusBook, select.value);
});

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    event.stopPropagation();
    const id = favoriteButton.dataset.favorite;
    toggleFavorite(id);

    if (modal.classList.contains("visible")) {
      const book = books.find(item => item.id === Number(id));
      if (book) openBook(id);
    }
    return;
  }

  const readButton = event.target.closest("[data-read]");
  if (readButton) {
    openReader(readButton.dataset.read);
    return;
  }

  const bookButton = event.target.closest("[data-open-book]");
  if (bookButton) {
    openBook(bookButton.dataset.openBook);
  }
});

document.querySelectorAll(".feature").forEach((feature, index) => {
  feature.addEventListener("click", () => {
    const sections = [
      ["Личная библиотека", "Твои избранные книги и прогресс чтения."],
      ["Книжные клубы", "Обсуждай книги с другими читателями."],
      ["Публикация книг", "В будущем авторы смогут публиковать свои произведения."],
      ["Мировое сообщество", "Находи читателей из разных стран."]
    ];
    if (index === 0) {
      openFavorites();
    } else {
      openSection(sections[index][0], sections[index][1]);
    }
  });
});

renderBooks(books);

console.log("Between: интерактивные функции загружены.");
