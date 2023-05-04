---
sidebar_position: 12
---

#  BPSteps

### Import

```tsx
import BPSteps from '@components/molecules/BPSteps'
```

### Usage 

```tsx
<div className="w-[90vw] h-[90vh] overflow-y-auto">
      <div className="text-xl text-primary-600 py-6 text-center">
        Steps 2 and 3 are Disabled
      </div>

      <BPSteps items={itemsDisabled} />
      <BPSteps variant="danger" items={itemsDisabled} />
      <BPSteps outline variant="danger" items={itemsDisabled} />

      <div className="text-xl text-primary-600 py-6 text-center">Hoverable</div>
      <BPSteps items={items} hoverable />
      <BPSteps variant="danger" items={items} hoverable />
      <BPSteps outline variant="danger" items={items} hoverable />
      <div className="text-xl text-primary-600 py-6 text-center">
        Step 2 is Active
      </div>
      <BPSteps items={itemsWithActive} />
      <BPSteps variant="danger" items={itemsWithActive} />
      <BPSteps outline variant="danger" items={itemsWithActive} />

      <div className="text-xl text-primary-600 py-6 text-center">
        Many steps
      </div>
      <BPSteps items={manySteps} hoverable />
</div>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bpsteps--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outline | false | true \|  false 
| magic | false | true \|  false 
| items | [ ] | BPStepsItem[]
| onValueChange | ((value: string) => void) | 
| hoverable | false | true \|  false





Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bpsteps--basic