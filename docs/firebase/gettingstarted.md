---
sidebar_position: 1
---

# Getting started 

You will need a firebase account, with a BLAZE plan (pay what you use).

After having you account ready, go to https://console.firebase.google.com/ to start this guide.

### Firebase project 

1. Create the project if you have no project already on firebase. 

<img src={'/instructions/firebase/1.png'} style={{width: '320px'}} />

2. (Optional) Enable google analytics for this project in case you want.

<img src={'/instructions/firebase/2.png'} style={{width: '320px'}} />

3. (Optional) accept license.

<img src={'/instructions/firebase/3.png'} style={{width: '320px'}} />

4. Add the first web app (third icon).

<img src={'/instructions/firebase/4.png'} style={{width: '320px'}} />

5. Put a name to your project. 

<img src={'/instructions/firebase/5.png'} style={{width: '320px'}} />

6. Here you will have all configs you will need to setup the firebase template. 

:::caution
You dont need to run any command locally, since you already have the panda template, we need to take just the data
on `fireBaseConfig` variable to modify `.env.local` variables.

:::

<img src={'/instructions/firebase/6.png'} style={{width: '320px'}} />

7. Now you can start changing `.env.local` file which holds the env variables for your firebase. 

<img src={'/instructions/firebase/7.png'} style={{width: '320px'}} />

### Firebase database

1. Go to Firestore Database and create a new database.

<img src={'/instructions/firebase/12.png'} style={{width: '320px'}} />

2. We recommend you to start on production mode to avoid migrating afterwards, but you could also do it in test mode. 

:::info
We will setup the rules later.
:::

<img src={'/instructions/firebase/13.png'} style={{width: '480px'}} />

3. After you install and run the project, you will see some errors, those are permits we are still missing. 

```bash
cd ./your-panda-template/
npm install
```

4. Running the app. 

```bash
npm run dev
```

5. to avoid problems to access firebase database from template, we need to add the rules which are missing. 

<img src={'/instructions/firebase/16.png'} style={{width: '320px'}} />

:::caution
If you extend  and add custom documents into the firebase database (that is quite likely to happen if you build on top of this), be sure you
set up the rules here in order to get access from the website and enforce security rules.
:::

6. Add the rules and publish.

<img src={'/instructions/firebase/17.png'} style={{width: '520px'}} />

Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
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
  }
}

```

### Firebase authetication 

1. Now should not be any errors when running the website locally. but we cannot login. 

<img src={'/instructions/firebase/18.png'} style={{width: '320px'}} />

2. Go to Authentication menu on your firebase console (https://console.firebase.google.com/) and hit 'Get started'.

<img src={'/instructions/firebase/19.png'} style={{width: '320px'}} />

3. We provide an example in our code base for normal Email, Gmail, Facebook, Twitter, Github. 

:::tip
you will need to setup the keys and other data per each provider, for gmail is quite simple since is connected with firebase, for github, twitter, facebook and others
you need to create a dev account per each and setup the things firebase is telling you, but do not worry you can setup all of them within 1 or 2 hours.
:::

<img src={'/instructions/firebase/20.png'} style={{width: '320px'}} />

4. For normal email sign in, sign up, just click on `Email/Password`  and then enable all and press save.

:::info
After this, you will be able to register an account, log in and forgot password from website.
:::

<img src={'/instructions/firebase/21.png'} style={{width: '320px'}} />

5. Be sure to add localhost and all your domains here to be whitelisted by firebase and be able to log in. 

<img src={'/instructions/FIREBASE/28.PNG'} style={{width: '420PX'}} />

6. After logging in, you will see the avatar in the banner.  

:::info
Now you can see the menu, we put a menu called `hideouts`, which has great example of restricted areas, live collaboration content, 
and magic links, where you can share data. for instance if your project is creating a kanban, or a canvas where others draw, this is giving you the base.
:::

<img src={'/instructions/firebase/27.png'} style={{width: '520px'}} />

:::tip
To log in, just press "Log in" button on the navbar and you can easily create an account from gmail, or just email/password, with "sign up" link.
:::

Disregard `free` word, this is part of Stripe integration.

