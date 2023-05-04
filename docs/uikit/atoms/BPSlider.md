---
sidebar_position: 16 
---

# BPSlider

### Import

```tsx
import BPSlider from '@components/atoms/BPSlider'
```

### Usage 

```tsx
<BPSlider className="w-10" onValueChange={console.log} />
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpslider--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| outline | false | true \|   false 
| magic | false | true \|   false
| max | 100 | number 
| min | 1 | number 
| step | 1 | number 
| defaultValue | 50 | number 




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpslider--basic