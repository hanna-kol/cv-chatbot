$(document).ready(function () {
  window.addEventListener("dfMessengerLoaded", function (event) {
    const style = document.createElement("style");
    const $r1 = document.querySelector("df-messenger");
    const $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");

    style.textContent = `
    div.chat-wrapper[opened="true"] {
        width: calc(100% - 40px);
        height: calc(100vh - 155px);
        right: 20px;
        left: 20px;
    }`;
    $r2.shadowRoot.appendChild(style);
  });
});
