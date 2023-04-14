---
sidebar_position: 18
---

# BPTabs

### Import

```tsx
import BPTabs from '@components/atoms/BPTabs'
```

### Usage 

```tsx
<BPTabs className="min-w-[400px] min-h-[300px] mb-4">
    <div title="Tab 1">Tab 1 content</div>
    <div title="Disabled" data-disabled>
      Tab 2 content
    </div>
    <div title="Tab 3">Tab 3 content</div>
</BPTabs>
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bptabs--types&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ |
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| defaultValue | " " | string 
| outline | false | true \|   false 
| magic | false | true \|   false
| orientation | null | vertical \| horizontal





Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bptabs--basic