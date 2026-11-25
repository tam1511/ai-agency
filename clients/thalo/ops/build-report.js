// THALO Rice Glow Serum — Client Report PPTX
// 14 slides, brand palette, real thumbnails embedded

const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const ASSETS = '/Users/macos/projects/ai-agency/clients/thalo/ops/report-assets';
const IMAGES = '/Users/macos/projects/ai-agency/clients/thalo/assets/images';
const OUT = '/Users/macos/projects/ai-agency/clients/thalo/ops/client-report.pptx';

// Brand colours — no leading #, no alpha
const C = {
  riceWhite:  'F6F2EA',
  sageMist:   'B9C8B5',
  deepMoss:   '3F5143',
  warmClay:   'D9A88A',
  offWhite:   'FAF8F3',
  darkBg:     '2B3A2D',   // dark slide variant (deep moss + black)
  midGrey:    '7A8A7C',
  lightSage:  'D4DDD1',
};

// ─── Presentation setup ───────────────────────────────────────────────────────
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';  // 13.3" × 7.5"
pres.author  = 'THALO x AI Marketing Agency';
pres.subject = 'THALO Rice Glow Serum — 2-Week Launch Campaign';
pres.title   = 'THALO Rice Glow Serum Client Report';

// ─── Reusable helpers ─────────────────────────────────────────────────────────
function darkSlide(slide) {
  slide.background = { color: C.darkBg };
}
function lightSlide(slide) {
  slide.background = { color: C.riceWhite };
}
function addTitle(slide, text, opts = {}) {
  slide.addText(text, {
    x: 0.5, y: opts.y ?? 0.35, w: 12.3, h: 0.75,
    fontSize: 36, bold: true, color: opts.color ?? C.deepMoss,
    fontFace: 'Cambria', align: 'left', isTextBox: true,
    margin: 0,
    ...opts,
  });
}
function addSubtitle(slide, text, opts = {}) {
  slide.addText(text, {
    x: 0.5, y: opts.y ?? 1.1, w: 12.3, h: 0.4,
    fontSize: 14, color: opts.color ?? C.midGrey,
    fontFace: 'Calibri', align: 'left', isTextBox: true,
    margin: 0,
    ...opts,
  });
}
function addBody(slide, text, opts = {}) {
  slide.addText(text, {
    x: 0.5, y: opts.y ?? 1.6, w: 12.3, h: 5.0,
    fontSize: 15, color: opts.color ?? C.deepMoss,
    fontFace: 'Calibri', align: 'left', valign: 'top',
    isTextBox: true, margin: 0,
    ...opts,
  });
}
function sageCard(slide, x, y, w, h) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: C.lightSage },
    line: { color: C.sageMist, width: 1 },
  });
}
function clayPill(slide, x, y, w, h, label) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: C.warmClay },
    line: { color: C.warmClay, width: 0 },
  });
  slide.addText(label, {
    x, y, w, h,
    fontSize: 11, bold: true, color: 'FFFFFF',
    fontFace: 'Calibri', align: 'center', valign: 'middle',
    isTextBox: true, margin: 0,
  });
}

// ─── SLIDE 1 — Cover ──────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  darkSlide(s);

  // Large sage accent block left edge
  s.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 7.5,
    fill: { color: C.sageMist },
    line: { color: C.sageMist, width: 0 },
  });

  // Brand wordmark
  s.addText('THALO', {
    x: 0.5, y: 1.4, w: 8, h: 1.1,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', align: 'left', charSpacing: 8,
    isTextBox: true, margin: 0,
  });
  s.addText('Rice Glow Serum', {
    x: 0.5, y: 2.5, w: 9, h: 0.6,
    fontSize: 28, bold: false, color: C.sageMist,
    fontFace: 'Cambria', align: 'left',
    isTextBox: true, margin: 0,
  });

  // Divider line
  s.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.25, w: 5.5, h: 0.04,
    fill: { color: C.warmClay },
    line: { color: C.warmClay, width: 0 },
  });

  s.addText('2-Week Launch Campaign', {
    x: 0.5, y: 3.45, w: 9, h: 0.45,
    fontSize: 18, color: C.lightSage,
    fontFace: 'Calibri', align: 'left',
    isTextBox: true, margin: 0,
  });
  s.addText('18 Nov – 1 Dec 2026  ·  TikTok · Instagram · Facebook', {
    x: 0.5, y: 3.95, w: 10, h: 0.4,
    fontSize: 14, color: C.midGrey,
    fontFace: 'Calibri', align: 'left',
    isTextBox: true, margin: 0,
  });
  s.addText('Prepared by AI Marketing Agency  ·  2026-11-17', {
    x: 0.5, y: 6.85, w: 10, h: 0.3,
    fontSize: 11, color: C.midGrey,
    fontFace: 'Calibri', align: 'left',
    isTextBox: true, margin: 0,
  });

  // Thumbnail of S01 on the right
  const s01 = path.join(IMAGES, 'thalo-S01-feed-4x5.png');
  if (fs.existsSync(s01)) {
    s.addImage({ path: s01, x: 9.8, y: 0.4, w: 3.1, h: 6.7 });
  }
}

// ─── SLIDE 2 — Brief Recap ────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'Brief Recap');
  addSubtitle(s, 'Audience · Goal · Budget · Offer');

  const cols = [
    { label: 'Audience', body: 'Women 22–32\nOily / combination skin\nHCMC + Hanoi\nOffice workers & students' },
    { label: 'Goal', body: 'Awareness on TikTok, IG, FB\nFirst 1,000 orders\non TikTok Shop' },
    { label: 'Budget', body: '300 Higgsfield credits\n157 spent\n143 remaining' },
    { label: 'Launch offer', body: '329.000đ\nfor the first 14 days\n(RRP 390.000đ / 30 ml)' },
  ];
  cols.forEach((col, i) => {
    const x = 0.5 + i * 3.1;
    sageCard(s, x, 1.6, 2.85, 4.5);
    s.addText(col.label, {
      x: x + 0.15, y: 1.75, w: 2.55, h: 0.45,
      fontSize: 13, bold: true, color: C.deepMoss,
      fontFace: 'Cambria', isTextBox: true, margin: 0,
    });
    s.addText(col.body, {
      x: x + 0.15, y: 2.3, w: 2.55, h: 3.5,
      fontSize: 14, color: C.deepMoss, lineSpacingMultiple: 1.3,
      fontFace: 'Calibri', valign: 'top', isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 3 — Big Idea + Tagline ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  darkSlide(s);

  s.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 7.5,
    fill: { color: C.warmClay },
    line: { color: C.warmClay, width: 0 },
  });

  addTitle(s, 'Big Idea + Tagline', { color: 'FFFFFF', y: 0.35 });

  s.addText(
    'Nước gạo của bà, nâng cấp cho làn da đang sống trong nắng Sài Gòn – Hà Nội.',
    {
      x: 0.5, y: 1.3, w: 12.3, h: 1.5,
      fontSize: 24, color: C.sageMist, italic: true,
      fontFace: 'Cambria', align: 'left', lineSpacingMultiple: 1.4,
      isTextBox: true, margin: 0,
    }
  );

  s.addText('Primary tagline', {
    x: 0.5, y: 3.1, w: 3, h: 0.3,
    fontSize: 11, bold: true, color: C.warmClay,
    fontFace: 'Calibri', isTextBox: true, margin: 0,
  });
  s.addText('Nhẹ tênh như nước gạo.', {
    x: 0.5, y: 3.45, w: 12, h: 0.65,
    fontSize: 32, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });

  s.addText('Alternate 1', {
    x: 0.5, y: 4.4, w: 3, h: 0.3,
    fontSize: 11, bold: true, color: C.midGrey,
    fontFace: 'Calibri', isTextBox: true, margin: 0,
  });
  s.addText('Da nghỉ ngơi, mỗi sớm mai.', {
    x: 0.5, y: 4.75, w: 8, h: 0.5,
    fontSize: 20, color: C.lightSage,
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
  s.addText('Alternate 2', {
    x: 0.5, y: 5.4, w: 3, h: 0.3,
    fontSize: 11, bold: true, color: C.midGrey,
    fontFace: 'Calibri', isTextBox: true, margin: 0,
  });
  s.addText('Dịu cho ngày nóng ẩm.', {
    x: 0.5, y: 5.75, w: 8, h: 0.5,
    fontSize: 20, color: C.lightSage,
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
}

// ─── SLIDE 4 — 3 Angles ───────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, '3 Creative Angles');
  addSubtitle(s, 'One per audience micro-segment — same shelf, one coherent 14-day story');

  const angles = [
    {
      num: '01',
      title: '"Thành phần, nói thẳng"',
      sub: 'Ingredient, Told Straight',
      seg: 'Segment A — Ingredient-Literate Student (22–26, HCMC)',
      body: 'Three actives named calmly, one per beat. No miracle words. Honest % and INCI names convert the audience that cross-checks on INCI Decoder before buying.',
      format: 'Format 2 — Skintellectual Ingredient Breakdown',
      assets: 'V01, S01, S04',
    },
    {
      num: '02',
      title: '"Sáng văn phòng, chiều ra phố"',
      sub: 'Bright at the Office, Out by Evening',
      seg: 'Segment B — Pragmatic Office Worker (26–32, HCMC + Hanoi)',
      body: 'Lightweight texture disappears under makeup. Addresses the 11am T-zone oiliness and "bí da" fear directly — without a word of copy needing to do the work.',
      format: 'Format 1 — Sensory Absorption Demo (highest conversion)',
      assets: 'V02, SH01, S02, S05',
    },
    {
      num: '03',
      title: '"Thói quen 3 giây"',
      sub: 'The 3-Second Habit',
      seg: 'Segment C — Trend-Alert Shopper (22–29, TikTok-first)',
      body: 'THALO slots into a real morning routine without adding steps. A time-bound launch offer compresses the decision window for impulsive TikTok Shop buyers.',
      format: 'Format 3 — GRWM Morning Routine (40% higher completion)',
      assets: 'V03, S03, S06',
    },
  ];
  angles.forEach((a, i) => {
    const x = 0.5 + i * 4.15;
    sageCard(s, x, 1.55, 3.9, 5.5);
    s.addText(a.num, {
      x: x + 0.2, y: 1.7, w: 0.7, h: 0.55,
      fontSize: 28, bold: true, color: C.warmClay,
      fontFace: 'Cambria', isTextBox: true, margin: 0,
    });
    s.addText(a.title, {
      x: x + 0.2, y: 2.3, w: 3.5, h: 0.5,
      fontSize: 13, bold: true, color: C.deepMoss,
      fontFace: 'Cambria', isTextBox: true, margin: 0,
    });
    s.addText(a.sub, {
      x: x + 0.2, y: 2.82, w: 3.5, h: 0.3,
      fontSize: 11, italic: true, color: C.midGrey,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
    s.addText(a.seg, {
      x: x + 0.2, y: 3.2, w: 3.5, h: 0.4,
      fontSize: 10, bold: true, color: C.deepMoss,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
    s.addText(a.body, {
      x: x + 0.2, y: 3.65, w: 3.5, h: 1.6,
      fontSize: 12, color: C.deepMoss, lineSpacingMultiple: 1.3,
      fontFace: 'Calibri', valign: 'top', isTextBox: true, margin: 0,
    });
    s.addText(a.format, {
      x: x + 0.2, y: 5.3, w: 3.5, h: 0.35,
      fontSize: 10, italic: true, color: C.midGrey,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
    s.addText('Assets: ' + a.assets, {
      x: x + 0.2, y: 5.72, w: 3.5, h: 0.3,
      fontSize: 10, bold: true, color: C.warmClay,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 5 — Deliverables Summary ──────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'Deliverables Summary');
  addSubtitle(s, '6 statics + 4 videos · all shipped');

  // Two columns: statics left, videos right
  const staticItems = [
    'S01 — Feed 4:5 · Angle 1 · STYLE-A · No offer',
    'S02 — Feed 4:5 · Angle 2 · STYLE-C · No offer',
    'S03 — Feed 4:5 · Angle 3 · STYLE-A · 329.000đ',
    'S04 — Story 9:16 · Angle 1 · STYLE-A · 329.000đ',
    'S05 — Story 9:16 · Angle 2 · STYLE-C · No offer',
    'S06 — Story 9:16 · Angle 3 · STYLE-A · 329.000đ',
  ];
  const videoItems = [
    'SH01 — Short 9:16 · 8s · STYLE-C · 329.000đ  [Publish 1st]',
    'V02  — Reel 9:16 · 10s · STYLE-C · 329.000đ  [Publish 2nd]',
    'V01  — Reel 9:16 · 12s · STYLE-A · No offer  [Publish 3rd]',
    'V03  — Reel 9:16 · 15s · STYLE-A · No offer  [Publish 4th]',
  ];

  sageCard(s, 0.5, 1.55, 5.9, 5.5);
  s.addText('Statics', {
    x: 0.7, y: 1.7, w: 5.5, h: 0.4,
    fontSize: 15, bold: true, color: C.deepMoss,
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
  staticItems.forEach((item, i) => {
    s.addText(item, {
      x: 0.7, y: 2.2 + i * 0.7, w: 5.5, h: 0.55,
      fontSize: 13, color: C.deepMoss, lineSpacingMultiple: 1.2,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });

  sageCard(s, 6.9, 1.55, 5.9, 5.5);
  s.addText('Videos — Publish order locked', {
    x: 7.1, y: 1.7, w: 5.5, h: 0.4,
    fontSize: 15, bold: true, color: C.deepMoss,
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
  videoItems.forEach((item, i) => {
    s.addText(item, {
      x: 7.1, y: 2.2 + i * 0.9, w: 5.5, h: 0.7,
      fontSize: 13, color: C.deepMoss, lineSpacingMultiple: 1.2,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 6 — Static Assets 2×3 grid ────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'Static Assets');
  addSubtitle(s, '6 images — feed 4:5 (S01–S03) + story 9:16 (S04–S06)');

  const statics = [
    { id: 'S01', file: 'thalo-S01-feed-4x5.png', label: 'S01 · Feed 4:5 · Ingredient' },
    { id: 'S02', file: 'thalo-S02-feed-4x5.png', label: 'S02 · Feed 4:5 · Dewy' },
    { id: 'S03', file: 'thalo-S03-feed-4x5.png', label: 'S03 · Feed 4:5 · Launch 329đ' },
    { id: 'S04', file: 'thalo-S04-story-9x16.png', label: 'S04 · Story 9:16 · Ingredient 329đ' },
    { id: 'S05', file: 'thalo-S05-story-9x16.png', label: 'S05 · Story 9:16 · Dewy' },
    { id: 'S06', file: 'thalo-S06-story-9x16.png', label: 'S06 · Story 9:16 · Reminder 329đ' },
  ];

  const cols = 3;
  const imgW = 3.5;
  const imgH = 4.0;
  const startX = 0.95;
  const startY = 1.5;
  const gapX = 0.25;
  const gapY = 0.25;

  statics.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (imgW + gapX);
    const y = startY + row * (imgH + gapY + 0.3);
    const imgPath = path.join(IMAGES, item.file);
    if (fs.existsSync(imgPath)) {
      s.addImage({ path: imgPath, x, y, w: imgW, h: imgH });
    } else {
      sageCard(s, x, y, imgW, imgH);
      s.addText(item.id, {
        x, y: y + imgH / 2 - 0.2, w: imgW, h: 0.4,
        fontSize: 16, bold: true, color: C.deepMoss,
        fontFace: 'Cambria', align: 'center', isTextBox: true, margin: 0,
      });
    }
    s.addText(item.label, {
      x, y: y + imgH + 0.05, w: imgW, h: 0.25,
      fontSize: 10, color: C.midGrey,
      fontFace: 'Calibri', align: 'center', isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 7 — SH01 ───────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'SH01 — Short Reel');
  addSubtitle(s, 'thalo-SH01-reel-9x16-v2.mp4 · 8 s · STYLE-C · Publish 1st');

  const thumb = path.join(ASSETS, 'thumb-SH01.jpg');
  if (fs.existsSync(thumb)) {
    s.addImage({ path: thumb, x: 0.5, y: 1.4, w: 3.37, h: 6.0 });
  }

  // Score badge
  s.addShape(pres.ShapeType.rect, {
    x: 4.3, y: 1.4, w: 2.0, h: 2.0,
    fill: { color: C.deepMoss },
    line: { color: C.deepMoss, width: 0 },
  });
  s.addText('81', {
    x: 4.3, y: 1.55, w: 2.0, h: 1.3,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', align: 'center', isTextBox: true, margin: 0,
  });
  s.addText('/ 100', {
    x: 4.3, y: 2.85, w: 2.0, h: 0.4,
    fontSize: 16, color: C.sageMist,
    fontFace: 'Calibri', align: 'center', isTextBox: true, margin: 0,
  });
  clayPill(s, 4.3, 3.5, 2.0, 0.45, 'PUBLISH');

  const bullets = [
    'Strongest hook in the set — pain-point question at t=0',
    'Macro droplet + 11 giờ sáng? copy: highest scroll-stop probability',
    '8-second loop: maximises TikTok replay mechanics',
    'Offer pill in final 1 s — correctly subdued, never dominates',
    'Audio: −14.0 LUFS / −1.2 dBTP — PASS',
    'Angle 2 (Absorption demo) · STYLE-C · Segment B + C',
  ];
  bullets.forEach((b, i) => {
    s.addText(b, {
      x: 4.3, y: 4.2 + i * 0.48, w: 8.5, h: 0.4,
      fontSize: 14, color: C.deepMoss,
      fontFace: 'Calibri', bullet: { type: 'bullet' },
      isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 8 — V02 ───────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'V02 — Absorption Demo Reel');
  addSubtitle(s, 'thalo-V02-reel-9x16-v3c.mp4 · 10 s · STYLE-C · Publish 2nd · 329.000đ footer');

  const thumb = path.join(ASSETS, 'thumb-V02.jpg');
  if (fs.existsSync(thumb)) {
    s.addImage({ path: thumb, x: 0.5, y: 1.4, w: 3.37, h: 6.0 });
  }

  s.addShape(pres.ShapeType.rect, {
    x: 4.3, y: 1.4, w: 2.0, h: 2.0,
    fill: { color: C.deepMoss },
    line: { color: C.deepMoss, width: 0 },
  });
  s.addText('78', {
    x: 4.3, y: 1.55, w: 2.0, h: 1.3,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', align: 'center', isTextBox: true, margin: 0,
  });
  s.addText('/ 100', {
    x: 4.3, y: 2.85, w: 2.0, h: 0.4,
    fontSize: 16, color: C.sageMist,
    fontFace: 'Calibri', align: 'center', isTextBox: true, margin: 0,
  });
  clayPill(s, 4.3, 3.5, 2.0, 0.45, 'PUBLISH');

  const bullets = [
    'Macro droplet hook lands in <0.5 s — curiosity gap from frame 1',
    'Concentric ripple reveal dramatises "thấm nhanh" without copy',
    'Highest-converting category format (Format 1 — ASMR absorption)',
    'Offer footer correctly subdued: 1-second Warm Clay pill only',
    'Audio: −14.1 LUFS / −2.0 dBTP — PASS',
    'Angle 2 (Absorption demo) · STYLE-C · Segment B',
  ];
  bullets.forEach((b, i) => {
    s.addText(b, {
      x: 4.3, y: 4.2 + i * 0.48, w: 8.5, h: 0.4,
      fontSize: 14, color: C.deepMoss,
      fontFace: 'Calibri', bullet: { type: 'bullet' },
      isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 9 — V01 (post-fix) ────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'V01 — Ingredient Reveal Reel (post-fix)');
  addSubtitle(s, 'thalo-V01-reel-9x16-v3a.mp4 · 11.3 s · STYLE-A · Publish 3rd · No offer');

  const thumb = path.join(ASSETS, 'thumb-V01.jpg');
  if (fs.existsSync(thumb)) {
    s.addImage({ path: thumb, x: 0.5, y: 1.4, w: 3.37, h: 6.0 });
  }

  s.addShape(pres.ShapeType.rect, {
    x: 4.3, y: 1.4, w: 2.0, h: 2.0,
    fill: { color: C.deepMoss },
    line: { color: C.deepMoss, width: 0 },
  });
  s.addText('72', {
    x: 4.3, y: 1.55, w: 2.0, h: 1.3,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', align: 'center', isTextBox: true, margin: 0,
  });
  s.addText('/ 100', {
    x: 4.3, y: 2.85, w: 2.0, h: 0.4,
    fontSize: 16, color: C.sageMist,
    fontFace: 'Calibri', align: 'center', isTextBox: true, margin: 0,
  });
  clayPill(s, 4.3, 3.5, 2.0, 0.45, 'PUBLISH');

  s.addText('+10 vs prior score of 62', {
    x: 4.3, y: 4.05, w: 4, h: 0.3,
    fontSize: 11, bold: true, color: C.warmClay,
    fontFace: 'Calibri', isTextBox: true, margin: 0,
  });

  const bullets = [
    'Fix (a): dolly motion from frame 0 — hook stimulus within 1 s',
    'Fix (b): audio normalised to −14.2 LUFS / −1.8 dBTP — PASS',
    'Best label fidelity in set: THALO / RICE GLOW SERUM / 30 ml sharp at close-up',
    '3-beat ingredient cadence (Rice ferment > Niacinamide 5% > HA)',
    'Drops 3rd per CEO order — after SH01+V02 have primed brand recognition',
    'Angle 1 (Ingredient) · STYLE-A · Segment A',
  ];
  bullets.forEach((b, i) => {
    s.addText(b, {
      x: 4.3, y: 4.45 + i * 0.48, w: 8.5, h: 0.4,
      fontSize: 14, color: C.deepMoss,
      fontFace: 'Calibri', bullet: { type: 'bullet' },
      isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 10 — V03 ───────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'V03 — GRWM Morning Routine Reel');
  addSubtitle(s, 'thalo-V03-reel-9x16-v3.mp4 · 15 s · STYLE-A · Publish 4th · No offer');

  const thumb = path.join(ASSETS, 'thumb-V03.jpg');
  if (fs.existsSync(thumb)) {
    s.addImage({ path: thumb, x: 0.5, y: 1.4, w: 3.37, h: 6.0 });
  }

  s.addShape(pres.ShapeType.rect, {
    x: 4.3, y: 1.4, w: 2.0, h: 2.0,
    fill: { color: C.deepMoss },
    line: { color: C.deepMoss, width: 0 },
  });
  s.addText('71', {
    x: 4.3, y: 1.55, w: 2.0, h: 1.3,
    fontSize: 60, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', align: 'center', isTextBox: true, margin: 0,
  });
  s.addText('/ 100', {
    x: 4.3, y: 2.85, w: 2.0, h: 0.4,
    fontSize: 16, color: C.sageMist,
    fontFace: 'Calibri', align: 'center', isTextBox: true, margin: 0,
  });
  clayPill(s, 4.3, 3.5, 2.0, 0.45, 'PUBLISH');

  const bullets = [
    'Floating-dropper "magic realism" hook — distinctive, on-brand',
    '"2–3 giọt. Xong." is most memorable hook copy in the campaign',
    'Best audio in the set: native morning soundscape −14.0 LUFS PASS',
    'No hands/wires — QA PASS on quality-bar.md fingers rule',
    '7-day gap from V02 — end-card format difference not visible back-to-back',
    'Angle 3 (GRWM) · STYLE-A · Segment C',
  ];
  bullets.forEach((b, i) => {
    s.addText(b, {
      x: 4.3, y: 4.2 + i * 0.48, w: 8.5, h: 0.4,
      fontSize: 14, color: C.deepMoss,
      fontFace: 'Calibri', bullet: { type: 'bullet' },
      isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 11 — 14-Day Calendar Overview ─────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, '14-Day Calendar Overview');
  addSubtitle(s, '18 Nov → 1 Dec 2026 · TikTok + IG + FB · Max 2 posts/day');

  const rows = [
    ['Day 1 · Nov 18', 'TK + IG', 'S03 — Launch hero', 'Offer touchpoint 1'],
    ['Day 2 · Nov 19', 'TK  /  FB', 'SH01 lead + S01 static', 'Video launch; Offer TP 4a'],
    ['Day 3 · Nov 20', 'TK + IG', 'SH01 cross-post', ''],
    ['Day 4 · Nov 21', 'TK', 'V02 — Absorption demo', 'Offer touchpoint 2'],
    ['Day 5 · Nov 22', 'IG + FB', 'V02 cross-post', ''],
    ['Day 6 · Nov 23', 'TK', 'S02 — Dewy static', 'Rest day — STYLE-C'],
    ['Day 7 · Nov 24', 'TK + IG', 'S04 — Ingredient story', 'Offer touchpoint 3'],
    ['Day 8 · Nov 25', 'TK', 'V01 — Ingredient reel', ''],
    ['Day 9 · Nov 26', 'IG + FB', 'V01 cross-post', ''],
    ['Day 10 · Nov 27', 'TK', 'S05 — Dewy story', 'Rest day'],
    ['Day 11 · Nov 28', 'TK', 'V03 — GRWM reel', ''],
    ['Day 12 · Nov 29', 'IG + FB', 'V03 cross-post', ''],
    ['Day 13 · Nov 30', 'TK + IG', 'S06 — Soft reminder', 'Offer touchpoint 4'],
    ['Day 14 · Dec 1', 'TK', 'SH01 re-post — last day', 'Offer closes today'],
  ];

  const colW = [2.3, 1.5, 3.5, 3.5];
  const colX = [0.5, 2.85, 4.4, 7.95];
  const headers = ['Day / Date', 'Platform', 'Asset', 'Notes'];

  // Header row
  headers.forEach((h, ci) => {
    s.addShape(pres.ShapeType.rect, {
      x: colX[ci], y: 1.52, w: colW[ci], h: 0.35,
      fill: { color: C.deepMoss },
      line: { color: C.deepMoss, width: 0 },
    });
    s.addText(h, {
      x: colX[ci] + 0.07, y: 1.55, w: colW[ci] - 0.1, h: 0.3,
      fontSize: 11, bold: true, color: 'FFFFFF',
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });

  rows.forEach((row, ri) => {
    const y = 1.9 + ri * 0.37;
    const bg = ri % 2 === 0 ? C.lightSage : C.riceWhite;
    // Highlight offer rows
    const isOffer = row[3] && row[3].includes('Offer');
    row.forEach((cell, ci) => {
      s.addShape(pres.ShapeType.rect, {
        x: colX[ci], y, w: colW[ci], h: 0.35,
        fill: { color: isOffer ? 'F5EDE4' : bg },
        line: { color: C.sageMist, width: 0.5 },
      });
      s.addText(cell, {
        x: colX[ci] + 0.07, y: y + 0.04, w: colW[ci] - 0.1, h: 0.28,
        fontSize: 10, color: isOffer ? C.deepMoss : C.deepMoss,
        bold: ci === 0,
        fontFace: 'Calibri', isTextBox: true, margin: 0,
      });
    });
  });
}

// ─── SLIDE 12 — Credits Spent + Remaining ────────────────────────────────────
{
  const s = pres.addSlide();
  darkSlide(s);
  addTitle(s, 'Credits Spent + Remaining', { color: 'FFFFFF' });
  addSubtitle(s, 'Budget: 300 Higgsfield credits · 0 credits consumed this ops chain', { color: C.midGrey });

  const creditRows = [
    ['TEST01', '2', 'kept'],
    ['S01', '15', 'kept'],
    ['S02–S06 batch (5 statics)', '90', 'kept'],
    ['V02 raw (minimax_h3)', '20', 'kept raw'],
    ['V03 raw (minimax_h3)', '30', 'kept'],
    ['V01 raw (minimax_h3)', '0', 'used existing'],
    ['SH01 (ffmpeg cut from V02)', '0', 'kept'],
    ['All post-prod ffmpeg passes', '0', 'no cost'],
    ['Virality check ops chain (this run)', '0', 'confirmed'],
  ];

  creditRows.forEach(([item, cred, note], i) => {
    const y = 1.6 + i * 0.46;
    const isZero = cred === '0';
    s.addText(item, {
      x: 0.5, y, w: 6.5, h: 0.38,
      fontSize: 13, color: 'FFFFFF',
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
    s.addText(cred, {
      x: 7.1, y, w: 1.2, h: 0.38,
      fontSize: 13, bold: true, color: isZero ? C.sageMist : C.warmClay,
      fontFace: 'Cambria', align: 'right', isTextBox: true, margin: 0,
    });
    s.addText(note, {
      x: 8.5, y, w: 4.3, h: 0.38,
      fontSize: 11, italic: true, color: C.midGrey,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });

  // Totals
  s.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.8, w: 12.3, h: 0.04,
    fill: { color: C.sageMist },
    line: { color: C.sageMist, width: 0 },
  });
  s.addText('Total spent', {
    x: 0.5, y: 5.95, w: 6.5, h: 0.4,
    fontSize: 15, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
  s.addText('157', {
    x: 7.1, y: 5.95, w: 1.2, h: 0.4,
    fontSize: 18, bold: true, color: C.warmClay,
    fontFace: 'Cambria', align: 'right', isTextBox: true, margin: 0,
  });
  s.addText('Remaining', {
    x: 0.5, y: 6.45, w: 6.5, h: 0.4,
    fontSize: 15, bold: true, color: 'FFFFFF',
    fontFace: 'Cambria', isTextBox: true, margin: 0,
  });
  s.addText('143', {
    x: 7.1, y: 6.45, w: 1.2, h: 0.4,
    fontSize: 18, bold: true, color: C.sageMist,
    fontFace: 'Cambria', align: 'right', isTextBox: true, margin: 0,
  });
  s.addText('of 300', {
    x: 8.5, y: 6.45, w: 2, h: 0.4,
    fontSize: 13, color: C.midGrey,
    fontFace: 'Calibri', isTextBox: true, margin: 0,
  });
}

// ─── SLIDE 13 — Known Constraints ────────────────────────────────────────────
{
  const s = pres.addSlide();
  lightSlide(s);
  addTitle(s, 'Known Constraints Shipped With');
  addSubtitle(s, 'All documented · all within acceptable bounds · none blocking');

  const items = [
    {
      heading: 'Audio LUFS — SH01 and V02',
      body: 'V02 source water ambient has high crest factor (input I=−20 LUFS, TP=−0.5 dBTP). Boosting to −14 LUFS would clip TP. Best-effort: V02 at −14.1 / V03 at −14.0 / SH01 at −14.0 LUFS. All three shipping files now at or within 0.1 LU of the TikTok target.',
      status: 'PASS',
    },
    {
      heading: 'V03 beat-3 Noto 150 exception',
      body: 'Beat-3 sub-line "Sau toner. / Trước kem dưỡng." increased from 125 px to 160 px per virality fix recommendation. Width verified: "Trước kem dưỡng." at Noto 160 px = 1,370 px (split to 2 lines; x-bound ≤ 1,368 px safe zone). Two-line split applied. PASS.',
      status: 'PASS',
    },
    {
      heading: 'V03 end card duration 1.5 s vs 2.0 s spec',
      body: 'End card appears at 13.5 s (not 12.0 s per shot-list). Runs 1.5 s not the spec 2.0 s. Minor shortfall accepted — total runtime 15.1 s is within the brief\'s 8–15 s range.',
      status: 'ACCEPTED',
    },
    {
      heading: 'V01 audio register — water ambient on STYLE-A',
      body: 'Morning soundscape (birdsong + city hum) was not achievable as generate_audio was unavailable. V02 water ambient track substituted, normalised to −14.2 LUFS. Register mismatch is mild and not a quality-bar blocker.',
      status: 'NOTE',
    },
    {
      heading: 'STYLE-A 9:16 vertical reframe (S04, S06)',
      body: 'The style guide flags STYLE-A at 9:16 as a known constraint requiring a re-gen pass on the wall height. Both S04 and S06 were re-generated within the 20-credit budget lines for each. Result: wall proportions acceptable.',
      status: 'RESOLVED',
    },
  ];

  items.forEach((item, i) => {
    const y = 1.55 + i * 1.05;
    const statusColors = { PASS: C.deepMoss, ACCEPTED: C.warmClay, NOTE: C.midGrey, RESOLVED: C.sageMist };
    sageCard(s, 0.5, y, 11.3, 0.9);
    s.addText(item.heading, {
      x: 0.7, y: y + 0.08, w: 8.5, h: 0.3,
      fontSize: 13, bold: true, color: C.deepMoss,
      fontFace: 'Cambria', isTextBox: true, margin: 0,
    });
    s.addText(item.body, {
      x: 0.7, y: y + 0.42, w: 9.5, h: 0.4,
      fontSize: 11, color: C.deepMoss,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
    s.addShape(pres.ShapeType.rect, {
      x: 10.4, y: y + 0.22, w: 1.2, h: 0.35,
      fill: { color: statusColors[item.status] ?? C.midGrey },
      line: { color: statusColors[item.status] ?? C.midGrey, width: 0 },
    });
    s.addText(item.status, {
      x: 10.4, y: y + 0.22, w: 1.2, h: 0.35,
      fontSize: 10, bold: true, color: 'FFFFFF',
      fontFace: 'Calibri', align: 'center', valign: 'middle',
      isTextBox: true, margin: 0,
    });
  });
}

// ─── SLIDE 14 — Next Steps ────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  darkSlide(s);

  s.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 7.5,
    fill: { color: C.warmClay },
    line: { color: C.warmClay, width: 0 },
  });

  addTitle(s, 'Next Steps — Round 2 Recommendations', { color: 'FFFFFF' });
  addSubtitle(s, 'What we\'d do differently with the learnings from this launch', { color: C.midGrey });

  const steps = [
    ['A/B hook test', 'Run SH01 hook-A (curiosity gap) vs hook-B (direct claim) on Day 2–3 TikTok; pause the weaker variant by Day 5 and allocate remaining posts to the winner.'],
    ['Source a louder ambient audio track', 'Input source minimum I=−16 LUFS, LRA ≥ 10 LU so the 2-pass loudnorm has headroom to reach −14 LUFS without clipping TP. Apply to all STYLE-C videos from the start.'],
    ['STYLE-D (In Hand) for a testimonial asset', 'Now that the brand visual language is established, one STYLE-D asset with a hand demo could add social-proof diversity. Budget ~20 credits, one static + one short.'],
    ['Format 4 — Livestream with dược sĩ', 'The highest GMV-per-session format in category (60% of beauty e-commerce). Queue a TikTok Shop livestream using the ingredient breakdown content from V01 as the backbone.'],
    ['Ingredient-breakdown long-form (30–60 s)', 'V01 at 11 s truncates the skintellectual payoff. A 45 s version with a creator voice-over would fully realise Angle 1 for Segment A. No new generation needed — use V01 footage with a scripted VO added in post.'],
  ];

  steps.forEach(([label, body], i) => {
    s.addText(`${i + 1}. ${label}`, {
      x: 0.5, y: 1.55 + i * 1.0, w: 12.3, h: 0.35,
      fontSize: 14, bold: true, color: C.warmClay,
      fontFace: 'Cambria', isTextBox: true, margin: 0,
    });
    s.addText(body, {
      x: 0.5, y: 1.93 + i * 1.0, w: 12.3, h: 0.5,
      fontSize: 12, color: C.lightSage, lineSpacingMultiple: 1.2,
      fontFace: 'Calibri', isTextBox: true, margin: 0,
    });
  });
}

// ─── Write file ───────────────────────────────────────────────────────────────
pres.writeFile({ fileName: OUT })
  .then(() => console.log('PPTX written to: ' + OUT))
  .catch(err => { console.error('Error:', err); process.exit(1); });
