---
sidebar_position: 7
---

#  BPHoverCard

### Import

```tsx
import BPHoverCard from '@components/molecules/BPHoverCard'
```

### Usage 

```tsx
<BPHoverCard
    trigger={
      <a
        className="ImageTrigger"
        href="https://twitter.com/radix_ui"
        title="Radix UI twitter"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://blue-panda.dev/_next/image?url=%2Flogo.webp&w=96&q=75"
          alt="Radix UI"
          className="w-16"
        />
      </a>
    }
    {...props}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <img
        src="https://blue-panda.dev/_next/image?url=%2Flogo.webp&w=96&q=75"
        alt="Radix UI"
        className="w-16"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <div>
          <div className="Text bold">Blue Panda</div>
          <div className="Text faded">@bluepanda_dev</div>
        </div>
        <div className="Text">
          Components, icons, colors, and templates for building high-quality,
          accessible UI. Free and open-source.
        </div>
        <div style={{ display: 'flex', gap: 15 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div className="Text bold">0</div>{' '}
            <div className="Text faded">Following</div>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            <div className="Text bold">2,900</div>{' '}
            <div className="Text faded">Followers</div>
          </div>
        </div>
      </div>
    </div>
  </BPHoverCard>
```

<iframe width="100%" heigh="200px" src="https://ui-kit.blue-panda.dev/iframe.html?args=&id=molecules-bphovercard--basic&viewMode=story" />


### Props 


| Prop | Default | Options |
| ----------- | ----------- | ----------- |
| trigger | null | ReactElement<any, string \| JSXElementConstructor<any\>\> |
| variant | default | 'default' \| 'inverted' \| 'danger' \| 'cyber' \| 'caution' \| 'success' \| 'primary' \| 'secondary' \| 'accent' \| 'light' \| 'link’ | 
| size | md | 'xxs'  \| 'xs'   \| 's'  \| 'md'  \| 'lg'  \| 'xl' \| 'xxl' 
| outlined | false | true \|  false 
| magic | false | true \|  false 



Check more colors, statuses and styles at: 
<img src={'/img/sb.png'} alt="Storybook" style={{width: '15px'}} />

https://ui-kit.blue-panda.dev/?path=/story/molecules-bphovercard--basic