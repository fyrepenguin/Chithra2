document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector(".content").classList.add("hide");
  } else {
    console.log("page loaded");
    setTimeout(showPage, 4500);
  }
};
function showPage() {
  document.querySelector(".preload").classList.add("hide");
  document.querySelector(".content").classList.remove("hide");
}
