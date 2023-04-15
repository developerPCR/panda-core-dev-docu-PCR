---
sidebar_position: 1
---

import styles from '../../styles.module.css';

# Getting started 

:::caution
You need first to read <a href="/docs/category/-tutorial---plus" >Panda Firebase Documentation</a> and make the whole setup.

After going though the firebase doc this, update the rules with the new documents we will need for stripe project:
:::


### 1. Copy these rules (override all rules you have):


<details>
  <summary>Panda Firebase Rules</summary>
  <code>
    {`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
     match /fe-my-drive/{uid} {
      allow read, delete, write: if request.auth.uid == uid;
      match /documents/{uid} {
        allow read, write, delete: if true;
      }
     }
     match /fe-newsletter/{uid} {
      allow read, write: if true;
     }
     match /fe-credits/{uid} {
      allow read: if true;
     }
     match /fe-credits-items/{uid} {
      allow read: if true;
     }
     match /fe-spendings/{uid} {
      allow read: if true;
      match /transactions/{uid} {
        allow read : if true;
      }
     }
     match /fe-credits/{uid} {
      allow read: if true;
     }
     match /fe-users/{uid} {
      allow read, write: if request.auth.uid == uid;
     }
     match /fe-hideouts/{uid} {
      allow read, write: if true;
     }
     match /fe-public-profiles/{uid} {
      allow read: if true;
      allow write: if request.auth.uid == uid;
     }
     match /fe-customers/{uid} {
      allow read, write: if request.auth.uid == uid;
      match /checkout_sessions/{uid} {
        allow read, write: if true;
      }
      match /cancel_subscriptions/{uid} {
        allow read, write: if true;
      }
      match /subscriptions/{uid} {
        allow read: if true;
      }
      match /payments/{uid} {
        allow read: if true;
      }
      match /credits_spendings/{uid} {
        allow read: if true;
        allow create: if true;
        allow update: if false;
      }
    }
    match /fe-products/{uid} {
      allow read: if true;
      match /prices/{uid} {
        allow read: if true;
      }
      match /tax_rates/{uid} {
        allow read: if true;
      }
    }
    match /fe-vault/{uid} {
      allow  write: if false;
      allow read: if true;
    }
  }
}
`}
</code>
</details>

### 2. Stripe Products / Subscriptions.

To have an stripe account is fairly easy just go to https://stripe.com/ and start the process, we recommend you
to start with test mode activated until your app is ready.


:::tip
If you dont need plans, products or credits, just remove the organisms or the reference on indes.tsx, and keep what you need.
:::

### 2.1. Since we will use firebase to connect stripe products/plans we need to setup an extension.
<div>
    <div className={styles.circle}></div> We got to firebase console, then extensions > explore extensions.
</div>

<img src={'/instructions/stripe/4.png'} style={{width: '70%%'}} />
<div>
    <div className={styles.circle}></div> Search for stripe, then select "Run payments with Stripe"
</div>

<img src={'/instructions/stripe/5.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> If you get a message like this, upgrade to Blaze  (dont worry, they dont charge if you dont use it) 
</div>

<img src={'/instructions/stripe/6.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div>  Enable all 3. 
</div>

<img src={'/instructions/stripe/7.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div>  You should see those 3 like this. 
</div>

<img src={'/instructions/stripe/8.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now choose these names so the app gets configured properly. 
</div>

<img src={'/instructions/stripe/9.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now you need to setup an API Key on Stripe  https://dashboard.stripe.com/apikeys , choose all these permissions.
</div>

<img src={'/instructions/stripe/10.png'} style={{width: '70%%'}} />

<img src={'/instructions/stripe/11.png'} style={{width: '70%%'}} />

<img src={'/instructions/stripe/12.png'} style={{width: '70%%'}} />

<img src={'/instructions/stripe/13.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div>  Now go back to firebase stripe extension configuration and add the Stripe API key like this. 
</div>

<img src={'/instructions/stripe/14.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now just continue and complete the information required.
</div>

:::tip
Webhooks are forms of connecting different platforms, here we will need to create a webhook on Stripe to listen events from Firebase.
 See the next step to configure the webhook. (You can just follow also the information about this on the extension itself)
:::

<img src={'/instructions/stripe/16.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Just read the instructions provided and create the webhook on https://dashboard.stripe.com/webhooks. 
</div>

:::info
On Stripe press "Add Endpoint" and provide the url Firebase extension provides.

:::

<img src={'/instructions/stripe/20.png'} style={{width: '70%%'}} />

<img src={'/instructions/stripe/15.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> After you create the webhook, go to Stripe and open the webhook, you will se a link which says "Reveal" under Signing secret,
    this is something Firebase extension will need to connect.
</div>

<img src={'/instructions/stripe/21.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> After this, you are all set to install the extension. 
</div>

<img src={'/instructions/stripe/17.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Description of the step 
</div>

<img src={'/instructions/stripe/23.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now update or create a product and check if the webhook is working as expected, yo will see the products also on Firebase > Firestore database > fe-products. 
</div>

:::caution
If something is not working fine, pls read carefully the extension steps to get this working or reach us on Discord.
:::

### 2.2. We have multiple options to use this template, from here you can setup the option you need in your saas.

<div style={{fontSize:'25px'}}>
<a href="/docs/stripe/products" >I want to use Products</a>
</div>
<div style={{fontSize:'25px'}}>
<a href="/docs/stripe/plans" >I want to use Plans</a>
</div>
<div style={{fontSize:'25px'}}>
<a href="/docs/stripe/credits" >I want to use Credits</a>
</div>

<head>
<meta property="og:title" content="Getting started !"/>
<meta property="og:image" content="https://media.discordapp.net/attachments/1092919759911256125/1093321217630548058/download.png"/>
<meta property="og:description" content="Let's discover Blue Panda Plus less than 5 minutes."/>
<meta property="og:url" content="https://docu.blue-panda.dev/docs/intro"/>
</head>
