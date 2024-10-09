const menu_btn = document.querySelector(".menu_btn");
const leftMenu = document.querySelector(".left-menu");
const nav_close = document.querySelector(".navigation__close");
const mainMenu = document.querySelector(".main-menu");
const feedbackIco = document.querySelector(".phone");
const feedbackMenu = document.querySelector(".feedback");
const orderIco = document.querySelector(".message");
const feedbackLeft = document.querySelector(".phone-left");
const orderLeft = document.querySelector(".message-left");

const feedClose = document.querySelector(".feedback__close");
const orderClose = document.querySelector(".order__close");

const orderMenu = document.querySelector(".order-call");

menu_btn.addEventListener('click', function () {
    leftMenu.classList.remove("left-menu-headen");
    mainMenu.classList.add("main-menu_opacity");
});

feedbackIco.addEventListener("click", function () {
    feedbackMenu.classList.remove("feedback-headen");
    leftMenu.classList.add("left-menu-headen");
    mainMenu.classList.add("main-menu_opacity");
});

orderIco.addEventListener("click", function () {
    orderMenu.classList.remove("order-headen");
    mainMenu.classList.add("main-menu_opacity");
});

orderLeft.addEventListener("click", function () {
    orderMenu.classList.remove("order-headen");
    mainMenu.classList.add("main-menu_opacity");
    leftMenu.classList.add("left-menu-headen");
    leftMenu.classList.add("main-menu_opacity");
});

feedbackLeft.addEventListener("click", function () {
    feedbackMenu.classList.remove("feedback-headen");
    mainMenu.classList.add("main-menu_opacity");
    leftMenu.classList.add("main-menu_opacity");
    leftMenu.classList.add("left-menu-headen");
});

feedClose.addEventListener("click", function () {
    feedbackMenu.classList.add("feedback-headen");
    mainMenu.classList.remove("main-menu_opacity");
    leftMenu.classList.remove("main-menu_opacity");
    })

orderClose.addEventListener("click", function () {
    mainMenu.classList.remove("main-menu_opacity");
    orderMenu.classList.add("order-headen");
    leftMenu.classList.remove("main-menu_opacity");
})

nav_close.addEventListener('click', function () {
    leftMenu.classList.add("left-menu-headen");
    mainMenu.classList.remove("main-menu_opacity");
});

mainMenu.addEventListener("click", function () {
    if (!leftMenu.classList.contains("left-menu-headen")) {
        leftMenu.classList.add("left-menu-headen")
    } else if (!orderMenu.classList.contains("order-headen")) {
        orderMenu.classList.add("order-headen")
    } else if (!feedbackMenu.classList.contains("feedback-headen")) {
        feedbackMenu.classList.add("feedback-headen")
    }
    mainMenu.classList.remove("main-menu_opacity");
    leftMenu.classList.remove("main-menu_opacity");
    },true);


leftMenu.addEventListener("click", function () {
    if (!orderMenu.classList.contains("order-headen")) {
      orderMenu.classList.add("order-headen");
    } else if (!feedbackMenu.classList.contains("feedback-headen")) {
      feedbackMenu.classList.add("feedback-headen");
    }
    mainMenu.classList.remove("main-menu_opacity");
    leftMenu.classList.remove("main-menu_opacity");
  },
  true
);
