---
received: 2023-07-13
type: quest
initiator: Queen of Blades
faction: Queen's Men
location: Shepard's Gate
fc-date:
  year: 1126
  month: 3
  day: 30
fc-end:
  year: 1126
  month: 4
  day: 12
completed: true
reward: ""
---


```dataviewjs
const start_date = FantasyCalendarAPI.getDay(dv.current()["fc-date"])["date"]
const end_date = FantasyCalendarAPI.getDay(dv.current()["fc-end"])["date"]
const start = dv.date(`${start_date["year"]}-${start_date["month"]}-${start_date["day"]}`)
dv.el("b", start)

```

## Journal

- The [[Queen of Blades]] has requested that we deliver a "package" to the gate that the [[Hooded Lanterns]] controls.
- We're told that we have a fortnight to complete this job, otherwise it will be considered a failure.
- She strongly advised [[Keth Darklighter]] not to "fuck her" on this job

