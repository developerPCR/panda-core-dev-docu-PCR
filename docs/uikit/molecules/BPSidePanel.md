---
sidebar_position: 11
---

#  BPSidePanel

### Import

```tsx
import BPSidePanel from '@components/molecules/BPSidePanel'
```

### Usage 

```tsx
  <BPButton
    onClick={() => {
      setIsOpen(true)
    }}
    outline={props.outline}
    magic={props.magic}
    variant={props.variant}
      >
    Open
    </BPButton>
    <BPSidePanel
      closeModal={() => setIsOpen(false)}
      isOpen={isOpen}
      title="My Side Panel"
        {...props}
      >
        You can use all our types.
</BPSidePanel>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpsidepanel--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| title | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| closeText | "close" | string
| closeModal | () => {} | () => void
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outline | false | true \|  false 
| magic | false | true \|  false 
| isOpen | false | true \|  false





Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpsidepanel--basic