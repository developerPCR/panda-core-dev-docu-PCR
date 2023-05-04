---
sidebar_position: 3
---

#  BPCard

### Import

```tsx
import BPCard from '@components/molecules/BPCard'
```

### Usage 

```tsx
<BPCard title="Card Title" footer={<span>4h ago </span>}>
    <span>Card content, you can add html elements too.</span>
</BPCard>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?id=molecules-bpcard--basic" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| title | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| description | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| footer | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 
| hoverable | false | true \|  false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpcard--basic
