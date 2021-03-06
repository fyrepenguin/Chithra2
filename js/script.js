document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector(".content").classList.add("hide");
  } else {
    setTimeout(showPage, 4250);
  }
};
function showPage() {
  document.querySelector(".preload").classList.add("hide");
  document.querySelector(".content").classList.remove("hide");
}

window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector(".navbar").classList.add("navbar-op");
    document.querySelector(".navbar").classList.remove(".navbar-lt");
  } else if (
    document.body.scrollTop <= 500 ||
    document.documentElement.scrollTop <= 500
  ) {
    document.querySelector(".navbar").classList.remove("navbar-op");
    document.querySelector(".navbar").classList.add("navbar-lt");
  }
}
