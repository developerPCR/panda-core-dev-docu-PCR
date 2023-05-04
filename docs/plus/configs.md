---
sidebar_position: 2
---

import styles from '../../styles.module.css';


# Getting started 

<h2>Panda Plus has some configurations that are used for several features, such as colors, i18n and others.</h2>

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

## Custom CSS

We recommend to use `custom.css` to extend css classes in case you cannot find a solution with TailwindCSS.

## How to change the icons / logo in the project

Use your logo and generates the icons needed for the project.

<div>
  <a href="https://favicon.io/favicon-converter/" title="apple-android favicon">FOR ANDROID APPLE ICONS</a> 
</div>

Unzip the content and then paste and replace it on `your-template/public`

<div>
  <a href="https://tools.crawlink.com/tools/pwa-icon-generator/" title="PWA icon generator">FOR PWA ICONS</a> 
</div>

Unzip the content and then paste and replace it on `your-template/public/icons`


:::tip
In case you need converter from png to webp use: [https://cloudconvert.com/webp-converter](https://cloudconvert.com/webp-converter)
:::


<head>
<meta property="og:title" content="Panda Plus"/>
<meta property="og:image" content="https://media.discordapp.net/attachments/1092919759911256125/1092920698198032545/1.png?width=588&height=588"/>
<meta property="og:description" content="If you have the Panda Plus template, this includes Panda Core (Free) and you have a landing page with multiple features, such as dark/light mode, i18n, sections and more."/>
<meta property="og:url" content="https://docu.blue-panda.dev/docs/category/-tutorial---plus"/>
</head>
