---
created: 2023-07-11
type: npc
faction: Amethyst Academy
race: ""
gender: Female
class: ""
tags:
 - npc
---

## Quests
```dataview
TASK FROM "DND - Drakkenheim/Quests" WHERE !completed AND contains(outlinks, [[River]]) 
```

#### Session Appearances
```dataview
LIST FROM [[River]] WHERE file.folder = "DND - Drakkenheim/Sessions"
```