---
sidebar_position: 10
---

# Responsive 

<h2>We use out of the box tailwind classes to handle responsiveness 📱🖥️</h2>
But some times is also needed programatically, so we created a hook for this purpose, quite easy to use.

Possible values: <b>xs, sm, md, lg, xl, 2xl</b>

```tsx
  const { breakpoint } = useBreakpoint()
  console.log(breakpoint)
  // xl
```


:::info
If you need to change the breakpoints values, modify `core/utils/breakpoints.ts`.
:::

