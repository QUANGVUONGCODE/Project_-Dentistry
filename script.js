window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const nav = document.querySelector("nav.navbar");

    // Lấy chiều cao của header để làm mốc
    const headerHeight = header.offsetHeight;

    // Nếu cuộn vượt qua chiều cao của header, cố định nav
    if (window.scrollY >= headerHeight) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});