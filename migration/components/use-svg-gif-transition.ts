import { useEffect } from 'react';

export function useSvgGifTransition() {
  useEffect(() => {
    // Find all SVG-GIF elements
    const elements = document.querySelectorAll<HTMLImageElement>('[data-gif]');

    elements.forEach((element) => {
      const gifSrc = element.dataset.gif;
      const svgSrc = element.dataset.svg;
      const transitionTime = parseInt(element.dataset.transitionTime || '10', 10);
      const svgTime = parseInt(element.dataset.svgTime || '2100', 10);

      if (!gifSrc || !svgSrc) return;

      // Preload the GIF
      const preloadGif = new Image();
      preloadGif.src = gifSrc;

      // After svgTime, switch to GIF
      setTimeout(() => {
        element.src = gifSrc;
      }, svgTime);
    });
  }, []);
}
