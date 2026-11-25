---
name: hf-video-ads
description: Generate 9:16 product video ads (8-15 s) through Higgsfield MCP from approved stills and the storyboard, with one test video before the rest. Use after static ads are approved.
---
# Video ads with Higgsfield

## Inputs
- clients/<client>/strategy/shot-list.md (rows V..) and campaign-concept.md (storyboards)
- Approved statics in clients/<client>/assets/images/ and their job IDs in production-log.md
- clients/<client>/context/product-images/README.md
- Credit budget from the CEO

## Steps
1. Call balance. Stop if below budget.
2. Call models_explore (action: recommend) with
   "9:16 skincare product ad, image-to-video, 8-15 s, product reference".
   Check the model's duration range and ratios with action: get. Log the choice.
3. For V01: start image = the approved static of the same angle;
   add REF01 as an extra reference if the model allows several references.
   Prompt = the storyboard beats with seconds + "keep bottle and label identical".
4. Generate V01 only. Wait. Download to assets/video/<file name>. Log it.
5. STOP and report to the CEO. Wait for "go".
6. After go: V02, V03 the same way. Download and log each.

## Quality check (per video)
- Hook in the first second, product visible by 3 s
- Label does not warp or change during motion
- No extra fingers or faces
Fail: regenerate only that video, max 2 times, log the reason.

## Never
- Exceed the budget
- Generate all videos before the test is approved