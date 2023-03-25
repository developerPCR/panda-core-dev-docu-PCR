---
sidebar_position: 4
---

# Live data 

Working with live data is quite simple on this project, we are listening firebase documents.

Example of using live data:

```tsx
  const { subscribeCollection} = useQuery()

  subscribeCollection<Hideout>(
    (data: Hideout[]) => {
      // Here whenever are changes, this will be triggered.
    },
    // conditions
    where('owner', '==', uid),
    'fe-document',
  )
```

:::tip
This `useQuery` hook is something made by us, so will not be documentation on this one other than here.
:::

