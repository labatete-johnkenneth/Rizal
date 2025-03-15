const buttons = document.querySelectorAll('.button');
const audioUrl = "https://white-mariellen-36.tiiny.site/click_effect-86995.mp3";
buttons.forEach(button => {
  button.onclick = function () {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.error("音频播放失败:", error);
    });
  };
});
