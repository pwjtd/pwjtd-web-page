async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (element) {
        const response = await fetch(file);
        const html = await response.text();
        element.innerHTML = html;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("footer", "/components/footer.html");
});