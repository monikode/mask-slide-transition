var scrollHeight = 0;
var page = 0;

document.addEventListener("wheel", function (ev) {
  let oldPage = page;
  if (ev.deltaY > 0) scrollHeight += 1;
  else scrollHeight -= 1;
  if (scrollHeight < 0) scrollHeight = 0;
  if (scrollHeight > 40) scrollHeight = 40;
  switch (scrollHeight / 10) {
    case 0:
      page = 0;
      break;
    case 1:
      page = 1;
      break;
    case 2:
      page = 2;
      break;
    case 3:
      page = 3;
      break;
  }

  if (oldPage != page) {
    var scrollTicks = document
      .getElementById("scroll-map")
      .getElementsByTagName("li");
      scrollTicks[oldPage].className= ""
      scrollTicks[page].className= "active"
    if (oldPage > page) {
      let pageEl = document.getElementsByClassName("mask")[oldPage];
      pageEl.style.bottom = "-100%";
      pageEl.children[0].style.top = "-100%";
    } else if (oldPage < page) {
      let pageEl = document.getElementsByClassName("mask")[page];
      pageEl.children[0].style.top = 0;
      pageEl.style.bottom = 0;
s
    }
  }
});
