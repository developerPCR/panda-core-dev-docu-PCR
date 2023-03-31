---
sidebar_position: 2
---

# Getting started 

Panda Plus has some configurations that are used for several features, such as colors, i18n and others.

## Common commands 

Running

``` sh
npm run dev
```

Building

``` sh
npm run build 
```

Generating site

``` sh
npm run generate 
```

After building, sitemap builder will be executed.

## Deployment 

:::caution

Since we are using i18n we cannot have this app deployed on S3 or others similar statics servers. You can use nice servers like:
[https://vercel.com/](https://vercel.com/) or [https://www.netlify.com/](https://www.netlify.com/) where you have a nice free tier for your project.
:::

Using such as services doesn't take more than 5 minutes from registering to deploying. 

:::tip
You can also buy a domain there and use it in your projects.

:::

:::tip
Need receive emails? you can use [https://forwardemail.net/](https://forwardemail.net/) free tier and add the configs to your Vercel domains and in 5 minutes you have working emails being redirected to your personal email.

:::



## Colors

To change colors is quite easy, you just need to open `tailwind.config.js` and change them there.

A nice tool to just do it in under 10 seconds is **[uicolors.app](https://uicolors.app/create)** where you can just export colors array to tailwind format.

![alt text](/ss/colorgen.png)

You need to find the colors arrays and replace one by one:

``` javascript
  ...
  colors: {
    neutral: {
      50: '#ffffff',
      100: '#efefef',
      200: '#dcdcdc',
      300: '#bdbdbd',
      400: '#989898',
      500: '#7c7c7c',
      600: '#656565',
      700: '#525252',
      800: '#464646',
      900: '#3d3d3d',
    },
  ...
  }
```

## I18N (internationalization)

:::tip

The **file** which contians `config` is next-i18next.config.js.

:::

### You can remove or add more languages as you wish.

``` javascript
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'jp'],
  },
  localePath: path.resolve('./public/locales'),
}

```
be sure you translate the languages correctly on ./public/locales/[lan].json.

### Visual list 

The component that has the list of languages is `components/organisms/NavBar.tsx`.

<img src={'/ss/lans.png'} style={{width: 200}} />



## Analytics (Statsig)

We provide a simple example using https://www.statsig.com/ analytics, you could also remove it and add another provider, but we recommend this since has a lot of features and a nice free tier.
We added an example of A/B testing within the Plus template, also a feature flag and tracking events. so pretty much all you could need form this tool.

File containing analytics config: `.env.local`
``` sh 
NEXT_PUBLIC_STATSIG_CLIENT_SDK_KEY=client-...
NEXT_PUBLIC_STATSIG_ENVIRONMENT=staging
```

## Custom CSS

We recommend to use `custom.css` to extend css classes in case you cannot find a solution with TailwindCSS.

## How to change the icons / logo in the project

Use your logo and generates the icons needed for the project.

1. FOR ANDROID APPLE ICONS https://favicon.io/favicon-converter/

Unzip the content and then paste and replace it on `your-template/public`

2. FOR PWA ICONS https://tools.crawlink.com/tools/pwa-icon-generator/

Unzip the content and then paste and replace it on `your-template/public/icons`


:::tip
In case you need converter from png to webp use: [https://cloudconvert.com/webp-converter](https://cloudconvert.com/webp-converter)
:::

