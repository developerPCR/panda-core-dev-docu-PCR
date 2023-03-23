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

<img src={'/instructions/firebase/6.png'} style={{width: '320px'}} />

7. Now you can start changing `.env.local` file which holds the env variables for your firebase. 

<img src={'/instructions/firebase/7.png'} style={{width: '320px'}} />

### Statsig project  (Optional)

:::info
If you don not need to use any of these features, feel free to skip this.

:::

9. Setup for analytics, a/b test, feature flags. 

<img src={'/instructions/firebase/9.png'} style={{width: '320px'}} />

10. Create an account and generate a new key. 

<img src={'/instructions/firebase/10.png'} style={{width: '320px'}} />

11. Here you can copy the client api key and add it to `.env.local` file. 

<img src={'/instructions/firebase/11.png'} style={{width: '320px'}} />

### Firebase database

12. Go to Firestore Database and create a new database.

<img src={'/instructions/firebase/12.png'} style={{width: '320px'}} />

13. We recommend you to start on production mode, but you could also do it in test mode. 

:::info
We will setup the rules later.
:::

<img src={'/instructions/firebase/13.png'} style={{width: '480px'}} />

14. After you install and run the project, you will see some errors, those are permits we are still missing. 

<img src={'/instructions/firebase/14.png'} style={{width: '320px'}} />

15. Running the app. 

<img src={'/instructions/firebase/15.png'} style={{width: '320px'}} />

16. Rules missing. 

<img src={'/instructions/firebase/16.png'} style={{width: '320px'}} />

:::caution
If you extend the database (that is quite likely to happen if you build on top of this), be sure you
set up the rules here in order to get access from the website and enforce security rules.
:::

17. Add the rules and publish.

<img src={'/instructions/firebase/17.png'} style={{width: '520px'}} />

Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  
  	 
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

```

### Firebase authetication 

18. Now should not be any errors when running the website locally. but we cannot login. 

<img src={'/instructions/firebase/18.png'} style={{width: '320px'}} />

19. Go to Authentication menu and hit 'Get started'.

<img src={'/instructions/firebase/19.png'} style={{width: '320px'}} />

20. We provide an example in our code base for normal Email, Gmail, Facebook, Twitter, Github. 

:::tip
you will need to setup the keys and other data per each provider, for gmail is quite simple since is connected with firebase, for github, twitter, facebook and others
you need to create a dev account per each and setup the things firebase is telling you, but do not worry you can setup all of them within 1 or 2 hours.
:::

<img src={'/instructions/firebase/20.png'} style={{width: '320px'}} />

21. For normal email sign in, sign up, just click on `Email/Password`  and then enable all and press save.

:::info
After this, you will be able to register an account, log in and forgot password from website.
:::

<img src={'/instructions/firebase/21.png'} style={{width: '320px'}} />

28. Be sure to add localhost and all your domains here to be whitelisted by firebase and be able to log in. 

<img src={'/instructions/FIREBASE/28.PNG'} style={{width: '420PX'}} />

27. After logging in, you will see the avatar in the banner.  

:::info
Now you can see the menu, we put a menu called `hideouts`, which has great example of restricted areas, live collaboration content, 
and magic links, where you can share data. for instance if your project is creating a kanban, or a canvas where others draw, this is giving you the base.
:::

<img src={'/instructions/firebase/27.png'} style={{width: '520px'}} />

Disregard `free` word, this is part of Stripe integration.

