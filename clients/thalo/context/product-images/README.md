# THALO product reference images

Primary reference for all product visuals: REF01.

Every file below has a reusable Higgsfield ID — pass it as `medias[].value` with
role `image_references` on any subsequent generation. Bottle geometry and the
3-line Deep Moss label (THALO / RICE GLOW SERUM / 30 ml) must stay identical
across every downstream asset.

| File | Mô tả | Reference ID | Loại |
|---|---|---|---|
| `thalo-REF01-hero-1x1.png` | Studio packshot, chai đứng chính diện, nền Rice White, ánh sáng sáng từ trái. Ảnh gốc, dùng làm reference chính. | `730d6cbd-4daa-4fd1-9850-8f734ba5151d` | job |
| `thalo-REF01-cutout.png` | Chai REF01 đã xoá nền, PNG trong suốt. Dùng để ghép vào mọi nền tuỳ ý. | `376711e8-4b0f-45da-8cd2-78c7b3f3bedc` | job |
| `thalo-REF02-angle-1x1.png` | Chai nghiêng ~35° (v1), cùng nền Rice White, nhãn còn đọc được. | `2300c6af-51ca-4585-87fa-77f300d07e30` | job |
| `thalo-REF02-angle-1x1-v2.png` | Refine REF02, nhấn mạnh xoay 3/4 quanh trục dọc rõ hơn. | `130d59ba-d09e-41ff-9bc0-d76c882f8720` | job |
| `thalo-REF03-box-1x1.png` | Chai đứng cạnh hộp giấy Rice White (hộp có cùng 3 dòng chữ), mặt đá be. | `1077e6cf-2458-445e-b383-54e63e7cf415` | job |
| `thalo-REF04-texture-1x1.png` | Macro ống nhỏ giọt nhỏ một giọt serum, chai mờ phía sau, hạt gạo trên linen. | `be402b3e-7213-4d14-b34a-b189c7d8e606` | job |

Model: `nano_banana_pro` (ngoại trừ REF01-cutout dùng `image_background_remover`).
Aspect ratio: `1:1`, resolution `2k` cho mọi ảnh generation.
Visual QA: chưa inspect pixel.

## Prompt gốc REF01

```
[SUBJECT]
Hero shot of a 30 ml cylindrical glass dropper serum bottle, approximately 9.5 cm tall including the dropper and 3.2 cm wide. The glass is frosted with a pale sage-green tint (hex #B9C8B5), slightly translucent, with clear colorless serum inside filling the bottle to about 85 percent of its height. The cap is a matte white rubber dropper bulb on a slim matte white collar, with a clear glass pipette visible inside through the frosted glass. The label is printed directly on the front of the glass, centered, in Deep Moss ink (hex #3F5143), and contains exactly three lines of text and nothing else:
Line 1: THALO — thin wide-spaced sans-serif, all caps, largest
Line 2: RICE GLOW SERUM — small caps, clearly smaller than line 1
Line 3: 30 ml — smallest, at the bottom
No other text, no barcode, no icons, no extra logos, no decorative marks anywhere on the bottle or cap. Front of the bottle only, no back-of-bottle text visible.

[COMPOSITION]
Straight front-on view, bottle standing upright, perfectly vertical, and centered in the square 1:1 frame. Even generous negative space on all four sides, airy and uncluttered. Rule-of-thirds vertical axis aligned with the bottle's center.

[LIGHTING]
Large softbox diffusion from camera-left at 45 degrees, mimicking soft morning window light. Color temperature 5000K daylight neutral. Soft falloff with smooth gradient transition across the bottle. Gentle bounced fill from camera-right. Soft contact shadow pooled directly under the base of the bottle only, no shadow cast onto the backdrop.

[LENS & CAMERA]
Shot on 85mm portrait lens, aperture f/5.6, medium depth of field with the full bottle tack-sharp in focus from cap to base, label letters crisp and fully legible.

[MATERIALS & TEXTURE]
Frosted sage-green glass with tactile matte surface finish, slightly translucent so the clear serum inside is visible as a soft pale shape through the glass. Matte white rubber bulb and matte white collar with subtle micro-surface texture, no glossy rendered sheen. Deep Moss label ink is sharp, clean, print-quality, unwarped and perfectly horizontal.

[COLOR PALETTE]
Dominant tones: Rice White #F6F2EA seamless paper backdrop filling the entire frame, Sage Mist #B9C8B5 frosted bottle glass, Deep Moss #3F5143 label text. Warm neutral, low-contrast palette. Never neon, never oversaturated.

[STYLE REFERENCE]
Clean minimal product still life with geometric color blocking, soft natural morning window light, airy negative space, calm Scandinavian commercial aesthetic. Commercial product photography, magazine editorial quality.

[BRAND INTEGRATION]
Rice White backdrop, Sage Mist and Deep Moss as the only product tones. Brand mood: calm, warm, honest, never glossy, never neon.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade, magazine-cover quality, ultra-realistic textures and materials, no AI artifacts.

[AVOID]
no AI artifacts, no warped or smeared text, no fake words baked into the image, no plastic look, no waxy surface, no cartoonish rendering, no extra fingers, no extra limbs, no melted geometry, no doubled subjects, no oversaturated HDR, no HDR halos, no oversharpened look, no flat fluorescent lighting, no harsh on-camera flash, no generic stock photography poses, no cliche compositions, no random unrelated brand logos, no watermarks, no signatures, no AI sheen, no doll-like rendering, no airbrush look, no flat solid color bands, no empty rectangular areas, no dull gradient zones that look out of place from the rest of the scene, no warped product label text, no garbled letters, no fake brand names, no melted typography, no doubled labels, no fictional logos, no second bottle, no box in frame, no droplets, no splash.

resolution: 2k
```
