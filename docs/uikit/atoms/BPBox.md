---
sidebar_position: 4
---

# BPBox

### Import

```tsx
import BPBox from '@components/atoms/BPBox'
```

### Usage 

```tsx
<BPBox title="" size="" >
    <p>Box</p>
        <p>
          You can use the box component to wrap other components and give them a
          default padding and border.
        </p>
</BPBox>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpbadge--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| title | " " | ReactElement<any, string \| JSXElementConstructor<any\>\> | 
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’  
| size | md | 'xxs'  \| 'xs' \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 
| hoverable | false | true \|  false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpbadge--basic