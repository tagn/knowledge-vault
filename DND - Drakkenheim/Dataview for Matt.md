```dataview
TABLE WITHOUT ID
file.link AS "Session", date, created
FROM "DND - Drakkenheim"
WHERE type = "session" AND !completed
SORT file.name ASC
```