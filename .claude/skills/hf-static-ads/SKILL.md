---
name: hf-static-ads
description: Generate static product ad images (feed 4:5, story 9:16) through Higgsfield MCP from the approved shot list, keeping the product identical to its reference images. Use when strategy/shot-list.md is approved and static ads are needed.
---
# Static ads with Higgsfield

## Inputs
- clients/<client>/strategy/shot-list.md (rows S..)
- clients/<client>/context/product-images/README.md (reference IDs, REF01 primary)
- clients/<client>/context/packaging-spec.md, brand.md
- agency/templates/ad-styles/style-guide.md
- agency/context/quality-bar.md
- Credit budget from the CEO

## Steps
1. Call balance. If balance < budget, stop and report.
2. Load the Higgsfield workflow "product-photoshoot" (get_workflow_instructions)
   and follow it. Use mode ad-creative-pack for the set.
3. Use REF01 (plus REF02-04 when the shot needs that view) as image_references.
4. Generate ONLY the first S row as a test. Wait with jobs_wait.
5. Download with curl to clients/<client>/assets/images/<file name>.
6. Log the row in production-log.md. STOP and report the file path to the CEO.
   Do not continue until the CEO says "go".
7. After go: generate the remaining S rows (batch is fine), same references.
8. Download every result, log every row:
   Shot ID | model | prompt | reference | file | credits | status (kept / rejected + reason)

## Quality check (per image, before keeping)
Run every Visuals item in agency/context/quality-bar.md.
If Vietnamese on-image text has wrong diacritics: regenerate without text
and note "text to be added in design" in the log.
If a check fails: refine only that image, max 2 refinements, log the reason.

## Never
- Exceed the credit budget
- Batch before the test is approved
- Overwrite a kept file (use -v2)