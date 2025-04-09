document.getElementById('fontForm').addEventListener("submit", (e) => {
  e.preventDefault(); 

  const fontSize = document.getElementById("fontsize").value + "px";
  const fontColor = document.getElementById("fontcolor").value;

  document.cookie = "fontsize=" + fontSize + "; expires=Fri, 31 Dec 2030 12:00:00 UTC; path=/";
  document.cookie = "fontcolor=" + fontColor + "; expires=Fri, 31 Dec 2030 12:00:00 UTC; path=/";

  // Apply the styles immediately
  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

function showCookieValue() {
  const fontSizeCookie = getCookie("fontsize");
  const fontColorCookie = getCookie("fontcolor");

  if (fontSizeCookie) {
    document.getElementById("fontsize").value = parseInt(fontSizeCookie);
    document.documentElement.style.setProperty("--fontsize", fontSizeCookie);
  }

  if (fontColorCookie) {
    document.getElementById("fontcolor").value = fontColorCookie;
    document.documentElement.style.setProperty("--fontcolor", fontColorCookie);
  }
}

function getCookie(key) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === key) return value;
  }
  return null;
}
