---
sidebar_position: 6
---

#  BPEmptyState

### Import

```tsx
import BPEmptyState from '@components/molecules/BPEmptyState'
```

### Usage 

```tsx
<BPEmptyState title="You have no orders so far">
    You can buy a product from home page and come back here.
</BPEmptyState>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpemptystate--basic" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| icon | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| magic | false | true \|  false 
| title | null | string
| titleClass | null | string



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpemptystate--basic