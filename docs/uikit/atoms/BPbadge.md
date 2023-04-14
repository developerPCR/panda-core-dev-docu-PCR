---
sidebar_position: 3
---

# BPBadge

### Import

```tsx
import BPBadge from '@components/atoms/BPBadge'

```

### Usage 

```tsx
<BPBadge>Default Badge</BPBadge>
<BPBadge size="xs">Size xs</BPBadge>
<BPBadge size="sm">Size sm</BPBadge>
<BPBadge size="lg">Size lg</BPBadge>
<BPBadge size="xl">Size xl</BPBadge>
<BPBadge size="xl">Size xl long long text</BPBadge>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpbadge--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| url | null | ReactElement<any, string \| JSXElementConstructor<any\>\> | 
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 
| hoverable | false | true \|  false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpbadge--basic