import { _ } from "../data/constant.js"
import products from "../data/products.js"
import { PRODUCT_KEY } from "../data/constant.js"
let productsInCart = JSON.parse(localStorage.getItem(PRODUCT_KEY)) || []

const handleBuyProduct = (e) => {
  const target = e.target
  if (!target.matches(".buy")) return
  const targetId = target.dataset.productId
  const isExist = productsInCart.find(
    (product) => product.id == target.dataset.productId
  )
  if (isExist) {
    productsInCart.map((product) => {
      if (product.id == targetId) product.count++
    })
  } else {
    const product = products.find((product) => product.id == targetId)
    productsInCart.push({ ...product, count: 1 })
  }
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(productsInCart))
}

const productList = _(".shop-product-list")
document.addEventListener("click", handleBuyProduct)
