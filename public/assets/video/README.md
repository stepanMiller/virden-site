# Homepage hero video assets

Current preview files:

- `virden-hero-desktop.mp4` — supplied source, approximately 2.1 MB;
- `virden-hero-mobile.mp4` — optimized 480p mobile encode, approximately 1.5 MB;
- `../images/reference/virden-hero-poster.jpg` — video-derived poster, approximately 190 KB.

The paths are configured in `content/home.ts`. All typography, logo, navigation and CTAs remain outside the video file.

The player is muted, looped and inline. CSS applies a dedicated mobile crop, while `prefers-reduced-motion` keeps the poster visible and pauses video playback.
