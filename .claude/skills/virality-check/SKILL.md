---
name: virality-check
description: Score each approved video (15 s or shorter) with Higgsfield virality_predictor and decide PUBLISH, FIX or SKIP. Use before videos go on the calendar.
---
# Virality check

## Steps
1. For each video in clients/<client>/assets/video/ and assets/shorts/ that is 15 s or shorter,
   call virality_predictor.
2. Write clients/<client>/ops/virality.md:
   File | Overall score | Hook score | Where attention drops | Decision | Note
3. Decision rules:
   - PUBLISH: no major drop in the first 3 s
   - FIX: weak hook or early drop -> one concrete fix for the producer
     (example: "open on the serum drop, not the bottle")
   - SKIP: product unclear or label warped
4. Send FIX notes to the CEO, who passes them to the content-producer.

## Never
- Send videos longer than 15 s to the predictor