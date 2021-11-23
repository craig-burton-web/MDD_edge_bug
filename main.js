const intro = document.querySelector(".why-choose");
const services = document.querySelector(".services-intro");

const introOptions = {
//   root: document.querySelector(".page"),
  threshold: 1,
  rootMargin: "0px 0px 0px 0px"
};

const introObserver = new IntersectionObserver(function (
  entries,
  introObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      intro.classList.add("intro-slide");
      introObserver.unobserve(entry.target);
    }
  });
},
introOptions);

introObserver.observe(services);

// SERVICES TEXT

const servCards = document.querySelectorAll(".services-h3");

const servCardOptions = {
  root: document.querySelector(".page"),
  threshold: 1,
  rootMargin: "0px 0px 0px 0px"
};

const servCardObserver = new IntersectionObserver(
  (entries, servCardObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        servCards.forEach((servCard) => {
          entry.target.classList.add("services-h3-anim8");
        });
        servCardObserver.unobserve(entry.target);
      }
    });
  },
  servCardOptions
);

servCards.forEach((servCard) => {
  servCardObserver.observe(servCard);
});

//CTA TEXT

const ctaText = document.querySelector(".CTA-text");

setInterval(() => {
  ctaText.classList.add("CTA-text-anm8");
  setTimeout(() => {
    ctaText.classList.remove("CTA-text-anm8");
  }, 500);
}, 3000);
