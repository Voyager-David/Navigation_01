function toggleList() {
    const navList = document.getElementById("navList");
    if (navList.style.display === "none" || navList.style.display === "") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }
}