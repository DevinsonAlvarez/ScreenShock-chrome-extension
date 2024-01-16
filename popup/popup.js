const $recordButton = document.getElementById('record-button');

// $recordButton.addEventListener('click', async () => {
//   const media = await navigator.mediaDevices.getDisplayMedia({
//     video: { frameRate: { ideal: 30 } },
//   });

//   const mediaRecorder = new MediaRecorder(media, {
//     mimeType: 'video/mp4;codecs=h.264,aac',
//   });

//   mediaRecorder.start();

//   const [video] = media.getVideoTracks();
//   video.addEventListener('ended', () => {
//     mediaRecorder.stop();
//   });

//   document
//     .getElementById('stop-button')
//     .addEventListener('click', () => mediaRecorder.stop());

//   mediaRecorder.addEventListener('dataavailable', (e) => {
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(e.data);
//     link.download = 'ScreenShock.mp4';
//     link.click();
//   });
// });

$recordButton.addEventListener('click', async () => {
  const response = await chrome.runtime.sendMessage({
    action: 'start-record',
  });

  console.log(response);
});
