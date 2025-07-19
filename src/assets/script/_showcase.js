import { ifClickInside } from "./_helpers"

export default function () {
  document.querySelectorAll(".showcase").forEach(showcase => {
    const tabs = showcase.querySelectorAll(".showcase__tab")
    /** 
    * @type {[{item: HTMLElement, itemMain: HTMLElement, itemExtra: HTMLElement, tab: HTMLElement, tabExtra: HTMLElement }]}
    */
    const items = []

    showcase.querySelectorAll(".showcase__item").forEach((item, index) => {
      items.push({
        item,
        itemMain: item.querySelector(".showcase__item__main"),
        itemExtra: item.querySelector(".showcase__item__extra"),
        tab: tabs.item(index),
        tabMain: tabs.item(index)?.querySelector(".showcase__tab__main"),
        tabExtra: tabs.item(index)?.querySelector(".showcase__tab__extra"),
      })
    })

    items.forEach(item => {
      item.tab?.addEventListener("focusin", () => {
        // TODO
        // item.tab.scrollIntoViewIfNeeded()
      })

      item.tab?.addEventListener("click", event => {
        const switchMainExtra = item.itemMain.classList.contains("is-active")

        items.forEach(itemTest => {
          itemTest.item.classList.toggle("is-active", item == itemTest)
          itemTest.tab.classList.toggle("is-active", item == itemTest)
          itemTest.itemMain.classList.toggle("is-active", false)
          itemTest.tabMain.toggleAttribute("disabled", false)
          itemTest.itemExtra?.classList.toggle("is-active", false)
          itemTest.tabExtra?.classList.toggle("is-active", false)
        })

        if (ifClickInside(event, item.tabExtra)) {
          item.itemExtra?.classList.toggle("is-active", switchMainExtra)
          item.tabExtra?.classList.toggle("is-active", switchMainExtra)
          item.itemMain.classList.toggle("is-active", !switchMainExtra)
          item.tabMain.toggleAttribute("disabled", !switchMainExtra)
        } else {
          item.itemExtra?.classList.toggle("is-active", false)
          item.tabExtra?.classList.toggle("is-active", false)
          item.itemMain.classList.toggle("is-active", true)
          item.tabMain.toggleAttribute("disabled", true)
        }
      })
    })
  })
}