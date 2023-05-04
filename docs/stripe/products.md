---
sidebar_position: 2
---

import styles from '../../styles.module.css';

# Products 


### Stripe configurations
<h2>Please follow the next steps for your stripe project</h2>

<div>
    <div className={styles.circle}></div> Go to stripe and add a product. 
</div>

<img src={'/instructions/stripe/2.png'} alt="Stripe" style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> You can add all details you want, go to metadata and add a type, details, features (1 line per feature).
</div>

:::info
We retrieve products and show them on the website from firebase api, is also recommended if you want to hardcode the products and show them under `Products.tsx` to have better performance.

You can use the hook `usePayment`, method singlePayment and pass the price to this.
:::


<img src={'/instructions/stripe/metadata.png'} alt="Stripe metadata"style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> We need to modify this file so you connect the stripe product to the application so now we are lsitening the right products.
</div>

:::info
This is neccesary since some times you have other products for other websites, so we dont retrieve all of them.
:::
<img src={'/instructions/stripe/1.png'} style={{width: '70%%'}} />



<div>
    <div className={styles.circle}></div> You should now be able to buy and see the product you bought under orders menu. 
</div>

<img src={'/instructions/stripe/54.png'} alt="Stripe" style={{width: '70%%'}} />


### (Optional) Unlock product data after buying 

:::info
In case you want to share a link, secret or something after your product is purchased to your customers.
:::


<div>
    <div className={styles.circle}></div> Go to firebase firestore and add a collection. 
</div>

<img src={'/instructions/stripe/25.png'} alt="Stripe" style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now is quite easy, just add the product key (from stripe) and add either 'raw' or 'download' field. 
</div>

:::tip
Like always, this is just an example of relkeasing some secrete or link after bying some product, from here you can change anything and build your own solution. you have a good base with these 2 examples. 
:::

<img src={'/instructions/stripe/26.png'} alt="Stripe" style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Now we need to add a new google function to interact with the vault data (this is improtant otherwise would be unsafe), go to https://console.cloud.google.com/ and choose your firebase project then choose Cloud Functions.
</div>

<img src={'/instructions/stripe/27.png'} style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Create a new one and fill this information.
</div>

<img src={'/instructions/stripe/51.png'} alt="Stripe" style={{width: '70%%'}} />

<div>
    <div className={styles.circle}></div> Take the project specific information from firebase console > project settings. 
    <br />
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

<img src={'/instructions/stripe/52.png'} alt="Stripe" style={{width: '70%%'}} />

<div className={styles.circle}></div> Now go to https://github.com/bluepanda-dev/panda-core-dev-gcp-functions and download products_spendingsv5.zip, upload this to the google cloud function , select an storage and press deploy. (should take some minutes)

:::info
Now we are uploading the code base that will handle the events after a user purchases.
This will be reading and adding the unlock info coming from fe-vault to the specific order, with a high security layer, since is handle on google cloud functions side.
:::

<img src={'/instructions/stripe/53.png'} alt="Stripe" style={{width: '70%%'}} />


:::tip
After this proccess you are good to go and sell products / apikeys or whatever other type that can unlock content after selling.
:::

