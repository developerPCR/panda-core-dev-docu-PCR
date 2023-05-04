---
sidebar_position: 5
---

# BPButton

### Import

```tsx
import BPButton from '@components/atoms/BPBox'
```

### Usage 

```tsx
<BPButton>Default Button</BPButton>
<BPButton size="xs">Size xs</BPButton>
<BPButton size="sm">Size sm</BPButton>
<BPButton size="lg">Size lg</BPButton>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpbutton--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' 
| outlined | false | true \|   false 
| magic | false | true \|   false 
| hoverable | false | true \|   false 
| isLoading | false | true \|   false 
| isDisabled | false | true \|   false 
| loadingText | string | "Loading" \| "wait please" \| "etc" 
| nativeType | button |'submit' \|  'reset' 
| noRounded | false | true \|   false 
| expanded | false | true \|   false 




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpbutton--basic