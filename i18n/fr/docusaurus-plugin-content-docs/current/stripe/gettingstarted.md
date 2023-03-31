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

<img src={'/instructions/stripe/1.png'} style={{width: '320px'}} />

2. Description of the step

<img src={'/instructions/stripe/2.png'} style={{width: '320px'}} />

3. Description of the step

<img src={'/instructions/stripe/3.png'} style={{width: '320px'}} />

4. Description of the step

<img src={'/instructions/stripe/4.png'} style={{width: '320px'}} />

5. Description of the step

<img src={'/instructions/stripe/5.png'} style={{width: '320px'}} />

6. Description of the step

<img src={'/instructions/stripe/6.png'} style={{width: '320px'}} />

7. Description of the step

<img src={'/instructions/stripe/7.png'} style={{width: '320px'}} />

8. Description of the step

<img src={'/instructions/stripe/8.png'} style={{width: '320px'}} />

9. Description of the step

<img src={'/instructions/stripe/9.png'} style={{width: '320px'}} />

10. Description of the step

<img src={'/instructions/stripe/10.png'} style={{width: '320px'}} />

11. Description of the step

<img src={'/instructions/stripe/11.png'} style={{width: '320px'}} />

12. Description of the step

<img src={'/instructions/stripe/12.png'} style={{width: '320px'}} />

13. Description of the step

<img src={'/instructions/stripe/13.png'} style={{width: '320px'}} />

14. Description of the step

<img src={'/instructions/stripe/14.png'} style={{width: '320px'}} />

15. Description of the step

<img src={'/instructions/stripe/15.png'} style={{width: '320px'}} />

16. Description of the step

<img src={'/instructions/stripe/16.png'} style={{width: '320px'}} />

17. Description of the step

<img src={'/instructions/stripe/17.png'} style={{width: '320px'}} />

18. Description of the step

<img src={'/instructions/stripe/18.png'} style={{width: '320px'}} />

19. Description of the step

<img src={'/instructions/stripe/19.png'} style={{width: '320px'}} />

20. Description of the step

<img src={'/instructions/stripe/20.png'} style={{width: '320px'}} />

21. Description of the step

<img src={'/instructions/stripe/21.png'} style={{width: '320px'}} />

22. Description of the step

<img src={'/instructions/stripe/22.png'} style={{width: '320px'}} />

23. Description of the step

<img src={'/instructions/stripe/23.png'} style={{width: '320px'}} />

24. Description of the step

<img src={'/instructions/stripe/24.png'} style={{width: '320px'}} />

25. Description of the step

<img src={'/instructions/stripe/25.png'} style={{width: '320px'}} />

26. Description of the step

<img src={'/instructions/stripe/26.png'} style={{width: '320px'}} />

27. Description of the step

<img src={'/instructions/stripe/27.png'} style={{width: '320px'}} />

28. Description of the step

<img src={'/instructions/stripe/28.png'} style={{width: '320px'}} />

29. Description of the step

<img src={'/instructions/stripe/29.png'} style={{width: '320px'}} />

30. Description of the step

<img src={'/instructions/stripe/30.png'} style={{width: '320px'}} />

31. Description of the step

<img src={'/instructions/stripe/31.png'} style={{width: '320px'}} />

32. Description of the step

<img src={'/instructions/stripe/32.png'} style={{width: '320px'}} />

33. Description of the step

<img src={'/instructions/stripe/33.png'} style={{width: '320px'}} />

34. Description of the step

<img src={'/instructions/stripe/34.png'} style={{width: '320px'}} />

35. Description of the step

<img src={'/instructions/stripe/35.png'} style={{width: '320px'}} />

36. Description of the step

<img src={'/instructions/stripe/36.png'} style={{width: '320px'}} />

37. Description of the step

<img src={'/instructions/stripe/37.png'} style={{width: '320px'}} />

38. Description of the step

<img src={'/instructions/stripe/38.png'} style={{width: '320px'}} />

39. Description of the step

<img src={'/instructions/stripe/39.png'} style={{width: '320px'}} />

40. Description of the step

<img src={'/instructions/stripe/40.png'} style={{width: '320px'}} />

41. Description of the step

<img src={'/instructions/stripe/41.png'} style={{width: '320px'}} />

42. Description of the step

<img src={'/instructions/stripe/42.png'} style={{width: '320px'}} />

43. Description of the step

<img src={'/instructions/stripe/43.png'} style={{width: '320px'}} />

44. Description of the step

<img src={'/instructions/stripe/44.png'} style={{width: '320px'}} />

45. Description of the step

<img src={'/instructions/stripe/45.png'} style={{width: '320px'}} />

46. Description of the step

<img src={'/instructions/stripe/46.png'} style={{width: '320px'}} />

47. Description of the step

<img src={'/instructions/stripe/47.png'} style={{width: '320px'}} />

48. Description of the step

<img src={'/instructions/stripe/48.png'} style={{width: '320px'}} />

49. Description of the step

<img src={'/instructions/stripe/49.png'} style={{width: '320px'}} />

50. Description of the step

<img src={'/instructions/stripe/50.png'} style={{width: '320px'}} />

51. Description of the step

<img src={'/instructions/stripe/51.png'} style={{width: '320px'}} />

52. Description of the step

<img src={'/instructions/stripe/52.png'} style={{width: '320px'}} />

53. Description of the step

<img src={'/instructions/stripe/53.png'} style={{width: '320px'}} />

54. Description of the step

<img src={'/instructions/stripe/54.png'} style={{width: '320px'}} />
