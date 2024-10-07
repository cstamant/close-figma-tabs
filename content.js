window.addEventListener('load', () => {
  // Detect if the Figma page redirects or opens the desktop app
  if (window.location.href.includes("figma.com/file/")) {
    // Check if the app is trying to redirect to the desktop
    const checkForAppRedirect = () => {
      if (document.body.innerText.includes("Open here instead")) {
        // Send a message to close this tab
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    };

    // Check for redirection every 2 seconds (or adjust timing as needed)
    setInterval(checkForAppRedirect, 2000);
  }
});