const hammburger = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (hammburger) {
  hammburger.addEventListener("click", () => {
    nav.classList.add("active");
    // hammburger = false;
  });
}

close.addEventListener("click", () => {
  nav.classList.remove("active");
  // hammburger = true;
});
