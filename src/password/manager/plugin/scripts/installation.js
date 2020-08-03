//Inform the user that intallation was successful
  chrome.runtime.onInstalled.addListener(function() {
    console.log("Password Manager is now installed!");
    });