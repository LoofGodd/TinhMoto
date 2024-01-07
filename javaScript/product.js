import { PRODUCT_DETAIL_KEY, _ } from "../data/constant.js"
import products from "../data/products.js"
const productDetail = JSON.parse(localStorage.getItem(PRODUCT_DETAIL_KEY)) || {}
console.log(products)
console.log(productDetail)
const showProductDetail = () => {
  const EProductDetailWrapper = templateProductDetail.content.cloneNode(true)
  EProductDetailWrapper.querySelector(".product-detail img").src =
    productDetail.src
  const childProductWrapper = EProductDetailWrapper.querySelector(
    ".product-detail .sub-product"
  )
  productDetail.children.map((child) => {
    const EChildProduct = templateChildProduct.content
      .cloneNode(true)
      .querySelector("img")
    EChildProduct.src = child
    childProductWrapper.appendChild(EChildProduct)
    console.log(childProductWrapper)
  })

  EProductDetailWrapper.querySelector(
    ".product-detail-description p"
  ).innerText = productDetail.description
  EProductDetailWrapper.querySelector(
    ".product-detail-description .product-name"
  ).innerText = productDetail.name
  EProductDetailWrapper.querySelector(
    ".product-detail-description .access a"
  ).setAttribute("data-product-id", productDetail.id)
  const productRelatedWrapper =
    EProductDetailWrapper.querySelector(".product-related")
  productDetail.other.map((related) => {
    const EOtherProduct = templateOtherProduct.content.cloneNode(true)
    EOtherProduct.querySelector("img").src = related.src
    EOtherProduct.querySelector("a").innerText = related.name
    console.log(related, "related")
    EOtherProduct.querySelector("a").setAttribute("data-product-id", related.id)
    productRelatedWrapper.appendChild(EOtherProduct)
  })
  productDetailWrapper.appendChild(EProductDetailWrapper)
}

const templateProductDetail = _("#template-product-detail")
const templateChildProduct = _("#template-child-product")
const templateOtherProduct = _("#template-other-product")
const productDetailWrapper = _(".main-product-detail")

showProductDetail()
