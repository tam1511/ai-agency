---
name: shot-list-writer
description: Convert an approved campaign concept into a production-ready shot list with one Higgsfield prompt per shot. Use after the campaign concept, before any generation.
---
# Shot list writer

## Inputs
- clients/<client>/strategy/campaign-concept.md
- clients/<client>/context/packaging-spec.md
- clients/<client>/context/product-images/README.md (reference IDs)
- agency/templates/ad-styles/style-guide.md
- agency/sop/file-naming.md

## Steps
Write clients/<client>/strategy/shot-list.md as one table:

| Shot ID | Format | Placement | Ratio | Duration | Angle | Style | Reference | Prompt | On-image text (VI) | File name |

Rules for rows:
- Statics: S01-S03 feed 4:5, S04-S06 story 9:16 (one per angle per placement)
- Videos: V01-V03, 9:16, 8-15 s, one per angle; Reference = the approved
  static of the same angle (filled later) or REF01
- Short: SH01, 9:16, cut from the best video
- Prompt (English): product ("the THALO serum bottle from the reference"),
  scene, light, camera, mood, style recipe from style-guide.md, and the line
  "keep bottle, label text and colours identical to the reference"
- Video prompts: describe the motion beat by beat with seconds, matching the storyboard
- On-image text: Vietnamese, max 7 words, or "none"
- File name per file-naming.md

## Quality check
- Every shot has a reference ID
- No prompt asks for extra text on the bottle

## Never
- Generate media