---
name: task-board
description: Check the Notion "Agency Tasks" board, pick To-do tasks by priority, route each to the right agent per CLAUDE.md, and update status and output. Use when asked to check the task board.
---
# Task board
1. Read all tasks with Status = To-do in the Notion database "Agency Tasks".
2. Sort by Priority (High, Medium, Low). Take at most 3 tasks per run.
3. For each: set Status = In progress, route per CLAUDE.md routing rules
   (credits needed -> content-producer, with a budget of max 40 credits per task).
4. When finished: Status = Done, Output = file paths, one-line note.
5. If a task is unclear or needs more than 40 credits: leave it To-do and
   add a comment in Notion asking the owner.