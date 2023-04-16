---
sidebar_position: 8
---

#  BPLoadingModal

### Import

```tsx
import BPLoadingModal from '@components/molecules/BPLoadingModal'
```

### Usage 

```tsx
<div className="flex gap-6 w-80 h-80">
      <BPLoadingModal loading={true}></BPLoadingModal>
</div>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bploadingmodal--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| icon | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| magic | false | true \|  false 
| title | null | string
| titleClass | null | string



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bploadingmodal--basic