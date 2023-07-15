---
type: session
created: <% tp.file.creation_date("YYYY-MM-DD") %>
campaign: <% tp.user.getThisCampaignName(tp) %>
location: []
tags:
 - session
---
<% tp.file.rename("Session " + tp.user.getThisSessionNum(tp)) %>

## Summary

## Event Log

<% tp.file.cursor() %>


