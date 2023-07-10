---
date: "<% tp.file.creation_date() %>"
type: session
campaign: <% tp.user.getThisCampaignName(tp) %>
location(s): []
last_modified: "<% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>"
tags: session
---
<% tp.file.rename("Session " + tp.user.getThisSessionNum(tp)) %>

## Summary

## Event Log




