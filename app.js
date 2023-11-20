function initShare() {
  const shareData = {
    title: "The DIY Guy",
    text: "The One You Can Trust",
    url: "https://thediyguy.vercel.app",
  };

  const btn = document.querySelector("#share");
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      return;
    }
  });
}

function animateServices() {
  document.querySelector("#bottom").animate(
    {
      transform: ["translate(0, 100%)", "translate(0, 0)"],
    },
    {
      delay: 450,
      duration: 800,
      fill: "forwards",
      easing: "linear",
    }
  );
  initShare();
}

function animateLogo() {
  document.querySelector("#logo").animate(
    {
      transform: ["scale(0)", "scale(1)"],
    },
    {
      delay: 150,
      duration: 450,
      fill: "forwards",
      easing: "linear",
    }
  );
  animateServices();
}

window.onload = () => {
  animateLogo();
  document.body.oncontextmenu = () => false;
};
