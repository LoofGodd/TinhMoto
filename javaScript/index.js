import { _ } from "../data/constant.js"
import productFeatures from "../data/productFeaturs.js"
import brands from "../data/brand.js"

const AddProductFeaturesTO = (parentElement, templateProduct) => {
  for (let i = 0; i < productFeatures.length; ++i) {
    const childElement = templateProduct.content.cloneNode(true)
    const image = childElement.querySelector("img")
    const name = childElement.querySelector(".product-description")
    const price = childElement.querySelector(".HWrap figcaption")
    const buyNow = childElement.querySelector(".HWrap .buy")
    buyNow.setAttribute("data-product-id", productFeatures[i].id)
    image.src = productFeatures[i].src
    name.innerText = productFeatures[i].name
    name.setAttribute("data-product-id", productFeatures[i].id)
    price.innerText = "$" + productFeatures[i].price
    parentElement.appendChild(childElement)
  }
}
const addBrandsToWebsite = () => {
  brands.map((brand) => {
    const EBrand = templateBrand.content.cloneNode(true)
    const image = EBrand.querySelector("img")
    image.src = brand
    showAllBrands.appendChild(EBrand)
  })
}
const initialWebsite = () => {
  AddProductFeaturesTO(swiperWrap, templateProduct)
  addBrandsToWebsite()
}
const templateProduct = _("#template-product")
const templateBrand = _("#template-brand")
const swiperWrap = _(".swiper-wrapper")
const showAllBrands = _("#show-all-brands")

console.log("hi")
initialWebsite()
