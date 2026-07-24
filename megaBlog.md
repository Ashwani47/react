This is our mega project so here we will use all of our knowledge and also learn many new thing such as Appwrite, environment variables etc.

***

# SET-UP For Our MegaBlog Project

### dependencies That we need :- react-router-dom, react-redux, @reduxjs/toolkit, appwrite, @tinymce/tinymce-react, html-react-parser, react-hook-form, tailwind

## Environment Variables
-> kuchh variables aise hote hai jise system variable banaya jata hai jaise user id password etc because react ek frontend library hai or yaha pr jo bhi likha jaayega wo js ke through ship hoga browser pr or hum nhi chahte mere authentication keys wagayrea ka accesss kisi or ko mil jaaye... ab ye environment variables kaam me aate  hai jaise authentication purpose, backend se baat krne ke liye etc.

-> jb bhi hum environment variables banaye use eproject ke root me hona chahiye

-> file name :- ".env"

-> is .env ya aise environment variables ko hum kabhi bhi production ya github pr ship nhi krte to.. hume aisa karna hai ki github pr baaki sb jaaye bs ye na jaaye to uske liye .gitignore naam se ek file hota hai uss file me jidka naam hot hai wo github pr nhi jaata hai... so hum apane .env ko waha likh denge

-> Instead of committing your real .env, create a .env.example file:
```js
VITE_APPWRITE_URL=  
VITE_APPWRITE_PROJECT_ID=  
VITE_APPWRITE_DATABASE_ID=  
VITE_APPWRITE_COLLECTION_ID=  
```

This lets other developers know which environment variables are required without exposing their actual values.

-> environment variable files kisi bhi project me ek hi baar load hoti hai maximum cases me so jb bhi usme koi changes kro to project ko restart krdo...

-> ab is env me jo variables hai uska access frontend pr alag tareeke se hota hai backend me alag tareeke se hota hai databases me alag tareeke se hota hai...   
aao dekhte hai frontend me kaise access kre-

### .env variables in frontend

-> agar kisi ne create react app se app banayi hai to mandatory hai env variable ka naam REACT_APP_xyz jaisa likho... or agar vite se banayi hai to VITE_xyz something...

-> mostly setups me or infact ***React*** me bhi hum env variables ko "process.env.REACT_APP_APPWRITE_URL" se access kr skte hai but react me nahi...

-> vite me "import.meta.env.VITE_APPWRITE_URL" se access milega ya to 

```js
const url = import.meta.env.VITE_APPWRITE_URL;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

console.log(url);
console.log(projectId);
```

-> ***RECOMMENDED*** :- Instead of writing import.meta.env everywhere, create a config file:- src/conf/conf.js


```js
const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
};

export default conf;
```

Now you can use:

```js
import conf from "./conf/conf";

console.log(conf.appwriteUrl);
```

This makes it easier to manage your configuration in one place.


## AppWrite
Appwrite provides backend as a service (BaaS). it is open source unlike firbase which is managed by google.
-> first of all we will create a account on appWrite and create new project...

-> apane env variables vagayera setup karne ke baad hum jaayenge appwritte pr apna project create krne..  
appwrite cloud hume 2 free projects banane ki limit deta hai to hum apna project create krenge phir naam daalenge or region se apane se closest region choose krenge .. region mtlb kaha mera project live hoga taaki waha pr mera data stored ho cload me ... agar india ka available na ho to geographically closest such as singapore  

-> then choose web application

-> then choose react kyunki hum react + vite use kr rahe hai

-> to hum react choose karenge

-> aapka project ready hone ke baad waha se project id copy krke apane env me paste krdo waha ka endpoint copy krkke apane env ke url portion me paste krdo...

-> baaki authentication wagayera explore kro appwrite ko explore kro... 

-> ab database me jao or create new database kro or uska naam blog rakho.. multiple data bases ho skte hai but hume abhi iski hi jarurat padegi..

-> ab uske baad uss database ki id ko copy kro or apane env me databse id me paste krdo

-> ab ek database me multiple collection ya multiple tables hote hai jaisa humne sql me bhi padh rakha hai so hum ek table ya collection create krenge ***articles*** naam se or hume uss collection ki id bhi chahiye hogi apane env me to wo bhi kr lenge.  

-> ek or setup uss article collection ke andar setting me jao or waa pr permissions karke aayega uska mtlb kon kon mere table me likh skta hai kon kon padh skta hai wagayera.... to waha pr all users select krenge mtlb ki jo ek baar ergisterd ho jaaye mere site se wahi ye sb operations perform kr paaye... konse operations? check kr do jo jo chhaiye... create read update delete..

-> ab attributes set karenge mtlb columns ko... ab columns wale section pr jaayenge create columns karenge ab yaha se apane columns create krenge ... ab yaha pura almost sql wala options hi rahenge ... hum mostly me varchar ka use karenge or key name me apan ecolumn ke titles enter karenge or sbko required pr check krenge mtlb not null...

-> phir index set karenge ya create karenge...

create index ->   
index key = status  
index type = key  
column = status  
order = ASC (Ascending)  
create  

#### index ?
An index is like the index page at the back of a textbook.

Imagine you have a 1000-page book.

Without an index

If you want to find the topic "React", you have to search page by page:

Page 1 ❌  
Page 2 ❌  
Page 3 ❌  
...  
Page 742 ✅  

This takes time.

With an index

You simply check the index:

React ............ 742  
Redux ............ 815  
Appwrite ......... 923  

You immediately know where to go.

That's exactly what a database index does.

### getting ***BUCKET ID***
-> go to storage in your project  

bucket hai kya ki hum kya kya store karenge to wo to storage me hi hoga na...

-> create bucket -> name = images(saari images hum yahi rakhenge) -> create

-> copy bucket id then paste it in your .env file

-> go to settings in your image bucket -> update permissions to All users -> check the permission that you need for your user abhi to mai sbko sb permission de raha hun -> update

***

