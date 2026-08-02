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
1. sbse pahala to authSlice ka reducer i.e. authSlice.reducer

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

### Container
isme bs styling properties add krte hai or baaki jo cheezein rehti hai wo as it is displat karwa dete hai.. ab iss fayda pata hai kya hai maan lo mujhe width chahiye 80% then mai container ka w-80 % krdunga bs ...

```js
import React from 'react'
function Container({children}) {
  return (
    <div className='w-full  max-w-7xl mx-auto px-4'>{children}</div>
  )
}
export default Container
```

### Header

Header bada hi optional hai mtlb isme hum log out button sbko to nhi dikha skte na.. jo login kiya hoga ussi ko dikhayenge... uske liye iske andar ek or component banayenge... logout.jsx

***LogoutBtn.jsx***
logout ke baad hume kuchh actions lena padega mtlb dispatch krna hoga to use import krenge slice ko import kareneg.. auth services chahiye hongi jiske basis pr chack krenge to use bhi import karenge..

```js
import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../features/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn
```


***Header.jsx***

```js
import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  // ab is tareeke ka navigate jb bhi bnta hai to generally ek array banaya jata hai or uske uppar loop kiya jata hai.. or wo array me collection of objects hote hai jisme kya ster hoga? navigation bar ke buttonns.. ab normally hota to naya button aane pr ek pura button add krte hum but yaha bs use array me add krdo or navigate uspr loop through krlega..
  const navItems = [
    {
      name: 'Home', // konsa button hai
      slug: '/', // slug yaani url mtlb kaha pr jaa raha hai navigate krke
      active: true
    },
    {
      name: 'Login', // konsa button hai
      slug: '/login', // slug yaani url mtlb kaha pr jaa raha hai navigate krke
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]




  return (
    <header className='py-3 shadow bg-gray-500'>
      {/* ab dekha container ka use? container kahi bhi use ho skta hai.. wo bs basic css ki property add krne ke liye hai.. */}
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            {/* yaha link me to ka mtlb hai ki logo pr click karenge to wapas hoe pr hi aayenge */}
            <Link to='/'> 
              <Logo width ='70px'/>
            </Link>
          </div>
          {/* ab ek unorderedlist bana kke conditional loop lagayenge apane navitems pr or waha se chezien laayenge yaaha pr */}
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)} // button click krne pr navigate kro? kaha lekr jau? item.slug pr yani uske url pr
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {/* ab dekhte hai logout button... humare pass authStatus availablle hai to usi se pucch lete hai ki true hai? mtlb logged in hoga to hi to logout dikhayenge */}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
```




### Footer

```js
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
```

### logo.jsx
ye ek logo yani image return krega jo ki hum kahi or use krenge jaise footer...

```js
import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>Logo</div>
  )
}

export default Logo
```

### Button.jsx

ye ek button ka reusable componnet hum design karenge jise chahe to multiple jagahon pr reuse kr skte hai ..

```js
import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props // iska mtlb ki inke alawa bhi agar aapne koi or props add kiye hai to unhe spread kr lete hai
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button
```

### Input.jsx

```js
import React,{useId} from 'react'

// forwardRef bs ek hook hi hai iske baare me achhe se online padh lena jyada kuchh hai nhi 
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'  htmlFor={id}>{label}</label>}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
```


### Select.jsx

```js
import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='' ></label>}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
        >
            {/* agar options me kucch value hi nhi hua or hum uspr loop laga diye to pakka crash kareg ausse bachane ke liye null safety check hoga.. null safety? are kuchh nhi hai condition hi to hai... */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// ab last input.jsx me humne forward ref ka use kiya tha waha alag way se kiya tha.. yaha bhi karenge but different syntactical way me

export default React.forwardRef(Select)
```

### Postcard.jsx
jaisa humne apane app me dekha tha ki ek card type ka appear ho raha tha hummare home page pr or uske uppar tap karne pr pura article open ho raha tha to haan wo bhi ek componennt hi hai ab use banate hai...

```js
import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

// ye sb services hum appWrote me jo postcard wala services banaye the waha se le rahe hai
function Postcard({$id, title, featuredImage}) {
    // ye jo $ sign use hua hai id ke saath ye appWrite ka syntax hai 
  return (
    //saara ka saara card hi clickabe hona chahiye isliye sbka Link ke andar wrap krdo
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* ab yaha mujhe image chahiye.. aisa koi method hai kya jo mere post ka mujhe preview deta ho.. haan jao check kro appwrite me config me getFilePreview naam se method to banaye ho jo ki fileid leta hai or wo return kr deta hai uska url */}
                {/* ab yaha pr humne $id ki jagah featuredImage ka use kyun kiya ? jbki wo tp id leta hai na... haan ye jo $id ye pure post ki id hai but hume image chahiye or featuredImage hi uski id bhi hai*/}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default Postcard
```

### React hook form

***Login.jsx***
```js
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom' // hume link chahiye hoga clickable banane ke liye or navigate kahi pr navigate krke jaane ke liye login ke baad
// mujhe apane authslice me se login ki functionality bhi chahiye hogi taaki login karwa paun mai..
import {login as authLogin} from '../features/authSlice' // login as authLogin ka mtlb hum apane iss file me login ko authLogin ke naam se use karenge
// simillarly authentication purpose ke liye authService bhi chahiyye hoga na..
import authService from '../appwrite/auth'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
// react hook form ka bhi use kr rahe hai to use bhi import karenge
import {useForm} from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useForm ko use karenge ab
    const {register, handleSubmit} = useForm()

    // ek useState ka use krenge errors display karwane ke liye

    const [error, setError] = useState("")

    // ab hum ek login naam se method banayenge jisse login karenge or async method banayege kyunki information submit hogi wapas aayegi kaafi kucchh ho skta hai

    const login = async (data) => {
        // sbse pehla kaam jo ki basic functionality hai ki jaise login start kro sbse pahale saare errors agar koi hai to clean out krdo
        setError("")
        try {
            const session = await authService.login(data) // ye yaha se jo bhi response aata hai wo aata hai ek session ... agar session hai to user loggedin hai agar session nhi hai to user logged in nnhi hai
            if(session){
                // agar session hai to sbse pahale currentuser ka data nikal lo
                const userData = await authService.getCurrentUser()
                // ab agar userData aaya hai to hume dispatch karna hoga 
                if(userData){
                    dispatch(authLogin(userData))
                }
                // ab jb user yaha tk aa gaya hai login ho chuka hai to use yaha rakhna hi kyun hai agar login ho gaya hai to kahi or bhejo use na
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='w-full flex items-center justify-center'
    >
        <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-25'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >Sign Up</Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            {/* react-hook-form */}
            {/* ab yaha dhyan den ahai ki onsubmit me kya hoga? jb hum useForm hook ka use kiye the to do cheezein li the ek register or ek handle submit to yaha pr handleSubmit hi pass hoga... or yaha interesting cheez ki handleSubmit khud me ek method hai or iske andar hume apna method pass krna hoga ki submit hone pr konsa method execute ho */}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    {/* ab yaha hum inputs banayenge or dhyaan dena ye humne jo input componnet banaya hai ye wahi input hai */}
                    <Input 
                    label="Email Address: "
                    placeholder="Enter your email"
                    type="email"
                    // yaha ye register ka kya kaam hai? register ek method hai jo ki react-hook-form se aata hai or ye input ko register krta hai react-hook-form ke andar taaki ye form ke andar ka data manage ho sake or ye register method ek object return krta hai jisme kuch properties hoti hai jaise onChange, onBlur, name, ref etc. to hum is object ko spread operator ke through input me pass krte hai taaki ye input react-hook-form ke sath connect ho jaye 
                    {...register("email", {
                        required: true,
                        validate: {
                            // yaha hum ek custom validation function bhi pass kr skte hai jaise ki email validation
                            matchPattern: (value) => 
                                // simple email regex
                                 /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address"
                            
                        }
                    })}
                    />
                    {/* simillarly password ke liye bhi input field banayenge  */}
                    <Input 
                    label="Password: "
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    />
                    {/* ab aayega humara custom designed button */}
                    <Button type="submit" className="w-full">Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
```

***Signup.jsx***
```js
import React, {useState} from 'react'
import authService from '../appwrite/auth' 
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form'
import { Button, Input, Logo } from './index' 

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async (data) => {
        setError("")
        try {
            // yaha pe signup ka logic hoga
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
            
        }
    }
  return (
    
    <div className='flex item-center justify-center '>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-25'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to Create account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >Sign In</Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input 
                    label= "Full Name: "
                    placeholder="Enter your full name"
                    type="text"
                    {...register("name", {
                        required: true,
                    })}
                    />
                    <Input 
                    label="Email Address: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => 
                                 /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address"
                            
                        }
                    })}
                    />
                    <Input 
                    label="Password: "
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                        }
                    })}
                    />
                    <Button type="submit" className="w-full">Create Account</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
```

### AutLayout.jsx
is component me humne ek basic layout banaya hai jisme header or footer dono included hai.. or iske beech me outlet ka use kiya hai jisse ki hum apane routes ke hisaab se content ko render kr sake... 

```js
// kaafi production grade applications me ye hota hai iska kaam hai ke user ko authenticate karna aur agar user authenticate nahi hai to usko login page pe redirect karna. Ye ek wrapper component hai jo ki aapke protected routes ke around wrap karega. isse hoga ye ki agar user authenticate nahi hai to wo login page pe redirect ho jayega aur agar user authenticate hai to wo protected route ke andar ka content dekh payega. Ye ek higher order component hai jo ki aapke protected routes ke around wrap karega.

import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }
        else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
  return loader ? <div className='flex justify-center items-center h-screen'>Loading...</div> : children
}
```




***

## State Management

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