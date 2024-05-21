console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("External script just simulated DOMContentLoaded");
})

var DOMContentLoadedEvent = document.createEvent("Event")
DOMContentLoadedEvent.initEvent("DOMContentLoaded", true, true)
window.document.dispatchEvent(DOMContentLoadedEvent)
