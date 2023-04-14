---
sidebar_position: 14
---

# BPRadioGroup

### Import

```tsx
import BPRadioGroup from '@components/atoms/BPRadioGroup'
```

### Usage 

```tsx
<BPRadioGroup onValueChange={console.log}>
    <BPRadioGroupItem id={`1`} value="1" label="Option 1" />
    <BPRadioGroupItem id={`2`} value="2" label="Option 2" />
    <BPRadioGroupItem id={`3`} value="3" label="Option 3" />
</BPRadioGroup>
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=defaultValue:dasd;outline:!true&id=atoms-bpradiogroup--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| defaultValue | "default" | string
| outline | false | true \|   false 
| magic | false | true \|   false




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpradiogroup--basic