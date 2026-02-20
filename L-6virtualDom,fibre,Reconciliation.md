# virtual DOM, fibre, aand reconciliation

## Virtual DOM -> .createRoot() method
 **-> .createRoot() behind the scene ye humare liye ek pura ka pura DOM like structure create krta hai**

  -> isko kya jarurat naya DOM create krne ki?
     '-> kyunki ye compare krta hai main DOM ko or apane DOM ko or phir unhi cheezon ko update krta hai jo ki ui me update hui hai.
     '-> lekin humara browser kya karta hai ki purana pura DOM hata kr new DOM create krta hai or pura page refresh krta hai isliye wo loading wala symbol aat hai.

     <!-- ab ye ho gayi baat virtul DOM ki -->
** ab react Fiber jo hai wo hai virtual DOM ko kaise implement karna hai uska Algorithm**
## React Fibre
    ** [githubRepo for fibre -> go through it](https://github.com/acdlite/react-fiber-architecture) **