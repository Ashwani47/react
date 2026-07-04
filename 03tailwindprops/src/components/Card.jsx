import React from "react"; 

function Card({username,btnText = "Default clicked!!"}){ // now jb bhi hum koi bhi component banate hai chahe wo app hi kyunn na ho wo component props ko access kr skta hai or uske liye hume us component me props as a parameter pass krna hota hai... ya to uss props ko obeject destructuring ke through bhi pass kr skte hai taaki har jagah props.usernam, props.btnText na likhana ho... so yaha hum destructuring ka hi use krenge...
  // console.log("Props:- ", props); // abhi props me kya aa raha? since props kuchh nhi just a obbject hai jo ki data ko store krta hia or abhi hhumne card use krte waqt koi data diya nhi hai to abhi ye empty object aa raha hai... jb hum koi property card commponent ko use krte waqt denge to wo yaha object ke form me aa jayega... or hum usko access kr skte hai... jaise ki humne app.jsx me card ko use krte waqt channel property di hai to wo yaha props ke andar aa jayegi or hum usko access kr skte hai...

  // console.log(props.username); // ab hum baar baar props.username na likhana pade uske liye function parameter me jo props pass kr rahe hai wo hai kya ? ek object hi na to chahe to wahi object destructuring ka use krke hum directly function parameter me hi destructuring kr skte hai jaise function Card({username}){...} or ab hum directly username ko access kr skte hai...

  // ab is props ko use kaise kare ? are simple variable hi to hai. mtlb jbb bhi koi card component banao to jis username ka bana rahe ho wo uske propertiest me add krdo or yaha kya hoga ki wo is funnction ke pass ayega or props me object ke form me store ho jayega ab jaha bhi user ke name ka hard code krke likhe the uski jagah hum props.username ko use kr skte hai... or agar humne destructuring kiya hai to direct username ko use kr skte hai...mtlb variable ko inject kr diya mai...

  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm rounded-2xl bg-white shadow-xl p-6 hover:shadow-2xl transition duration-300">
        <h1 className="bg-green-400 text-black p-4 rounded-xl text-2xl font-bold text-center">
          {username} Test  
          {/* jaise humne yaha pr innject kr diya hai.... */}
        </h1>

        <p className="mt-4 text-gray-600">
          Congratulations! {username} is working.
        </p>

        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          {btnText}
        </button>
      </div>
    </div>
    );
}

export default Card;