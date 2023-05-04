---
sidebar_position: 17
---

# BPSwitch

### Import

```tsx
import BPSwitch from '@components/atoms/BPSwitch'
```

### Usage 

```tsx
<BPSwitch onCheckedChange={console.log}>
    Label switch
</BPSwitch>
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpswitch--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ |
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| outline | false | true \|   false 
| magic | false | true \|   false
| disabled | false | true \|   false
| id | " " | string 





Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpswitch--basic