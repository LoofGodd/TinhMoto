import { PRODUCT_DETAIL_KEY, PRODUCT_KEY, _, _All } from "../data/constant.js"
import productsData from "../data/products.js"

const products = JSON.parse(localStorage.getItem(PRODUCT_KEY)) || []
const windowScreen = {
  height: window.screen.height,
  width: window.screen.width,
}
function correctCartIcon() {
  const countProducts = products.reduce((sum, product) => {
    return sum + product.count
  }, 0)
  cartIcons.map((cartIcon) => {
    cartIcon.innerText = countProducts
    cartIcon.style.display = cartIcon.innerText === "0" ? "none" : "block"
  })
}

function initialWebsite() {
  correctCartIcon()
}

function handleOnClick(e) {
  const target = e.target
  console.log(target, "script")

  const matches = (item) => {
    return e.target.matches(item)
  }

  if (matches(".bar-icon")) {
    sidebar.style.transform = "translateX(0)"
  }
  if (matches(".x-icon")) {
    sidebar.style.transform = "translateX(-150%)"
  }
  if (matches(".icon-search")) {
    searchContainer.style.height = "100%"
    if (windowScreen.width < 1200) {
      searchContainer.style.bottom = "0"
    } else {
      searchContainer.style.bottom = "-100%"
    }
  }
  if (matches(".search-container .fa-xmark")) {
    searchContainer.style.height = "0"
  }
  if (target.matches(".product-name")) {
    const product = productsData.find(
      (product) => product.id == target.dataset.productId
    )
    localStorage.setItem(PRODUCT_DETAIL_KEY, JSON.stringify(product))
    console.log(product)
  }
}

const mainFooter = _("#main-footer")
const sidebar = _("#sidebar")
const xIcon = _(".x-icon")
const barIcon = _(".bar-icon")
const navIcon = _All(".nav-icon")
const searchIcon = _(".icon-search")
const searchContainer = _(".search-container")
const mainHeader = _("#main-head")
const xIconSearch = _(".search-container .fa-xmark")
const cartIcons = [..._All(".product-total-quantity")]

let productTotalQuantity = 0
initialWebsite()
document.addEventListener("click", handleOnClick)
window.addEventListener("resize", (event) => {
  windowScreen.width = parseInt(document.body.clientWidth)
  windowScreen.height = parseInt(document.body.clientHeight)
})
