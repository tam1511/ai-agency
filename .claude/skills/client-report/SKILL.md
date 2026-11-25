---
name: client-report
description: Build the client-facing campaign report as a PPTX using the document-skills pptx skill. Use as the last step of a campaign.
---
# Client report

## Inputs
Everything in clients/<client>/ (research, strategy, assets, ops, production-log.md)

## Steps
1. Use the document-skills:pptx skill to build clients/<client>/ops/client-report.pptx,
   brand colours from brand.md, 10-12 slides:
   1 Title (brand, campaign name, date)
   2 Goal and audience
   3 Key research insights (3)
   4 Big idea + tagline
   5 Three angles
   6 Static ads (thumbnails of the kept images)
   7 Video ads (one frame each + file names)
   8 Virality check results
   9 14-day calendar overview
   10 Production summary: files made, credits used, rejected shots and why
   11 What to test first (A/B hooks) and next steps
2. Insert real images from assets/ - never placeholders.
3. Also write ops/client-report.md with the same content as text.

## Never
- Invent performance numbers (the campaign has not run yet)