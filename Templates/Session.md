---
date: <% tp.file.creation_date("YYYY-MM-DD") %>
type: session
campaign: <% tp.user.getThisCampaignName(tp) %>
location: []
tags:
 - session
---
<% tp.file.rename("Session " + tp.user.getThisSessionNum(tp)) %>

## Summary

## Event Log

<% tp.file.cursor() %>


