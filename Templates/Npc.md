---
created: <% tp.date.now("YYYY-MM-DD") %>
type: npc
faction: ""
race: ""
gender: ""
class: ""
tags:
 - npc
---
## Description
relationship:
organization: 

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


#### Appearances
```dataview

```