import { _, _All } from "../data/constant.js"
const navBar = _("#main-head")
navBar.addEventListener("click", (e) => {
  const target = e.target
  console.log(target, "navbar")
  console.log(window.location.pathname, "fuck")
  if (target.matches("#shop")) {
    if (window.location.pathname !== "/HTML/allProduct.html")
      window.location.href = "/HTML/allProduct.html"
  }

  if (target.matches("#home")) {
    if (window.location.pathname !== "/HTML/index.html")
      window.location.href = "/HTML/index.html"
  }
  if (target.matches("#aboutUs")) {
    if (window.location.pathname !== "/HTML/aboutUs.html")
      window.location.href = "/HTML/aboutUs.html"
  }
  if (target.matches("#contact")) {
    if (window.location.pathname !== "/HTML/contact.html")
      window.location.href = "/HTML/contact.html"
  }
  if (target.matches(".icon-cart")) {
    if (window.location.pathname !== "/HTML/cart.html")
      window.location.href = "/HTML/cart.html"
  }
})
