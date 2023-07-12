---
created: 2023-07-11
name: "Emma"
type: "npc"
faction: "Unaffiliated"
group: ""
race: ""
gender: ""
class: ""
tags:
 - npc
---
## Description


## Quests
```dataview
TASK FROM "DND - Drakkenheim/Quests" WHERE !completed AND contains(outlinks, [[Emma]]) 
```

#### Session Appearances
```dataview
LIST FROM [[Emma]] WHERE file.folder = "DND - Drakkenheim/Sessions"
```



