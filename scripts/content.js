document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
      if (request.action === "start-record") {
        const media = await navigator.mediaDevices.getDisplayMedia({
          video: { frameRate: { ideal: 30 } },
        });

        const mediaRecorder = new MediaRecorder(media, {
          mimeType: 'video/webm;codecs="vp8,opus"',
        });
        mediaRecorder.start();

        const [video] = media.getVideoTracks();
        video.addEventListener("ended", () => {
          mediaRecorder.stop();
        });

        mediaRecorder.addEventListener("dataavailable", (e) => {
          const locale = navigator.language;
          const date = new Date().toLocaleString(locale, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });

          const link = document.createElement("a");
          link.href = URL.createObjectURL(e.data);
          link.download = `${date}.webm`;
          link.click();
        });
      }
    }
  );
});
