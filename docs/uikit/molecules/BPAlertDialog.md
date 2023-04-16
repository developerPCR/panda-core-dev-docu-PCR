---
sidebar_position: 1 
---

# BPAlertDialog  

### Import

```tsx
import BPAlertDialog from '@components/molecules/BPAlertDialog'
```

### Usage 

```tsx
<>
  <BPAlertDialog
    open={open}
    title="Are you absolutely sure?"
    actions={
      <>
        <BPButton onClick={() => setOpen(false)} outline>
          Cancel
        </BPButton>
        <BPButton onClick={() => setOpen(false)} variant="primary">
          Save
        </BPButton>
      </>
    }
    {...props}
  >
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
  </BPAlertDialog>
  {children ?? <BPButton onClick={() => setOpen(true)}>Open</BPButton>}
</>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpalertdialog--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| title | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| actions | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| titleClassName | " " | string 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 
| open | false | true \|  false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpalertdialog--basic