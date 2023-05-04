---
sidebar_position: 2
---

# BPAvatar

### Import

```tsx
import BPAvatar  from '@components/atoms/BPAvatar'
```

### Usage 

```tsx
  <BPAvatar url={imageUrl} text="J M" />
  <BPAvatar url={imageUrl} size="xs" />
  <BPAvatar url={imageUrl} size="sm" />
  <BPAvatar url={imageUrl} size="lg" />
  <BPAvatar url={imageUrl} size="xl" />

  <BPAvatar text="J M" />
  <BPAvatar text="J M" size="xs" />
  <BPAvatar text="J M" size="sm" />
  <BPAvatar text="J M" size="lg" />
  <BPAvatar text="J M" size="xl" />
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpavatar--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| url | null | ReactElement<any, string \| JSXElementConstructor<any\>\> | 
| text | " " | ReactElement<any, string \| JSXElementConstructor<any\>\> | 
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \| false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpavatar--basic
