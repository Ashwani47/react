This is our mega project so here we will use all of our knowledge and also learn many new thing such as Appwrite, environment variables etc.

***

# SET-UP For Our MegaBlog Project

### dependencies That we need :- react-router-dom, react-redux, @reduxjs/toolkit, appwrite, @tinymce/tinymce-react, html-react-parser, react-hook-form, tailwind

## <u>Environment Variables</u>
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


## <u>AppWrite</u>

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

# CONCEPTS

## <u>Vendor Lock-In</u>

### What is Vendor Lock-In ?

Vendor lock-in is a situation where your application becomes so dependent on a particular service or company's technology that switching to another provider later becomes difficult, time-consuming, or expensive.

Simple example

Imagine you buy an Android phone.

You can install apps from many places.  
You can change brands (Samsung → OnePlus → Motorola) fairly easily.  

Now imagine a device that only works with one company's accessories, apps, and chargers. Once you're in that ecosystem, leaving becomes difficult.

That's vendor lock-in.

### Is Appwrite vendor lock-in?

Yes, to some extent. Every Backend-as-a-Service (BaaS) has some level of vendor lock-in.

The good news is that Appwrite is open source.

That means if one day you don't want to use Appwrite Cloud anymore, you can:

Self-host Appwrite on your own server.  
Export your data.  
Continue using the same Appwrite APIs.

This reduces lock-in compared to fully proprietary services.

### Solution?
To Avoid vendor Lock_in we use services... services? just classes...

***A service is a class or module whose job is to perform a specific task for your application.***

Think of it like hiring specialists.  
Imagine you're building a house.

👷 Electrician → Handles electricity.  
🚰 Plumber → Handles water.   
🧱 Mason → Builds walls.  

You don't ask the mason to fix electrical wiring.  
Similarly, in a React app:

AuthService → Handles login, signup, logout.  
DatabaseService → Handles CRUD operations.  
StorageService → Handles image uploads.  
EmailService → Sends emails.  

Each service has one responsibility.

***

# CODING

## <u>Creating Services</u>

Create a folder in src and name it Appwrite since we are going to write down all the appwrite related services over here...  

***

### ***auth.js***
This is Appwrite's ***Authentication*** related Service

```js
// immporting conf.js
import conf from '../conf/conf.js'
```
ab hum chahe to appwrite ke documentation pr authentication services wala jo section hai waha se help le skte hai..

```js
import { Client, Account, ID } from "appwrite";
```


```js
export class AuthService {}

export default AuthService;
```
Ab mujhe AuthServices naam se ek calss banani hai or use export karenge but lekin jo bhi iss authservise ko import karega to sbse pahale use ek object banana hoga uske baad usko use kr paayega usse badhiye kyun na hum object bana kar hi export kr de?

```js
// new one
export class AuthService {}

const authService = new AuthService()

export default authService;
```

ab hume client or account banana hoga kyunki sb kaam inhi pr to honge... ab appwrite ke documentation me dekhenge to usne directly bana diya hai...but hum yaha karenge..

```js
export class AuthService {
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId),
        this.account = new Account(this.Client)
    }
}
```

yaha pr humne constructor banaya hai uske andar wo kaam kiya hai.. pr kyun ? hum to object bana rahe hai na or hum chahte hai jb koi iss AuthService class ka object banaye tb jaakr mera setEndpoint and seProject set ho... uske liye humne constructor banaya hai...

ab hum ***createAccount*** method banayenge taaki jb bhi is object ko import kare wo account create kr paaye ab accounnt kaise create hoga usse uska matlb nhi hai wo bs emai, name, password bhej de or ye function uske liye uska account create kr dega... ab account creation ka method fail bhi ho skta hai to usse bachange ke liye hum ***try catch*** ke concept ka use karenge


```js
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password
            })
            // ceck if user Account is created or not
            if (userAccount) {
                // call another method to directly login... its upto you ki aap chahte ho ki userAccount banane ke baad succefull ka message dikha do uske baad boldo ki ab login krlo... ya chaho to userAccount ban gaya to login bhi krwa hi do jaisa hum yaha karenege...
                return this.login({email, password});
            } else {
                return userAccount;
            }      
        } catch (error) {
            throw error;
        }
    }
```

-> ab hum simillarly ***login*** ka function bhi reate kr lenge

```js
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
        } catch (error) {
            throw error;
        }
    }
```

-> ***LogOut*** using delete Sessions --> Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use Delete Sessions instead.

```js
    async logout() {
        try {
            // // this deleteSessions() will delete all the sessions of the user from every browsers
            // await this.account.deleteSessions();
            
            // this logout the current session only... ya phir current ki jagah hum session id's bhi de skte hai jaha jaha se logout krna hai ya "all" likh do tb bhi sb jagah se dlete ho jayega
            await this.account.deleteSession({ sessionId: "current" })
        } catch (error) {
            console.log("AppWrite Service :: logout :: error", error);
        }
    }
```

-> we will create another method ***getCurrentUser()*** to Get the currently logged in user.

```js
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            // throw error; // agar hume error throw nhi krni dusre tareek se dekhni hai
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        // agar try me kuchh mila hi nhi koi account mila hi nhi to?
        return null;
    }
```

ab ek kamal ki baat ki jab bhi mujhe future me koi project aaata hai jisme authentication services use ho rahi hai or wo appwrite se hai to as it is ye pura ka puraa code use ho jaayega haan bus documentation padh lena ki kucchh pdate ho to kr lena...

```js
import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId),
        this.account = new Account(this.Client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password
            })
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }      
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSession({ sessionId: "current" })
        } catch (error) {
            console.log("AppWrite Service :: logout :: error", error);
        }
    }

}

const authService = new AuthService()

export default authService;
```

***

### config.js

major configuration for appwrite is done here...

-> isme hum database and storage se related kaam karne waale hai...jiske liye yaha hume kucch or cheezein import krni hongi...

```js
import conf from '../conf/conf.js'
import { Client, ID, Databases, Query, Storage } from "appwrite";
```

baaki same cheezein repeat karenge jaise class banana objext banana export krna and all.. 

```js
export class Service {}

const service = new Service();

export default service;
```

simillarly jaise waha variables banaye the client and auth naam se or baad me constructor me initialize kiye the waise hi yaha bhi client, databases, storage banayenge or uske baad uska constructor bana denge...

```js
export class Service {
    client = new Client()
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
}
```

in sbka refernce bhi appwrite ke docs pr available hai hum waha se use kr skte hai...

ab isme apani functionalities add karenge...   

->sbse pahali functionality add krte hai ***createPost*** ki

isme kaafi cheezien user se parameters ke form me lenge jaise title, slug, content, featuredImage, status, userId ...

```js
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // Database Id
                conf.appwriteCollectionId, // Collection Id
                slug, // document Id
                {   // data
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }
```

-> ***updatePost***

```js
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }
```

-> ***deletePost***

```js
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("AppwriteService :: deletePost :: error", error);
            return false
        }
    }
```

-> id ka use krte hue yaani slug ka use krte hue ek document lana hai to ? detDocument use krenge...  ***getPost***  

```js
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false
        }
    }
```

-> id ka use krte hue saare post ko lekr ana hai to listDocument ka use karenge... ***getPosts*** but mai directly collection id ke saare documnets nhi lunga kyunki agar aisa kiya to mere pass wo document bhi aa jayenge jinka status active nhi hai... to uske liye hume seekhana hoga ki queries kaise krte hai...

```js
    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [ // queries
                    Query.equal("status", "active") // query kro jisme wahi likar aao yaani equal jiska status active ho... ab aisi queries lagane ke liye aapko apane collection me indexes ka banaye hona bahot jaruri hai...
                ]
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false
        }
    }
```

-> ***uploadFile*** Service... haalaki isko hum aage jaakr ek alag file me likhnge isko bhi or delete file ko bhi...

```js
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false
        }
    }
```

-> ***deletFile***
    
```js
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false
        }
    }
```

-> ***getFilePreview***

```js
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
```

aise hi hum apane requiements ke anusar or bhi functionalites add kr skte hai jsie download file etc... wo sb hum baad me assignment me karenge.

***

## Configuring Redux Toolkit

-> ***Creating Store***

creating the store named folder inside our src folder then creating a store.js  inside it...

agar hume yaad ho to sbse pahale store create krte the uske liye 
```js
import { configureStore } from "@reduxjs/toolkit";
```
ye configureStore ka use krke hi store bnta hai or uss store me hum global variables bana kr store krte the... 
iske baad reducers banate the taaki un global variables ko update kr ske...

```js
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {} // abhi ruk ke reducer pass krenge pahale use bana to le
})

export default store;
```

ab hum store mainly authentication ke liye bana rahe haai taaki check kr paaye user logged in hai ya nahi...

-> to src ke andar hi ek features naam ka folder banayenge or uske andar authSlice.js naam ka file banayenge...

-> ***authSlice.js (Reducer)***

sbse pahale ek initial state banate hai...

ab iske baad apna slice banayenge

iske baad sbse pahale to hume do cheezen export krni padti hai ...
1. sbse pahala to 

2. reducers ke individual methods ko bhi export krna padta hai...

hence our reducer is ready...

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, // user is authenticated or not
    userData : null // agar user ka kuchh data lena ho to uske liye
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer
```

now our store might look like this:- 

```js
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'

const store = configureStore({
    reducer: authReducer
})

export default store;
```

***

## Creating Components

yaha hum components ko Ek component naam ke folder me banayenge or un sbko ek ek krke export na krke blki barrel export krenge using index.js

### Header



### Footer



***

### State Management

humare main kaam abhi App.jsx me hoga..kya?  
yaha hum dekhenge or manage karnege ki jaise hi mera page load ho to sbse pahale hum check kre ki user login hai ki nahi...  
-> agar logged in hai to kuchh show karenge or nahi hai to kuchh or 

-> ***Loading state***  

sbse pahala state chahiye hoga hume loading ka? appwrite data kahi se to fetch krke laayega na to usme time bhi lag skta hai to uske liye big projects me achhi practice hoti hai for conditional rendering using loading.. agar loading true hai to loading ka icon show krdo wrna nhi...

-> ***useDispatch***

ab hum hume react ko redux ke saath jodna hota hai to dispatch ka reuirement bhi to padta hai...

--> hum kucch imports karenge jaise useDispatch apani authService etc.
or uske baad hum chahte hai ki jaise hi application load ho ek useEffect lo or puchho uss service se ki is User Logged in or not

-> till now our ***App.jsx*** might look like this :- 

```js
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './features/authSlice'

function App() {
  const [loading, setLoading] = useState(true) // by default kept true kyunki hum useEffect ka use krenge to waha pr false kr denge agar required pada to
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser() // authservice se current user ki detail lao
    .then((userData) => { // agar detail agayi to then
      if(userData){ // check if userData actually exists or not
        dispatch(login(userData)) // usko dispatch krdo .. kaha? authSlice me login me bhej do waha se status true ho jaayega..
      } else {
        dispatch(logout())
      }
    }) 
    .finally(() => setLoading(false)) // finally to execute hoga hi hoga
  }, [])

  // conditional renderring
  if(!loading){
    return (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-500 text-center'>
        <div className='w-full block'>
          <Header/>
          <main>
            TODO: {/* </Outlet> */}
          </main>
          <Footer/>
        </div>
      </div>
    )
  } else{
    return null
  }
}

export default App
```

abhi humne apane main file me provider set nhi kra kyunki hum react redux ka use kr rahe hai to provider bhi to setUp krna hoga na to wo kr lete hai...

-> it should look like this ...

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

```