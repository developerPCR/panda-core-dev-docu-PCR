---
sidebar_position: 6
---

# Notifications preferences 

<h2>We save notifications preferences of the user on firebase</h2> 

#### under `fe-users > notifications` fields:

```
billing: boolean 
offers: boolean 
reports: boolean 
updates: boolean 
```

You can of course extend and add multiple others, the file is `components/organisms/account/Notifications.tsx`.

:::tip
We use this method in our real apps combined with a mailchimp firebase extension, which synchronizes all the date from firebase to mailchimp, including the notifications.

See more at https://mailchimp.com/integrations/firebase/ 
:::
