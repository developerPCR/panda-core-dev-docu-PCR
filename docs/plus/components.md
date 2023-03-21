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



## SidePanel 


```tsx
<SidePanel
  isOpen={true}
  closeModal={method}
  side={"right"}
  title="Title"
>
  Here is your content
</SidePanel>

```
<p align="center">
  <img src={'/ss/sidePanel.png'} style={{width: '50%'}} />
</p>



## AlertBanner 
You can use it over your nav

```tsx
export default function NavBar() {
  return (
    <>
      <AlertBanner />
      <nav></nav>
    </>
  )
}

```

<img src={'/ss/alertBanner.png'} style={{width: '100%'}} />


## CodeExample 

```tsx
 const inner = `
  export default function BlurExample() {
    const [blur, setBlur] = useState(0)
    return ( 
      <Image
          src="/pandas/blue-panda-key.webp"
          alt="blue panda"
          style={{ filter: 'blur(${blur}px)' }}
          width={190}
          height={48}
        />
    )
  }
  `
  <CodeExample inner={inner} />
```
<p align="center">
  <img src={'/ss/codeExample.png'} style={{width: '60%', textAlign: 'center'}} />
</p>


## DropDown 

```tsx
  <Dropdown 
  options={
    [
      {  label: "Option 1",  onClick: () => method }, 
      ...
      ]
    } 
    title="Option 1" />
```
<p align="center">
<img src={'/ss/dropdown.png'} style={{width: '30%'}} />
</p>


## LoadingModal 

```tsx
  <LoadingModal loading={true} />
```

<p align="center">
<img src={'/ss/generalLoading.png'} style={{width: '30%'}} />
</p>



## Modal 

```tsx
  <Modal isOpen={true} closeModal={method} title="Title">
    <Container />
  </Modal>
```

<p align="center">
<img src={'/ss/simpleModal.png'} style={{width: '50%'}} />
</p>


## ScrollButon 

```tsx
  <ScrollButton />
```

<p align="center">
<img src={'/ss/scrollUpBtn.png'} style={{width: '10%'}} />
</p>



## SimpleRadioGroup 

```tsx
  <SimpleRadioGroup
      options={[{title: 'Option 1', content: 'Description 1'}]}
      selected={selectedRadio}
      onSelect={method}
    />
```

<p align="center">
<img src={'/ss/radioGroup.png'} style={{width: '100%'}} />
</p>


## SimpleTabs 

```tsx
  const tabs = {
    Tab1: "Your tab 1 content",
    Tab2: "Your tab 2 content",
    Tab3: "Your tab 3 content",
  }
  <SimpleTabs tabs={tabs} />
```

<p align="center">
<img src={'/ss/tabs.png'} style={{width: '100%'}} />
</p>




:::tip
if you are building components, be sure you style them by using the correct `dark:` preffix for tailwind classes.
:::
