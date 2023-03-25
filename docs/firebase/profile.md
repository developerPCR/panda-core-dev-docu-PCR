---
sidebar_position: 7
---

# Profile data 

We use the provider data for users profile, such us displayu name and avatar, in case the user log in with `email/password` we will not have data available,
so there is a profile page where the user can upload their profile photo and extra data, we added a website input as example, you can add all data you will need from the user there.

:::info
We added the posibility to have a public profile too, so you can share and see others users profiles like this: `yourdomain.com/profile/syctZDYTDaNUtNBknjG3m0ssYIV2`.
User needs to press `Make profile public` to be able to share. (since not all people want to have it public).
:::

:::danger
For security reasons, the public profiles are stored in another document on firebase called `fe-public-profiles` where the email and other private data cannot be seen.
:::

