---
sidebar_position: 9
---

#  BPNotification

### Import

```tsx
import BPNotification from '@components/molecules/BPNotification'
```

### Usage 

```tsx
<BPNotification>
    <p className="font-semibold">Notification</p>
    <p>
      You can use the Notification component to display messages with icons.
    </p>
</BPNotification>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpnotification--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| icon | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outline | false | true \|  false 
| magic | false | true \|  false 
| hoverable | false | true \|  false 



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpnotification--basic