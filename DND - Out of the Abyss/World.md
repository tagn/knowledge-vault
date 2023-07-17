## Active Quests

```dataview
TABLE WITHOUT ID
file.link AS "Quest", "[[" + location + "]]" as "Location", initator AS "Initiator"
FROM "DND - Out of the Abyss"
WHERE type = "quest" AND !completed
SORT file.name ASC
```

## Major Locations

```dataview
LIST
FROM "DND - Out of the Abyss/Locations"
WHERE within = "None"
```

## Sessions
```dataview
LIST
FROM "DND - Out of the Abyss/Sessions"
SORT file.name ASC
```