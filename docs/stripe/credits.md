---
sidebar_position: 2
---

import styles from '../../styles.module.css';

# Credits 

<h2>Please follow the nexts steps for credits configuration</h2>

### Firebase configurations

 Now we need to add a new google function to interact with the vault data (this is improtant otherwise would be unsafe), go to https://console.cloud.google.com/ and choose your firebase project then choose Cloud Functions.

<img src={'/instructions/stripe/27.png'} style={{width: '70%%'}} />

### Create a new one and fill this information.

<img src={'/instructions/stripe/46.png'} style={{width: '70%%'}} />

### Take the project specific information from firebase console > project settings.

<div>
    e.g. For the FIREBASE_CONFIG
    <br />
    <code>
    {`{"projectId":"blue-panda-demo","databaseURL":"","storageBucket":"blue-panda-demo.appspot.com"}`}
    </code>
    <br />
    e.g. For the EVENTARC_CHANNEL 
    <br />
    <code>
      projects/blue-panda-demo/locations/us-central1/channels/firebase
    </code>
</div>

<img src={'/instructions/stripe/47.png'} style={{width: '70%%'}} />

### Now go to 
 https://github.com/bluepanda-dev/panda-core-dev-gcp-functions and download **credits_spendingsv20.zip**, upload this to the google cloud function, select an storage and press deploy. (should take some minutes)

:::info
Now we are uploading the code base that will handle the events after a user interacts with credits.
That means, if the user buy credits or spend them.
:::

<img src={'/instructions/stripe/49.png'} style={{width: '70%%'}} />

:::caution
In order to see credits products remember to add a type in your product on stripe, the type by default is 'credits'
:::

### Use package prices for your credits product.
<img src={'/instructions/stripe/credits.png'} style={{width: '70%%'}} />
<img src={'/instructions/stripe/package.png'} style={{width: '70%%'}} />

:::tip
Units are the amount of credits.
:::


### Now is time to create 2 collection on firebase: 
`fe-credits-items` and `fe-vault-credits`.

:::info
This is important , since we need an items that the user can buy with credits, you can of course change the way we spend credits and use another way, like computation.
as always this is an starter point for your SaaS.
:::

<img src={'/instructions/stripe/credits_collection_1.png'} style={{width: '70%%'}} />
<img src={'/instructions/stripe/credits_collection_2.png'} style={{width: '70%%'}} />



:::info
After this, you can go and play on credits menu, buy and spend credits :).
:::


