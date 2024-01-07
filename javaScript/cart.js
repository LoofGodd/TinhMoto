import { PRODUCT_BOUGHT_KEY, PRODUCT_KEY, _, _All } from "../data/constant.js"

const productsInCart = JSON.parse(localStorage.getItem(PRODUCT_KEY)) || []

const correctFinalPrice = (products) => {
  const EFinalPrice = _(".final-price")
  const finalPrice = products.reduce((sum, cur) => {
    return sum + cur.price * cur.count
  }, 0)
  EFinalPrice.innerText = finalPrice + "$"
}

const fillProduct = () => {
  productsInCart.map((product) => {
    const EProductCart = templateProductCart.content.cloneNode(true)
    EProductCart.querySelector(".product-cart-id").innerText = product.id
    EProductCart.querySelector(".product-cart-image img").src = product.src
    EProductCart.querySelector(".product-cart-name").innerText = product.name
    EProductCart.querySelector(".product-cart-name").setAttribute(
      "data-product-id",
      product.id
    )
    EProductCart.querySelector(".product-cart-price").innerText =
      product.price + "$"
    EProductCart.querySelector(".cart-quantity .product-quantity").innerText =
      product.count
    EProductCart.querySelector(".cart-quantity .fa-plus").setAttribute(
      "data-product-id",
      product.id
    )
    EProductCart.querySelector(".cart-quantity .fa-minus").setAttribute(
      "data-product-id",
      product.id
    )
    EProductCart.querySelector(".product-cart-total").innerText =
      parseInt(product.price) * parseInt(product.count) + "$"
    cartTable.insertBefore(EProductCart, cartTableLastChild)
  })
}

function correctCartIcon() {
  const countProducts = productsInCart.reduce((sum, product) => {
    return sum + product.count
  }, 0)
  cartIcons.map((cartIcon) => {
    cartIcon.innerText = countProducts
    cartIcon.style.display = cartIcon.innerText === "0" ? "none" : "block"
  })
}
const handleCartOnClick = (e) => {
  const target = e.target
  let totalPricePerItem = 0
  if (target.matches(".process-product-quantity")) {
    const quantityPerItem = target.parentNode.querySelector(".product-quantity")
    if (target.matches("#decrease-product-quantity")) {
      productsInCart.map((product) => {
        if (product.id == target.dataset.productId) {
          product.count = product.count === 0 ? 0 : product.count - 1
          quantityPerItem.innerText = product.count
          totalPricePerItem = product.count * product.price
        }
      })
    }
    if (target.matches("#increase-product-quantity")) {
      productsInCart.map((product) => {
        if (product.id == target.dataset.productId) {
          product.count++
          quantityPerItem.innerText = product.count
          totalPricePerItem = product.count * product.price
        }
      })
    }
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(productsInCart))
    target.parentNode.parentNode.nextElementSibling.innerText =
      totalPricePerItem + "$"
    correctCartIcon()
    correctFinalPrice(productsInCart)
  }
}
const initialWebsiteCart = () => {
  correctCartIcon()
  fillProduct()
  correctFinalPrice(productsInCart)
}

const templateProductCart = _("#template-product-cart")
const cartTable = _(".cart-table")
const cartTableLastChild = cartTable.querySelector(".final-calculate")
const cartIcons = [..._All(".product-total-quantity")]
const checkout = _(".check-out")
cartTable.addEventListener("click", handleCartOnClick)
checkout.addEventListener("click", () => {
  const productBought = localStorage.getItem(PRODUCT_KEY)
  localStorage.removeItem(PRODUCT_KEY)
  localStorage.setItem(PRODUCT_BOUGHT_KEY, productBought)
})
initialWebsiteCart()
