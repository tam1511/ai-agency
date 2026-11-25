# THALO Rice Glow Serum — Task Plan

Owner: CEO (human). Operator: Claude. Date opened: 2026-11-15. Last update: 2026-11-17. **STATUS: APPROVED — CEO final QA 2026-11-17. Ready for client handoff.**
Brief: [../brief/brief.md](../brief/brief.md). Workflow reference: [../../../CLAUDE.md](../../../CLAUDE.md).

## Status (as of 2026-11-17)

**Done:**
| Step | Artifact | CEO decision at STOP |
|---|---|---|
| 1 Task plan | [task-plan.md](task-plan.md) | "ok" — file naming per `agency/sop/file-naming.md`, SH01 → `assets/shorts/`; research VN-only HCMC+HN; sources: TikTok · Shopee/TTS · VN skincare groups/forums · YT; competitor set 4–6 VN rice/niacin + K-beauty + J-beauty, 250–600k; competitor names only in research file |
| 2 Market research | [../research/market-research.md](../research/market-research.md) | "ok" — 3 micro-segments, 6 competitors (The Ordinary, Cocoon N7, Anua Peach, Torriden Dive-In, Some By Mi AHA-BHA-PHA, Klairs), white space = rice ferment story + calm voice + humid-skin POV |
| 3a Campaign concept | [../strategy/campaign-concept.md](../strategy/campaign-concept.md) | "approved" — big idea "Nước gạo của bà, nâng cấp cho làn da đang sống trong nắng Sài Gòn – Hà Nội"; tagline `Nhẹ tênh như nước gạo.`; 3 angles (ingredient / absorption / GRWM); visual STYLE-A primary + STYLE-C secondary; B & D parked |
| 3b Shot list | [../strategy/shot-list.md](../strategy/shot-list.md) | "approved STOP2b" — 6 statics + 3 videos + 1 short, 255 credits estimated, 5 offer touchpoints (S03, S04, S06, V02, SH01), cap ≤260 PASS |
| 4a S01 test static | [../assets/images/thalo-S01-feed-4x5.png](../assets/images/thalo-S01-feed-4x5.png) | "go" — 15 credits, 1 attempt, job `e053c32a-3837-42ba-8e28-6346482b3de5` |
| 4b S02–S06 batch | [S02](../assets/images/thalo-S02-feed-4x5.png) · [S03](../assets/images/thalo-S03-feed-4x5.png) · [S04](../assets/images/thalo-S04-story-9x16.png) · [S05](../assets/images/thalo-S05-story-9x16.png) · [S06](../assets/images/thalo-S06-story-9x16.png) | — all 5 first-attempt keeps, 0 FIX rounds, 90 credits exactly on shot-list estimate, STYLE-A 9:16 flag (S04/S06) did not fire |
| 5a V02 test video | [thalo-V02-reel-9x16.mp4](../assets/video/thalo-V02-reel-9x16.mp4) | 20 credits (vs 45 est), model `minimax_h3` native 2K 9:16 10 s, job `2be2945e-3a57-4dd1-8d95-d8fca3e60f3b`, no on-image text, lower-third clean for post-prod footer. |
| 5a.v2 V02 post-edit | [thalo-V02-reel-9x16-v2.mp4](../assets/video/thalo-V02-reel-9x16-v2.mp4) | rejected (default font, text in UI zone, text over label, hard cuts, mixed grade). Archived. |
| 5a.v3 V02 **APPROVED as canonical** | [thalo-V02-reel-9x16-v3.mp4](../assets/video/thalo-V02-reel-9x16-v3.mp4) | **"go" 2026-11-17** — chosen as final V02 look. 12.0 s, 2K, 5.26 MB. All typography/placement/grade decisions here become the reference for V01/V03/SH01. Audio-only re-normalization → v3a (see next row). |
| 5a.v4 V02 **REJECTED** | [thalo-V02-reel-9x16-v4.mp4](../assets/video/thalo-V02-reel-9x16-v4.mp4) | **rejected 2026-11-17** — file retained but NOT used. v4 round over-corrected: end card went too heavy (40% cutout + 13s total vs v3's quiet footer). Spec rules added in v4 round (every-frame clearance, hold-from-fully-in, CTA 120 px) reverted from `agency/templates/motion-text-spec.md`. |
| 5a.v3a V02 audio-fix | `thalo-V02-reel-9x16-v3a.mp4` (pending) | **delegated 2026-11-17** — audio only: normalize v3 to −14 LUFS integrated / −1.5 dBTP ceiling; video untouched. 0 credits. This becomes the ship file + SH01 source. |

**Credits**
- Budget: 300
- Spent: 157 (TEST01 2 · S01 15 · S02 15 · S03 20 · S04 20 · S05 15 · S06 20 · V02 20 · V03 30)
- Remaining: 143
- SH01 + all post-prod = 0 credits (ffmpeg pipeline).
- 20% stop line: 60 credits remaining. Current 143 >> stop line.

**Final shipping files (locked 2026-11-17):**
| Asset | File | Loudness | Virality |
|---|---|---|---|
| SH01 | [assets/shorts/thalo-SH01-reel-9x16-v2.mp4](../assets/shorts/thalo-SH01-reel-9x16-v2.mp4) | −14.0 LUFS / −1.2 dBTP | 81/100 |
| V02 | [assets/video/thalo-V02-reel-9x16-v3c.mp4](../assets/video/thalo-V02-reel-9x16-v3c.mp4) | −14.1 LUFS / −2.0 dBTP | 78/100 |
| V01 | [assets/video/thalo-V01-reel-9x16-v3a.mp4](../assets/video/thalo-V01-reel-9x16-v3a.mp4) | −14.2 LUFS / −1.8 dBTP | 72/100 (↑10 post-fix) |
| V03 | [assets/video/thalo-V03-reel-9x16-v3.mp4](../assets/video/thalo-V03-reel-9x16-v3.mp4) | −14.0 LUFS / −3.7 dBTP | 71/100 |

**Marketing deliverables:**
- [ops/virality.md](virality.md) — 4-asset scores + V01 re-score addendum
- [ops/captions.md](captions.md) — 10 captions (6 statics ×1 + 4 videos ×2 hooks + body)
- [ops/calendar.md](calendar.md) — 14 days, 18 Nov → 1 Dec 2026, 15 post-slots, SH01→V02→V01→V03 order
- [ops/client-report.pptx](client-report.pptx) — 14 slides, python-pptx validator PASS

**Next action:** project closed. CEO duyệt 2026-11-17. Handoff package = `clients/thalo/` folder (brief + strategy + assets + ops).

**Open flags (from shot list):**
1. ~~STYLE-A reframe to 9:16 (S04, S06)~~ — **closed 2026-11-15**: both came through clean on first generation, 0 FIX rounds used.
2. V03 uses dropper-lift (no hand) to sidestep distorted-fingers risk — fallback is static-drops-only, no new approval needed. **Still open — tested during step 5b.**
3. ~~SH01 is cuts-only from V02~~ — **closed 2026-11-15**: V02 v3 pipeline proved SH01 route works at 0 credits via ffmpeg sandbox_exec; no regen risk.
4. ~~Warm Clay offer badges + Vietnamese on-image copy = post-prod typography pass~~ — **closed 2026-11-15**: ffmpeg + libass + Anton/Noto pipeline proven on V02 v3. Same pipeline carries V01, V03, SH01 at 0 credits. Rules codified in [../../../agency/templates/motion-text-spec.md](../../../agency/templates/motion-text-spec.md).
5. STYLE-D (In Hand) intentionally parked per concept §5.

**New rules carried forward to V01/V03/SH01 (locked in from V02 v3 passes, kept in `agency/templates/motion-text-spec.md`):**
- Vietnamese uppercase multi-line → leading ≥ 1.3 × cap (dấu nặng + dấu mũ clearance).
- Sub lines 110–140 px on EVERY context including card body — no card-body exception.
- Horizontal safe margin x0 ≥ 72, x1 ≤ 1368. Top UI y < 360.
- Bbox QA measured on full 1440×2560 including diacritic extents.
- `-v2`, `-v3`, `-v4`, … QA artefacts and rendered MP4s NEVER overwrite prior rounds.
- Audio target: TikTok/IG = −14 LUFS integrated / −1.5 dBTP ceiling, achieved via gain + true-peak limiter (not just dynamic loudnorm). Prior "physical ceiling" conclusion from v3a/V01/SH01 was wrong — a brick-wall limiter at −1.5 dBTP reaches the target with acceptable transient compression on ambient material.
- v4-round spec additions (every-frame clearance during motion, hold-from-fully-in, CTA 120 px high-contrast) were **reverted** on 2026-11-17 along with v4 itself.

## Goal
2-week launch campaign driving awareness + first 1,000 orders on TikTok Shop for THALO Rice Glow Serum. Audience: oily/combination-skin women 22–32 in HCMC & Hanoi. Launch offer 329.000đ (first 14 days).

## Budget
- **Higgsfield credits:** 300 total.
- Rule: stop and ask CEO if <20% (60 credits) remains.
- **Current spend/remaining:** see `## Status` → Credits block at top of file (single source of truth).

## Inputs already locked
- Brief: [../brief/brief.md](../brief/brief.md)
- Brand: [../context/brand.md](../context/brand.md) — palette, voice, banned words.
- Product: [../context/product.md](../context/product.md) — claims, price, launch offer.
- Packaging: [../context/packaging-spec.md](../context/packaging-spec.md) — bottle + 3-line label.
- Product references: [../context/product-images/README.md](../context/product-images/README.md). **REF01 = `730d6cbd-4daa-4fd1-9850-8f734ba5151d`** — primary, used in every visual via `medias[].value` role `image_references`.
- Style inspiration: [../../../agency/templates/ad-styles/style-guide.md](../../../agency/templates/ad-styles/style-guide.md) — STYLE-A..D.

## Deliverables (from brief)
| # | Path | Owner |
|---|---|---|
| 1 | research/market-research.md | market-researcher |
| 2 | strategy/campaign-concept.md | creative-strategist |
| 3 | strategy/shot-list.md | creative-strategist |
| 4 | `assets/images/thalo-S01..S03-feed-4x5.png` + `thalo-S04..S06-story-9x16.png` | content-producer |
| 5 | `assets/video/thalo-V01..V03-reel-9x16.mp4` (8–15 s) | content-producer |
| 6 | `assets/shorts/thalo-SH01-reel-9x16.mp4` (9:16 short, Vietnamese on-screen text) | content-producer |
| 7 | ops/captions.md (2 hooks per video), ops/calendar.md (14 days), ops/virality.md | marketing-ops |
| 8 | ops/client-report.pptx | marketing-ops |

## Workflow (with STOP gates per CLAUDE.md)

| Step | Action | Agent / Skill | Gate |
|---|---|---|---|
| 1 | Write this task plan | CEO (me) | **STOP** — wait for "ok" |
| 2 | Market research | market-researcher → `research/market-research.md` | **STOP** — summary for CEO, wait "ok" |
| 3a | Campaign concept (big idea, tagline, 3 angles) | creative-strategist → `strategy/campaign-concept.md` | **STOP** — wait "approved" |
| 3b | Shot list (6 statics + 3 videos + 1 short, one HF prompt per shot) | creative-strategist → `strategy/shot-list.md` | **STOP** — wait "approved" |
| 4a | **1 test static** first | content-producer | **STOP** — wait "go" |
| 4b | Remaining 5 statics + download + log | content-producer | — |
| 5a | **1 test video** first | content-producer | **STOP** — wait "go" |
| 5b | Remaining 2 videos + SH01 short | content-producer | — |
| 6 | Virality check → FIX notes (max 1 round) → send back to content-producer | marketing-ops → `ops/virality.md` | — |
| 7 | Captions + 14-day calendar | marketing-ops → `ops/captions.md`, `ops/calendar.md` | — |
| 8 | Client report PPTX | marketing-ops → `ops/client-report.pptx` | — |
| 9 | QA every deliverable vs brief + quality-bar (max 2 rounds per item) | CEO | — |
| 10 | Final summary: paths, credits used, open issues | CEO | — |

## House rules in force (per CLAUDE.md + quality-bar.md)
- Product in every visual = REF01. No new bottle, no label rewrite.
- Cosmetic claims only — no `trị / chữa / thần thánh / trắng bật tông / cam kết 100% / số 1 Việt Nam`.
- Launch offer 329.000đ must appear in at least 3 posts.
- No third-party brand names or logos in any creative.
- File names per [../../../agency/sop/file-naming.md](../../../agency/sop/file-naming.md): `<client>-<type><nn>-<placement>-<ratio>.<ext>`. Examples: `thalo-S01-feed-4x5.png`, `thalo-V01-reel-9x16.mp4`, `thalo-SH01-reel-9x16.mp4`. Versioning: `-v2`, `-v3`. Never overwrite a kept file.
- SH01 lives in `assets/shorts/`, not `assets/video/`.
- Only content-producer generates media.

## Credit budget plan (preliminary, will tighten before each hand-off)
| Block | Est. credits | Notes |
|---|---|---|
| System test (spent) | 2 | done |
| 6 statics (test + batch) | ~15–25 | nano_banana_pro 4:5 2k ≈ 2 cr/image |
| 3 videos (test + 2 more) | ~150–210 | video is the main cost |
| 1 short (reframe/edit) | ~30–60 | SH01 derived from best V |
| Refinement reserve | ~30 | FIX rounds |
| **Total ceiling** | **≤ 298** | hard stop at 60 remaining |

## Scope decisions (locked by CEO 2026-11-15)
- **File naming:** per `agency/sop/file-naming.md`. SH01 → `assets/shorts/`.
- **Research market:** Vietnam only, HCMC + Hanoi focus.
- **Research source priority:** TikTok · Shopee/TikTok Shop listings + reviews · Vietnamese skincare groups/forums · YouTube reviews.
- **Competitor set:** 4–6 representative, mix of VN niacinamide/rice serums + K-beauty + J-beauty available on Shopee/TTS, price band 250.000–600.000đ.
- **Competitor names:** appear ONLY in `research/market-research.md`. Never in concept, shot list, or caption.

---
See **Status** section at top of file for current next action.
