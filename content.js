window.addEventListener('load', () => {
  // Detect if the Figma page is a specific file or design link (indicating project open)
  const figmaURLPatterns = ["figma.com/file/", "figma.com/design/"];
  
  const isFigmaURL = figmaURLPatterns.some(pattern => window.location.href.includes(pattern));

  if (isFigmaURL) {
    // Check if the app is redirecting or trying to open in the desktop app
    const checkForAppRedirect = () => {
      // Figma may display a message prompting the user to open the desktop app
      if (document.body.innerText.includes("Open here instead")) {
        // Send a message to the background script to close the tab
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    };

    // Run the check as soon as the file or design page loads
    checkForAppRedirect();

    // Continue checking for any dynamic changes every 2 seconds (optional)
    setInterval(checkForAppRedirect, 2000);
  }
});