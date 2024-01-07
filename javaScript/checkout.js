import { _, PRODUCT_BOUGHT_KEY } from "/data/constant.js"

const checkOutProduct =
  JSON.parse(localStorage.getItem(PRODUCT_BOUGHT_KEY)) || []
const tellCheckoutProduct = () => {
  checkOutProduct.map((product) => {
    const EProduct = templateCheckProduct.content.cloneNode(true)
    EProduct.querySelector("img").src = product.src
    EProduct.querySelector(".count").innerText = product.count
    productContainer.appendChild(EProduct)
  })
  totalPrice.innerText =
    checkOutProduct.reduce((sum, product) => {
      return sum + product.count * product.price
    }, 0) + "$"
}

const initialWebsite = () => {
  tellCheckoutProduct()
}
const templateCheckProduct = _(".template-check-product")
const productContainer = _(".check-out-product-wrapper")
const totalPrice = _(".checkout-total-price")
initialWebsite()
