chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action) {
    console.log(request.action);
  }
});
