---
sidebar_position: 1
---

# Getting started 

You need first to read <a href="/docs/category/-tutorial---plus" >Panda Firebase Documentation</a> and make the whole setup.

After going though the firebase doc this, update the rules with the new documents we will need for stripe project:


Copy these rules:


```
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
```


You will need a stripe account.

After having you account ready, go to  https://console.firebase.google.com to start this guide.

1. Description of the step

<img src={'/instructions/stripe/1.png'} style={{width: '70%%'}} />

2. Description of the step

<img src={'/instructions/stripe/2.png'} style={{width: '70%%'}} />

3. Description of the step

<img src={'/instructions/stripe/3.png'} style={{width: '70%%'}} />

4. Description of the step

<img src={'/instructions/stripe/4.png'} style={{width: '70%%'}} />

5. Description of the step

<img src={'/instructions/stripe/5.png'} style={{width: '70%%'}} />

6. Description of the step

<img src={'/instructions/stripe/6.png'} style={{width: '70%%'}} />

7. Description of the step

<img src={'/instructions/stripe/7.png'} style={{width: '70%%'}} />

8. Description of the step

<img src={'/instructions/stripe/8.png'} style={{width: '70%%'}} />

9. Description of the step

<img src={'/instructions/stripe/9.png'} style={{width: '70%%'}} />

10. Description of the step

<img src={'/instructions/stripe/10.png'} style={{width: '70%%'}} />

11. Description of the step

<img src={'/instructions/stripe/11.png'} style={{width: '70%%'}} />

12. Description of the step

<img src={'/instructions/stripe/12.png'} style={{width: '70%%'}} />

13. Description of the step

<img src={'/instructions/stripe/13.png'} style={{width: '70%%'}} />

14. Description of the step

<img src={'/instructions/stripe/14.png'} style={{width: '70%%'}} />

15. Description of the step

<img src={'/instructions/stripe/15.png'} style={{width: '70%%'}} />

16. Description of the step

<img src={'/instructions/stripe/16.png'} style={{width: '70%%'}} />

17. Description of the step

<img src={'/instructions/stripe/17.png'} style={{width: '70%%'}} />

18. Description of the step

<img src={'/instructions/stripe/18.png'} style={{width: '70%%'}} />

19. Description of the step

<img src={'/instructions/stripe/19.png'} style={{width: '70%%'}} />

20. Description of the step

<img src={'/instructions/stripe/20.png'} style={{width: '70%%'}} />

21. Description of the step

<img src={'/instructions/stripe/21.png'} style={{width: '70%%'}} />

22. Description of the step

<img src={'/instructions/stripe/22.png'} style={{width: '70%%'}} />

23. Description of the step

<img src={'/instructions/stripe/23.png'} style={{width: '70%%'}} />

24. Description of the step

<img src={'/instructions/stripe/24.png'} style={{width: '70%%'}} />

25. Description of the step

<img src={'/instructions/stripe/25.png'} style={{width: '70%%'}} />

26. Description of the step

<img src={'/instructions/stripe/26.png'} style={{width: '70%%'}} />

27. Description of the step

<img src={'/instructions/stripe/27.png'} style={{width: '70%%'}} />

28. Description of the step

<img src={'/instructions/stripe/28.png'} style={{width: '70%%'}} />

29. Description of the step

<img src={'/instructions/stripe/29.png'} style={{width: '70%%'}} />

30. Description of the step

<img src={'/instructions/stripe/30.png'} style={{width: '70%%'}} />

31. Description of the step

<img src={'/instructions/stripe/31.png'} style={{width: '70%%'}} />

32. Description of the step

<img src={'/instructions/stripe/32.png'} style={{width: '70%%'}} />

33. Description of the step

<img src={'/instructions/stripe/33.png'} style={{width: '70%%'}} />

34. Description of the step

<img src={'/instructions/stripe/34.png'} style={{width: '70%%'}} />

35. Description of the step

<img src={'/instructions/stripe/35.png'} style={{width: '70%%'}} />

36. Description of the step

<img src={'/instructions/stripe/36.png'} style={{width: '70%%'}} />

37. Description of the step

<img src={'/instructions/stripe/37.png'} style={{width: '70%%'}} />

38. Description of the step

<img src={'/instructions/stripe/38.png'} style={{width: '70%%'}} />

39. Description of the step

<img src={'/instructions/stripe/39.png'} style={{width: '70%%'}} />

40. Description of the step

<img src={'/instructions/stripe/40.png'} style={{width: '70%%'}} />

41. Description of the step

<img src={'/instructions/stripe/41.png'} style={{width: '70%%'}} />

42. Description of the step

<img src={'/instructions/stripe/42.png'} style={{width: '70%%'}} />

43. Description of the step

<img src={'/instructions/stripe/43.png'} style={{width: '70%%'}} />

44. Description of the step

<img src={'/instructions/stripe/44.png'} style={{width: '70%%'}} />

45. Description of the step

<img src={'/instructions/stripe/45.png'} style={{width: '70%%'}} />

46. Description of the step

<img src={'/instructions/stripe/46.png'} style={{width: '70%%'}} />

47. Description of the step

<img src={'/instructions/stripe/47.png'} style={{width: '70%%'}} />

48. Description of the step

<img src={'/instructions/stripe/48.png'} style={{width: '70%%'}} />

49. Description of the step

<img src={'/instructions/stripe/49.png'} style={{width: '70%%'}} />

50. Description of the step

<img src={'/instructions/stripe/50.png'} style={{width: '70%%'}} />

51. Description of the step

<img src={'/instructions/stripe/51.png'} style={{width: '70%%'}} />

52. Description of the step

<img src={'/instructions/stripe/52.png'} style={{width: '70%%'}} />

53. Description of the step

<img src={'/instructions/stripe/53.png'} style={{width: '70%%'}} />

54. Description of the step

<img src={'/instructions/stripe/54.png'} style={{width: '70%%'}} />


<head>
<meta property="og:title" content="Getting started !"/>
<meta property="og:image" content="https://media.discordapp.net/attachments/1092919759911256125/1093321217630548058/download.png"/>
<meta property="og:description" content="Let's discover Blue Panda Plus less than 5 minutes."/>
<meta property="og:url" content="https://docu.blue-panda.dev/docs/intro"/>
</head>
