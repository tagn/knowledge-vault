<%* const title = await tp.system.prompt("Enter NPC Name"); -%>
<%* await tp.file.rename(title) -%>
---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
name: "<%* tR += title %>"
type: "npc"
faction: "<% tp.system.suggester(["Hooded Lanterns", "Amethyst Academy", "Church of the Falling Fire", "Queen's Men"], ["Hooded Lanterns", "Amethyst Academy", "Church of the Falling Fire", "Queen's Men"]) %>"
race: ""
gender: "<% tp.system.prompt("Gender") %>"
class: ""
tags:
 - npc
---
## Description


## Quests
```dataview
TASK FROM "<% tp.user.getThisCampaignDir(tp) %>/Quests" WHERE !completed AND contains(outlinks, [[<%* tR += title %>]]) 
```

#### Session Appearances
```dataview
LIST FROM [[<%* tR += title %>]] WHERE file.folder = "<% tp.user.getThisCampaignDir(tp) %>/Sessions"
```



