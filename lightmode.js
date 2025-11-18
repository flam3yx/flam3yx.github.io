let lightmode = localStorage.getItem('lightmode');
const themeToggle = document.getElementById('theme-toggle');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
}

if (lightmode === "active") enableLightmode();

themeToggle.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode();
});