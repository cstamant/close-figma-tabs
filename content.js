window.addEventListener('load', () => {
  const figmaURLPatterns = ["figma.com/file/", "figma.com/design/"];
  
  const isFigmaURL = figmaURLPatterns.some(pattern => window.location.href.includes(pattern));

  if (isFigmaURL) {
    const checkForAppRedirect = () => {
      const bodyText = document.body.innerText;

      if (bodyText.includes("Open here instead") || 
          bodyText.includes("In Figma App") ||
          bodyText.includes("Open in Desktop App")) {
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    };

    checkForAppRedirect();

    setInterval(checkForAppRedirect, 2000);
  }
});