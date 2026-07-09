import { useEffect, useRef } from 'react';

/**
 * Scales a fixed 1920x1080 slide to fit the screen.
 * - Close to 16:9 (typical laptop/PC/proyektor): COVER — fill the whole
 *   screen, cropping the small overflow evenly from centered edges.
 * - Far from 16:9 but still landscape-ish (old 4:3 proyektor): CONTAIN —
 *   shrink to fit inside the screen with letterbox bars, nothing cropped.
 * - Portrait / narrow (phones): SCALE-TO-WIDTH — fill the screen width
 *   edge-to-edge and let the taller-than-viewport result scroll
 *   vertically, with pinch-zoom left enabled. This isn't a true reflowed
 *   mobile layout (every slide is still the same fixed design, just
 *   scaled), but it makes the deck legible and usable on a phone without
 *   redesigning all 12 slides.
 */
export function useStageFit() {
  const slideRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const TARGET_RATIO = 1920 / 1080;
    const THRESHOLD = 0.15;

    function fit() {
      const el = slideRef.current;
      const stage = stageRef.current;
      if (!el || !stage) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const current = vw / vh;
      const isPortraitOrNarrow = current < 1; // taller than wide -> phone-like

      let s;
      if (isPortraitOrNarrow) {
        // scale-to-width, allow vertical scroll
        s = vw / 1920;
        stage.classList.add('scroll-mode');
      } else {
        stage.classList.remove('scroll-mode');
        const ratioDiff = Math.abs(current - TARGET_RATIO) / TARGET_RATIO;
        s =
          ratioDiff <= THRESHOLD
            ? Math.max(vw / 1920, vh / 1080) // cover
            : Math.min(vw / 1920, vh / 1080); // contain
      }

      el.style.transform = `scale(${s})`;
    }

    fit();
    // Re-run once more after the browser commits the real viewport size —
    // on some mobile browsers the very first call can fire before the
    // emulated/actual viewport has fully settled, giving a stale reading.
    const raf = requestAnimationFrame(fit);
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', fit);
      window.removeEventListener('orientationchange', fit);
    };
  }, []);

  return { slideRef, stageRef };
}