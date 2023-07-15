
## Active Quests

```dataview
TABLE WITHOUT ID
file.link AS "Quest", "[[" + location + "]]" as "Location", complete_by AS "Time Remaining", "[[" + faction + "]]" as "Faction", initator AS "Initiator"
FROM "DND - Drakkenheim"
WHERE type = "quest" AND !completed
SORT file.name ASC
```

## Major Locations

```dataview
LIST
FROM "DND - Drakkenheim/Locations"
WHERE within = "None"
```

## Rumors

- The Noble Man, in his noble home, Withered, old, and all alone. His stare can chill you to the bone, a pale man on a pale throne.
- The Trolls of King's Gate will let you pass for a price, but it will cost you an arm and a leg.
- I heard there are delerium crystals the size of a horse within the crater. Imagine how much they'd be worth!

## Sessions
```dataview
LIST
FROM "DND - Drakkenheim/Sessions"
SORT file.name ASC
```
`button-add-session`
