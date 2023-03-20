---
sidebar_position: 12
---

# UI components

We made a common list of components that you can use to achieve your needs. All dark/light mode compatible.


## Button 

Has multiple props that can be used.

```tsx
<Button
  className="w-auto"
  isSpecial={true}
  isSmall={false}
  isInverted={false}
  onClick={method}
  icon={<Icon />}
  role=""
  label=""
  loading
>
My Text
</Button>

```

## Accordion 


```tsx
<Accordion
  options={[{title:'', content:''}]}
/>

```

<img src={'/ss/accordion.png'} style={{width: '100%'}} />

## Panel 


```tsx
<Panel
  title="Panel Title"
  description="Panel Description"
  hints={
    <span className="justify-self-start">Some hints......</span>
  }
  footer={
    <>
      <Button className="w-32">Cancel</Button>
      <Button isInverted={true} className="w-32">
        Save
      </Button>
    </>
  }
></Panel>

```

<img src={'/ss/panels.png'} style={{width: '100%'}} />




:::tip
if you are building components, be sure you style them by using the correct `dark:` preffix for tailwind classes.
:::
