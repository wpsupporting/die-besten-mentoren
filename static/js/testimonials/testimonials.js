document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector("#testimonials-slider");

  if (!slider) {
      console.error("Slider nicht gefunden.");
      return;
  }

  // Daten aus HTML-Attributen auslesen
  const loop = slider.getAttribute("data-loop") === "true";
  const autoplay = slider.getAttribute("data-autoplay") === "true";
  const autoplaySpeed = parseInt(slider.getAttribute("data-autoplay-speed")) || 7000;
  const breakpointSmartphonePortrait = parseInt(slider.getAttribute("data-breakpoint-smartphone-portrait")) || 480;
  const breakpointSmartphoneLandscape = parseInt(slider.getAttribute("data-breakpoint-smartphone-landscape")) || 576;
  const breakpointTabletPortrait = parseInt(slider.getAttribute("data-breakpoint-tablet-portrait")) || 768;
  const breakpointTabletLandscape = parseInt(slider.getAttribute("data-breakpoint-tablet-landscape")) || 1024;
  const breakpointDesktop = parseInt(slider.getAttribute("data-breakpoint-desktop")) || 1200;

  const smartphonePortraitItems = parseInt(slider.getAttribute("data-smartphone-portrait-items")) || 1;
  const smartphoneLandscapeItems = parseInt(slider.getAttribute("data-smartphone-landscape-items")) || 1;
  const tabletPortraitItems = parseInt(slider.getAttribute("data-tablet-portrait-items")) || 1;
  const tabletLandscapeItems = parseInt(slider.getAttribute("data-tablet-landscape-items")) || 1;
  const desktopItems = parseInt(slider.getAttribute("data-desktop-items")) || 1;

  // Initialisiere Slick Slider
  $(slider).slick({
      slidesToShow: desktopItems, // Standardwert für größere Geräte
      slidesToScroll: 1,
      infinite: loop,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      dots: true,
      arrows: true,
      responsive: [
          {
              breakpoint: breakpointDesktop,
              settings: {
                  slidesToShow: desktopItems,
              },
          },
          {
              breakpoint: breakpointTabletLandscape,
              settings: {
                  slidesToShow: tabletLandscapeItems,
              },
          },
          {
              breakpoint: breakpointTabletPortrait,
              settings: {
                  slidesToShow: tabletPortraitItems,
              },
          },
          {
              breakpoint: breakpointSmartphoneLandscape,
              settings: {
                  slidesToShow: smartphoneLandscapeItems,
              },
          },
          {
              breakpoint: breakpointSmartphonePortrait,
              settings: {
                  slidesToShow: smartphonePortraitItems,
              },
          },
      ],
  });

  console.log("Slick Slider initialisiert mit folgenden Einstellungen:", {
      loop,
      autoplay,
      autoplaySpeed,
      desktopItems,
      tabletLandscapeItems,
      tabletPortraitItems,
      smartphoneLandscapeItems,
      smartphonePortraitItems,
  });
});
