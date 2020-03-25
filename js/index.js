document.querySelector(".btn-light").addEventListener("click", () => {
  //turn some items into white
  const mainItems = document.querySelectorAll(
    ".header, .main-page__sidebar, .header__search-input, .featured__videos"
  );
  //console.log(list);
  mainItems.forEach((element) => {
    element.classList.toggle("white");
  });

  //turn all the buttons into grey
  const list = document.querySelectorAll(
    ".fas, .fab, .inner-nav__nav-item, .inner-profile__name-insc, .inner-content__text-1--span"
  );
  list.forEach((element) => {
    element.classList.toggle("content-grey");
  });

  //turn content into grey
  const greyItems = document.querySelectorAll(
    ".featured__videos, .featured-channels"
  );
  //console.log(list);
  greyItems.forEach((element) => {
    element.classList.toggle("grey");
  });

  const otherItems = document.querySelectorAll(
    ".inner-profile__info, .inner-nav"
  );
  //console.log(list);
  otherItems.forEach((element) => {
    element.classList.toggle("grey-light");
  });

  //text-black
  const a = document.querySelectorAll(
    ".inner-profile__name-cont, .inner-content__text-3, .inner-content__text-1, .inner-content__text-2, .inner-content__text-4, .channel__info--name"
  );
  //console.log(list);
  a.forEach((element) => {
    element.classList.toggle("text-black");
  });

  // document.querySelector(".inner-profile__name").style.color = "#030303";
  // document.querySelector(".inner-profile__name-insc").style.color = "#606060";
  // document.querySelector("").style.color = "#606060";
});
