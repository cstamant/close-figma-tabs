window.addEventListener('load', () => {
  const figmaURLPatterns = ["figma.com/file/", "figma.com/design/"];
  
  const isFigmaURL = figmaURLPatterns.some(pattern => window.location.href.includes(pattern));

  if (isFigmaURL) {
    const checkForAppRedirect = () => {
      if (document.body.innerText.includes("Open here instead")) {
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    };

    checkForAppRedirect();

    setInterval(checkForAppRedirect, 2000);
  }
});