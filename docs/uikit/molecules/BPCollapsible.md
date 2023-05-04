---
sidebar_position: 5
---

#  BPCollapsible

### Import

```tsx
import BPCollapsible from '@components/molecules/BPCollapsible'
```

### Usage 

```tsx
 <BPCollapsible title="@panda starred 3 repositories" {...props}>
    <span>@panda-ui/plus</span>
    <span>@panda-ui/firebase</span>
    <span>@panda-ui/stripe</span>
    <span>@panda-ui/cms</span>
</BPCollapsible>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpcollapsible--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 
| hoverable | false | true \|  false 
| title | null | string



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpcollapsible--basic