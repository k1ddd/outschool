function toggleMenu() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#mobile__menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.99) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      burger.classList.remove("active");
      body.classList.remove("overflow-hidden");
    }
  });
}
toggleMenu();

function toggleTabs(tabsTriggerClass, tabsContentClass) {
  const tabsTriggers = document.querySelectorAll(tabsTriggerClass);
  const tabsContent = document.querySelectorAll(tabsContentClass);
  tabsContent.forEach((content) => {
    content.classList.add("hidden");
    tabsContent[0].classList.remove("hidden");
  });
  tabsTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      tabsTriggers.forEach((t) => t.classList.remove("active"));
      trigger.classList.add("active");
      tabsContent.forEach((content) => {
        content.classList.add("hidden");
      });

      tabsContent[index].classList.remove("hidden");
    });
  });
}

toggleTabs(".tab-trigger", ".tab-content");
