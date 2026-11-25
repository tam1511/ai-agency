# Motion text spec (for every video finish)
Frame 1440x2560 (scale x0.75 for 1080x1920). Adapted from talking-head-reels style guide.

Reference look: [clients/thalo/assets/video/thalo-V02-reel-9x16-v3.mp4](../../clients/thalo/assets/video/thalo-V02-reel-9x16-v3.mp4) — the current canonical render that this spec describes. Match font sizes, placement, beat pacing, price card, and end card from v3.

## Fonts (must load; never fall back to a default font)
- KEY words: Anton (.claude/skills/talking-head-reels/assets/fonts/Anton-Regular.ttf), CAPITALS
- Soft accent / sub lines: a sans or serif with full Vietnamese glyphs; test "ơ ư ạ ộ ữ đ ấ" before render
- If a font cannot be loaded, STOP and report. A default-font render is a failure.

## Size
- KEY word: 240-340 px (one beat = 1-2 key words)
- Sub line: 110-140 px, max 5 words. Applies to EVERY sub line, including copy on price cards and end cards — no card-body exception.
- Price: Anton 360-440 px
- Every line max 1280 px wide; break into 2 lines rather than shrink or overflow
- Multi-line Vietnamese uppercase: leading (centre-to-centre between lines) ≥ **1.3 × cap height**. Reason: dấu nặng (e.g. Ẹ) sits well below the baseline and dấu mũ / dấu hỏi / dấu ngã (e.g. Ê) sits well above cap height, so 1.1× leaves them colliding.

## Placement
- Horizontally centred. Vertical zone y 900-1900 (centre stack: sub above, KEY, sub below)
- Horizontal safe margin: every glyph must sit x0 ≥ 72 and x1 ≤ 1368 (72 px from each frame edge on a 1440-wide frame)
- Never in the top UI (y < 360) or bottom UI (y > 2048): platform UI
- Never over the product label or the dropper; put text in the empty area of the shot.
- All bbox checks are measured on the full 1440×2560 frame and must include Vietnamese diacritic extents (dấu nặng below baseline, dấu mũ / dấu hỏi / dấu ngã above cap)
- Soft shadow on all text (black 45%, blur, no offset); fully opaque, never semi-transparent

## Timing and motion
- Each text holds at least 1.2 s; price at least 2.0 s; end card at least 2.0 s.
- KEY entry: snap in 118% -> 100% in 6 frames (on a beat); exit: fade + slight grow 4 frames
- Sub entry: words appear one by one or fade up 8 frames
- Max one new idea per 2 s. Fewer words, longer holds.

## Transitions and look
- Between different shots: zoom-through or whip (6-8 frames, motion blur). No hard cut between
  unrelated shots; hard cut only inside the same scene.
- Slow push-in 3-5% inside every shot; no static frame longer than 1 s
- One grade for the whole video (warm neutral). Re-grade or swap any off-palette shot.

## QA before final render
Render stills at the middle of every beat + every transition into one contact sheet.
Check: every word inside frame, readable at phone size, not over label, correct diacritics,
nothing in the UI zones. Fix, then render.