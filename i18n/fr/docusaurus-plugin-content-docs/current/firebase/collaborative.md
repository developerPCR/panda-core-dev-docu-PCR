---
sidebar_position: 3
---

# Collaborative 

In case you can create an app which has collaborative functionality, you can check hideous pages, where everyone can add ideas 
and see who is connected. this is working with live data, coming from firebase.

:::tip
Check `pages/hideouts.tsx` that has the list of hideouts and `pages/hideout/[id].tsx` which is the collaborative space.

Be aware we use the document id to identify the hideout, hideout ID is the magic link. example: `yourdomain.com/hideout/hideoutID0001`, you can add 
more restrictions if you want, when you build your own collaborative page.
:::

