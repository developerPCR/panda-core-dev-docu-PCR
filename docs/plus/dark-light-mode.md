---
sidebar_position: 11
---

# Dark/light mode 

We have a nice implementation to display your website either in a light or dark theme 🔆.

Combination of tailwind, localstorage, user preference.

In case you need to know it programatically, we have also a hook for this:
```tsx
  const { theme } = useThem()
  console.log(theme)
  // dark 
```


:::tip
if you are building components, be sure you style them by using the correct `dark:` preffix for tailwind classes.
:::

