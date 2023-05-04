---
sidebar_position: 10
---

#  BPPanel

### Import

```tsx
import BPPanel from '@components/molecules/BPPanel'
```

### Usage 

```tsx
<BPPanel
    title="Panel Title"
    description="Panel Description"
    hints={<span className="justify-self-start">Some hints......</span>}
    footer={
        <>
        <BPButton size="sm" outline>
            Details
        </BPButton>
        <BPButton size="sm" variant={variant} magic={magic} outline={outline}>
          Download
        </BPButton>
        </>
      }
      className="w-[400px]"
      variant={variant}
      magic={magic}
      outline={outline}
      {...props}
    >
</BPPanel>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bppanel--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| title | null | string
| descriptcion | null | string
| hitns | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| footer | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outline | false | true \|  false 
| magic | false | true \|  false 



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bppanel--basic