// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => { navLinks.classList.toggle("active"); });
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", ()=>{ navLinks.classList.remove("active"); });
});

// THEME SWITCHER
const themes = {
redblack:{bg:"#0D0D0D", text:"#FFFFFF", card:"#1A1A1A", accent:"#FF2E2E"},
cyberblue:{bg:"#0F172A", text:"#FFFFFF", card:"#1E293B", accent:"#38BDF8"},
purpledark:{bg:"#1A0F2E", text:"#FFFFFF", card:"#2A1A45", accent:"#A855F7"},
neongreen:{bg:"#0B1A12", text:"#FFFFFF", card:"#13261C", accent:"#39FF14"}
};
const themeBtn = document.getElementById("themeBtn");
let themeNames = Object.keys(themes);
let index = 0;
let savedTheme = localStorage.getItem("theme");
if(savedTheme && themes[savedTheme]){ applyTheme(themes[savedTheme]); index = themeNames.indexOf(savedTheme);}
themeBtn.onclick = () => {
    index++; if(index>=themeNames.length) index=0;
    let newTheme = themeNames[index]; applyTheme(themes[newTheme]);
    localStorage.setItem("theme",newTheme);
};
function applyTheme(theme){
    document.documentElement.style.setProperty("--bg",theme.bg);
    document.documentElement.style.setProperty("--text",theme.text);
    document.documentElement.style.setProperty("--card",theme.card);
    document.documentElement.style.setProperty("--accent",theme.accent);
}
