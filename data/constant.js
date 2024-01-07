export const categories = [
  { icon: "fa-solid fa-bars-staggered", label: "All", active: true },
  { icon: "fa-solid fa-fire-flame-curved", label: "New", active: false },
  { icon: "fa-solid fa-arrow-trend-up", label: "Trending", active: false },
  { icon: "fa-solid fa-money-bill-wave", label: "Low Price", active: false },
  {
    icon: "fa-solid fa-money-bill-1-wave",
    label: "Height Price",
    active: false,
  },
  { icon: "fa-solid fa-person-running", label: "Limit Edition", active: false },
  { icon: "fa-solid fa-calendar", label: "Promotion", active: false },
]
export const _ = (id) => {
  return document.querySelector(id)
}
export const _All = (id) => {
  return document.querySelectorAll(id)
}

export const PRODUCT_KEY = "PRODUCT_BOUGHT_KEY"

export const PRODUCT_DETAIL_KEY = "PRODUCT_DETAIL_KEY"

export const PRODUCT_BOUGHT_KEY = "PRODUCT_BOUGHT"
