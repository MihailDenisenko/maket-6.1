const about_img = document.querySelector(".about__img");
const about_p = document.querySelector(".about_p");
const show__brands = document.querySelector(".show__brands");
const show__tech = document.querySelector(".show__tech");
const brands__ul = document.querySelector(".brands__ul");
const swiper__li = document.querySelector(".li__headen");
const tehnics__ul = document.querySelector(".tehnics__ul");

    
about_img.addEventListener("click", function () {
  if (about_img.classList.contains("about__img")) {
    about_p.classList.add("about_p-more");
    about_img.classList.remove("about__img");
    about_img.classList.add("about_img");
  } else {
      about_p.classList.remove("about_p-more");
      about_img.classList.remove("about_img");
      about_img.classList.add("about__img");

  }
});

show__brands.addEventListener("click", function () {
    if (!brands__ul.classList.contains("brands__ul_more")) {
        brands__ul.classList.add("brands__ul_more");
        swiper__li.classList.remove("li__headen");
        show__brands.classList.add("show_plus");
    } else {
        swiper__li.classList.add("li__headen");
        brands__ul.classList.remove("brands__ul_more");
        show__brands.classList.remove("show_plus");
    }
})

show__tech.addEventListener("click", function () {
  if (!tehnics__ul.classList.contains("tech__ul_more")) {
    tehnics__ul.classList.add("tech__ul_more");

    show__tech.classList.add("show_plus");
  } else {
    show__tech.classList.remove("show_plus");
    tehnics__ul.classList.remove("tech__ul_more");
  }
});


