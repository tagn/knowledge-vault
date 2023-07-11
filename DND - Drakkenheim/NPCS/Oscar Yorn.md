---
created: 2023-07-11
type: npc
faction: ""
race: ""
gender: ""
class: ""
tags:
 - npc
---
## Description

## Quests
```dataview
TASK FROM "DND - Drakkenheim/Quests" WHERE !completed AND contains(outlinks, [[NewNPC]]) 
```

#### Session Appearances
```dataview
LIST FROM [[NewNPC]] WHERE file.folder = "function getThisCampaignDir (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[0]
    return thisCampaignDir;
}/Sessions"
```