document.addEventListener('DOMContentLoaded', function () {
 const carousel = document.getElementById('mobile-carousel');
 const textContent = document.getElementById('text-content-mobile');
 const slideContent = [
    {
      h1: "Touch Me Not",
      h4: "(Noli Me Tángere)",
      p: "In more than a century since its appearance, José Riza's Noli Me Tangere has become widely known as the great novel of the Philippines. A passionate love story set against the ugly political backdrop of repression, torture, and murder, \"The Noli,\" as it is called in the Philippines, was the first major artistic manifestation of Asian resistance to European colonialism, and Rizal became a guiding conscience and martyr for the revolution that would subsequently rise up in the Spanish province.",
      buttonText: "Read Now",
      buttonLink: "Touch Me Not.html"
    },
    {
      h1: "Subversion",
      h4: "(El Filibusterismo)",
      p: "El Filibusterismo (The Subversive) is the second novel by Jose Rizal (1861-1896), national hero of the Philippines. Like its predecessor, the better-known Noli Me Tangere, the Fili was written in Castilian while Rizal was traveling and studying in Europe. It was published in Ghent in 1891 and later translated into English, German, French, Japanese, Tagalog, Ilonggo, and other languages. A nationalist novel by an author who has been called the first Filipino, its nature as a social document of the late-nineteenth-century Philippines is often emphasized. For many years, copies of the Fili were smuggled into the Philippines after it was condemned as subversive by the Spanish authorities. Characters from the Noli (Basilio, Dona Victorina, Padre Salvi) return while new ones are introduced: Simoun, the transformed Ibarra; Cabesang Tales and his struggle for justice; the nationalist student Isagani; the Indio priest Padre Florentino. Through them the colonial milieu is expanded - its officialdom, education, legal system, power plays, social patterns - and seen anew as context for conflict and insight. editions of the original manuscripts. The result is the most authoritative and faithful English translation to date, one which attempts to preserve in English the cadence and color of the original.(Subversion)",
      buttonText: "Read Now",
      buttonLink: "Subversion.html"
    },
  ];
  carousel.addEventListener('slid.bs.carousel', function (event) {
    const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
    const currentContent = slideContent[activeIndex];
    textContent.querySelector('h1').textContent = currentContent.h1;
    textContent.querySelector('h4').textContent = currentContent.h4;
    textContent.querySelector('p').textContent = currentContent.p;
    const linkElement = textContent.querySelector('a');
    linkElement.innerHTML = `<span class="text-dark">${currentContent.buttonText}</span>`;
    linkElement.setAttribute('href', currentContent.buttonLink);
  });
});
