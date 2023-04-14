---
sidebar_position: 1 
---

# BPAccordion  

### Import

```tsx
import BPAccordion, {
  BPAccordionItem,
  BPAccordionContent,
  BPAccordionTrigger,
} from '@components/atoms/BPAccordion'
```

### Usage 

```tsx
  <BPAccordion defaultValue="item-1">
    <BPAccordionItem value="item-1">
      <BPAccordionTrigger>Is it accessible?</BPAccordionTrigger>
      <BPAccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </BPAccordionContent>
    </BPAccordionItem>
    <BPAccordionItem value="item-2">
      <BPAccordionTrigger>Another?</BPAccordionTrigger>
      <BPAccordionContent>NA no information</BPAccordionContent>
    </BPAccordionItem>
  </BPAccordion>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=atoms-bpaccordion--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| icon | null | ReactElement<any, string \| JSXElementConstructor<any\>\> | 
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 


Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/atoms-bpaccordion--basic
