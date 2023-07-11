---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
name: ""
type: npc
faction: ""
race: ""
gender: ""
class: ""
tags:
 - npc
---
## Description

<%*

const hasTitle = !tp.file.title.startsWith("NewNPC");

let title;

if (!hasTitle) {

    title = await tp.system.prompt("Enter NPC Name");

    await tp.file.rename(title);

} else {

    title = tp.file.title;

}

_%>


## Quests
```dataview
TASK FROM "<% tp.user.getThisCampaignDir(tp) %>/Quests" WHERE !completed AND contains(outlinks, [[<% tp.file.title %>]]) 
```

#### Session Appearances
```dataview
LIST FROM [[<% tp.file.title %>]] WHERE file.folder = "<% tp.user.getThisCampaignDir %>/Sessions"
```