import { useEffect, useRef } from 'react';

/**
 * Scales a fixed 1920x1080 slide to fit the screen.
 * - If the window's aspect ratio is close to 16:9 (typical laptop/PC/
 *   modern proyektor), use COVER: fill the whole screen, cropping the
 *   small overflow evenly from the centered edges (no black bars).
 * - If the aspect ratio is far off 16:9 (e.g. an old 4:3 proyektor),
 *   fall back to CONTAIN: shrink to fit inside the screen with letterbox
 *   bars, so nothing important (corner UI, buttons, dates) gets cropped.
 */
export function useStageFit() {
  const slideRef = useRef(null);

  useEffect(() => {
    const TARGET_RATIO = 1920 / 1080;
    const THRESHOLD = 0.15;

    function fit() {
      const el = slideRef.current;
      if (!el) return;
      const current = window.innerWidth / window.innerHeight;
      const ratioDiff = Math.abs(current - TARGET_RATIO) / TARGET_RATIO;

      const s =
        ratioDiff <= THRESHOLD
          ? Math.max(window.innerWidth / 1920, window.innerHeight / 1080) // cover
          : Math.min(window.innerWidth / 1920, window.innerHeight / 1080); // contain

      el.style.transform = `scale(${s})`;
    }

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return slideRef;
}
