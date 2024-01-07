import { PRODUCT_DETAIL_KEY, _, _All, categories } from "../data/constant.js"
import products from "../data/products.js"
let itemPerPage = 6
let totalPages = Math.ceil(products.length / itemPerPage)
let currentPage = 1
let startItem = 1
let endItem = itemPerPage
let tempProducts = [...products]

const correctTotalPage = (totalItems) => {
  totalPages = Math.ceil(totalItems / itemPerPage)
}

const correctNavPage = (page = 1) => {
  const allPages = [...pages.querySelectorAll(".page")]
  currentPage = page
  allPages.map((page) => {
    if (page.innerText == currentPage) {
      page.classList.add("active")
    } else page.classList.remove("active")
  })
}

const correctProducts = (category) => {
  //category
  if (category === "All") tempProducts = [...products]
  else
    tempProducts = products.filter((product) => {
      if (product.category.find((cate) => cate === category)) return product
    })
}
const correctCategory = (e) => {
  const target = e.target
  if (!target.matches("p")) return
  const categoryChild = [...categoryList.querySelectorAll(".category")]
  categoryChild.map((category) => {
    const p = category.querySelector("p")
    if (p.innerText === target.innerText) p.classList.add("active")
    else p.classList.remove("active")
  })

  correctProducts(target.innerText)
  deletePages()
  addPages(tempProducts.length)
  correctNavPage(1)
  deleteProducts()
  addProducts()
}

const deleteProducts = () => {
  while (productList.firstChild) {
    productList.firstChild.remove()
  }
}

const deletePages = () => {
  while (pages.firstChild) {
    pages.firstChild.remove()
  }
}

const addPages = (totalItems) => {
  correctTotalPage(totalItems)
  for (let page = 1; page <= totalPages; ++page) {
    const EPage = templatePage.content.cloneNode(true).querySelector(".page")
    EPage.innerText = page
    pages.appendChild(EPage)
  }
}
const addCategory = () => {
  categories.map((category) => {
    const ECategory = templateCategory.content
      .cloneNode(true)
      .querySelector(".category")
    const icon = ECategory.querySelector("i")
    const label = ECategory.querySelector("p")
    icon.className = category.icon
    label.innerText = category.label

    category.active && label.classList.add("active")
    categoryList.appendChild(ECategory)
  })
}
const addProducts = () => {
  if (currentPage == 1) {
    startItem = 0
    endItem =
      itemPerPage > tempProducts.length ? tempProducts.length : itemPerPage
  } else {
    startItem = (currentPage - 1) * itemPerPage + 1
    endItem =
      currentPage === currentPage * itemPerPage > products.length
        ? tempProducts.length
        : currentPage * itemPerPage + 1
  }
  for (let i = startItem; i < endItem; ++i) {
    const EProduct = templateProduct.content
      .cloneNode(true)
      .querySelector(".shop-product")
    EProduct.querySelector("img").src = tempProducts[i].src
    const productCategory = EProduct.querySelector(".product-category-list")
    tempProducts[i].category.map((category) => {
      const p = document.createElement("p")
      p.innerText = category
      productCategory.appendChild(p)
    })

    EProduct.querySelector(".shop-product-footer")
      .querySelector(".buy")
      .setAttribute("data-product-id", tempProducts[i].id)

    EProduct.querySelector(".product-info").querySelector(
      ".product-name"
    ).innerText = tempProducts[i].name
    EProduct.querySelector(".product-info")
      .querySelector(".product-name")
      .setAttribute("data-product-id", tempProducts[i].id)
    EProduct.querySelector(".product-info").querySelector("p").innerText =
      tempProducts[i].description
    EProduct.querySelector(".shop-product-footer").querySelector(
      ".price"
    ).innerText = "$" + tempProducts[i].price
    productList.appendChild(EProduct)
  }
}

const correctProductPage = (e) => {
  const target = e.target
  if (!target.matches(".page")) return
  correctNavPage(target.innerText)
  deleteProducts()
  addProducts()
}

const initialWebsite = () => {
  addCategory()
  addPages(tempProducts.length)
  correctNavPage()
  addProducts()
}
const templateCategory = _("#template-category")
const templateProduct = _("#template-shop-product")
const templatePage = _("#template-go-page")
const productList = _(".shop-product-list")
const categoryList = _(".category-list")
const pages = _(".pages")
initialWebsite()

pages.addEventListener("click", correctProductPage)
categoryList.addEventListener("click", correctCategory)
