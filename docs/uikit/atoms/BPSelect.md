---
sidebar_position: 15
---

# BPSelect

### Import

```tsx
import BPSelect from '@components/atoms/BPSelect'
```

### Usage 

```tsx
<BPSelectGroup>
    <BPSelectLabel className="SelectLabel">Fruits</BPSelectLabel>
    <BPSelectItem value="apple">Apple</BPSelectItem>
    <BPSelectItem value="banana">Banana</BPSelectItem>
    <BPSelectItem value="blueberry" disabled>
      Blueberry
    </BPSelectItem>
    <BPSelectItem value="grapes">Grapes</BPSelectItem>
    <BPSelectItem value="pineapple">Pineapple</BPSelectItem>
</BPSelectGroup>
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpselect--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| placeholder | " " | string 
| outline | false | true \|   false 
| magic | false | true \|   false
| disabled | false | true \|   false




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpselect--basic