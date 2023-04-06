---
sidebar_position: 5
---

# Magic links 

Magic lins 🪄 are links that can be shared with other people. for instance, if you are collaborating with others in a Kanban board, to invite others
you will need am static link, this can be made very easily with NextJS in our base.

:::tip
you can create a page such us `./pages/boards/[id].tsx` where the `id`  id the firebase document id. this can be accessed by using
`yourdomain.com/boards/id_111222333999`.
:::

:::caution
If the link shared must be private, you will need to add the logic within `[id].tsx` file. 

e.g. take the route id param, also the user authenticated id and check if 
the invitation allows the user to access it. (when sharing allows the user to add emails, this is the way many apps do)
:::
