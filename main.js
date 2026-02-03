
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");

// هنگام لود صفحه
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark");

        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('customInput' +
        '' +
        '');
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');

    incrementButton?.addEventListener('click', () => {
        if (input.value < 20) {
            input.value = parseInt(input.value) + 1;
        }
    });

    decrementButton?.addEventListener('click', () => {
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});




const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('svg');

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.classList.add('block');
            icon.classList.add('rotate-90');
        } else {
            content.classList.remove('block');
            content.classList.add('hidden');
            icon.classList.remove('rotate-90');
        }
    });
});
const cartopen = document.querySelector(".cart-icon")
const cart = document.querySelector(".mobile-cart");
const cartCloseBtn = document.querySelector(".close-btn");

cartopen.addEventListener("click",() => {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");

})
cartCloseBtn.addEventListener("click",() => {

    cart.classList.remove("left-0");
    cart.classList.add("-left-64");

})

const submenuOpenBtn = document.querySelector(".sub-menu-open-click");
const submenu = document.querySelector(".sub-menu");

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open");
})

const navcart = document.querySelector(".nav-cart")
const nav = document.querySelector(".nav");
const closemenu = document.querySelector(".close-menu");

navcart.addEventListener("click",() => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");

})
closemenu.addEventListener("click",() => {

    nav.classList.remove("right-0");
    nav.classList.add("-right-64");

})
