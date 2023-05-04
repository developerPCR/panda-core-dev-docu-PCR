---
sidebar_position: 16
---

# BPSkeletonLoader

### Import

```tsx
import BPSkeletonLoader from '@components/atoms/BPSkeletonLoader'
```

### Usage 

```tsx
<BPSkeletonLoader loading={true}>
    <div>My skeleton loader hide the content</div>
</BPSkeletonLoader>
```

<iframe width="100%" heigh="200px"  src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpskeletonloader--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| loading | false | true \|   false
| height | h-6 | string 
| width | w-full | string 




Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpskeletonloader--basic