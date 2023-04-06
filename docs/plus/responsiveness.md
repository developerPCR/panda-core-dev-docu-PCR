---
sidebar_position: 10
---

# Responsive 

We use out of the box tailwind classes to handle responsiveness 📱🖥️, but some times is also needed programatically, so we created a hook for this purpose, quite easy to use.

Possible values: xs, sm, md, lg, xl, 2xl

```tsx
  const { breakpoint } = useBreakpoint()
  console.log(breakpoint)
  // xl
```


:::info
If you need to change the breakpoints values, modify `core/utils/breakpoints.ts`.
:::

