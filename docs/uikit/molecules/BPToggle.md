---
sidebar_position: 13
---

#  BPToggle

### Import

```tsx
import BPToggleGroup, {
  BPToggleItem,
} from '@components/molecules/BPToggleGroup'
```

### Usage 

```tsx
<BPToggleGroup {...props} onValueChange={console.log} defaultValue={'center'}>
    <BPToggleItem value="left">
      <FiAlignLeft />
    </BPToggleItem>
    <BPToggleItem value="center">
      <FiAlignCenter />
    </BPToggleItem>
    <BPToggleItem value="right">
      <FiAlignRight />
    </BPToggleItem>
</BPToggleGroup>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bptogglegroup--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outline | false | true \|  false 
| magic | false | true \|  false 
| disabled | false | true \|  false 
| selectionType	 | "single" | "multiple" \|  "single"
| defaultValue | " " | string \|  string[ ]





Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bptogglegroup--basic