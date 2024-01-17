document.addEventListener("DOMContentLoaded", () => {
  const $recordButton = document.getElementById("record-button");

  $recordButton.addEventListener("click", async () => {
    chrome.tabs.query({ currentWindow: true, active: true }, async (tabs) => {
      await chrome.tabs.sendMessage(tabs[0].id, { action: "start-record" });
    });
  });
});
