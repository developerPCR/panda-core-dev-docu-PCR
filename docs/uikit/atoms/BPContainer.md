---
sidebar_position: 7
---

# BPContainer

### Import

```tsx
import BPContainer from '@components/atoms/BPContainer'
```

### Usage 

```tsx
<BPContainer>
    <p>Container (default max 4xl)</p>
    <p>(Dotted border is just to show the sizes)</p>
    <p>
        You can use this when you dont want you container to grow infinitely.
    </p>
</BPContainer>

```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpcontainer--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| outlined | false | true \|   false 
| magic | false | true \|   false 




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpcontainer--basic