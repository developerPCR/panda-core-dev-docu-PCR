---
sidebar_position: 1
---
import styles from '../styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Where to start? 

Depending on the template you have, you will follow different documentations.

:::info
We have multiple designs per template, so all designs you see on https://docu.blue-panda.dev/docs/designs have the same features
described below.
:::


<Tabs>
  <TabItem value="core" label="🚢 Core (free)" default>
  <p>
  You just need to install and run the app, there is nothing special about this, it is just a base which has some 
  basic integrations light dark/light mode. <i>This template doesnt have the UI Kit with +50 components</i>
  </p>
  <a href="https://core.blue-panda.dev/" target="_blank" >Demo</a>
    <p style={{color: 'yellow'}}>
    To have this project running , shouldnt take more than 2 minutes average.
    </p>
  </TabItem>
  <TabItem value="plus" label=" Plus (Landing)" attributes={{className: styles.yellow}}>
  <p>
  If you have the Panda Plus template, this includes Panda Core (Free) and you have a landing page with multiple features, such as dark/light mode, i18n, sections and more. 
  Also includes all our +50 UI Components. <a href="https://ui-kit.blue-panda.dev/?path=/docs/example-introduction--docs" target="_blank" >(check them here)</a>
  </p>
  <a href="https://plus.blue-panda.dev/" target="_blank" >Demo (Base design)</a>
    <p style={{color: 'yellow'}}>
    To have this project running , shouldnt take more than 2 minutes average.
    </p>
  <p>
  Go to <a href="/docs/category/-tutorial---plus" >Panda Plus Doc</a> where you can find details about the template.
  </p>
  </TabItem>
  <TabItem value="firebase" label=" Firebase (users)" attributes={{className: styles.orange}} >
  <p>
  If you have Panda Firebase template, means that you also have included <span className={styles.yellow}>Panda Plus</span> and Users features, such as
  Login, Logout, Forgot Password, Register, Restricted areas, Upload files and much more.
  </p>
  <a href="https://firebase.blue-panda.dev/" target="_blank" >Demo (Base design)</a>
    <p style={{color: 'yellow'}}>
    To have this project running , shouldnt take more than 20 minutes average.
    </p>

  <p>
  Go to <a href="/docs/category/-tutorial---firebase" >Panda Plus Firebase</a> where you can find details about the template.
  </p>
  </TabItem>
  <TabItem value="stripe" label=" Stripe (payments)" attributes={{className: styles.red}}>
  <p>
  If you have Panda Stripe template, means that you also have included <span className={styles.yellow}>Panda Plus</span>, <span className={styles.orange}>Panda Firebase</span> and multiple payments features such as
  Subscriptions Plans, Credits (Spend and Buy Credits), One Payment Products, Billing area (invoices and orders) and more.
  </p>
  <a href="https://stripe.blue-panda.dev/" target="_blank" >Demo (Base design)</a>
    <p style={{color: 'yellow'}}>
    To have this project running , shouldnt take more than 30 minutes average.
    </p>
  <p>
  Go to <a href="/docs/category/-tutorial---stripe" >Panda Plus Stripe</a> where you can find details about the template.
  </p>
  </TabItem>
  <TabItem value="cms" label=" CMS (soon)">
  Soon...
  </TabItem>
</Tabs>

:::tip

Be aware of environment variables you need to change on `.env.local` file. Also search for `CHANGE_NAME` within the project and will show you all places
where you need to add your texts.

:::

<head>
<meta property="og:title" content="Panda Plus | Where to start?"/>
<meta property="og:image" content="https://media.discordapp.net/attachments/1092919759911256125/1092920697787002901/2.png?width=625&height=625"/>
<meta property="og:description" content="Depending on the template you have, you will follow different documentations."/>
<meta property="og:url" content="https://docu.blue-panda.dev/docs/howtostart"/>
</head>
