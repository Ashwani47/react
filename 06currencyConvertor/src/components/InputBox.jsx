import React, { useId } from 'react'

//                                                               STEP :- 2


// creating reusable component for input field and we will also use it for output field
function InputBox({
    //label shows "from", "to"
    label,
    //for the input field to display the amount
    amount,
    //what happen when amount is changed? thats why onAmountChange. this is a method itself as it will be passed via usestate from where we use this components
    onAmountChange,
    //simillar to onAmountChange
    onCurrencyChange,
    // displaying the currency that is currently selected
    selectCurrency = "usd",
    // amount disabled and current disabled are not mandatory fields but it is to check weather amount and currency options are available
    amountDisable = false,
    currencyDisable = false,
    //here we will pass the array of currency options which we will fetch from api... and to be safer side we will pass empty array for deafault
    currencyOptions = [],
    // this field is for when user wants to add some extra css
    clasName = "" }) {

        // ab ye useId ek hook hai jo ki random string ya value return krta hai jo ki unique hota hai ab isse hoga kya kuchh khass nhi its just kihum ab o label or input usko iske through bind kr denge ... mtlb kuchh nhi yarr jaise hota nhi tha html me ki input box hai to uska ek id set kiye hum ab us input ke saath ek lable chipkanna hai to uss id ko label me for field me likh dete the? same wahi hoga.. yaha useId wahi unique values dega jo ki as a id use hongi... not mandatory.. iske bina bhi sb perfect hai .. simple words me jitane bhi input value ya kuchh hoga uske saath ek uniqueId chipka deta hai id ki tarah
        const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${clasName}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                    id={amountInputId}
                    type="number" 
                    placeholder='Amount' 
                    disabled={amountDisable} 
                    value={amount} 
                    //here onChange we will fire an event and check if onChangeAmount directly brings value then use it else use the target value...
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    className='outline-none w-full bg-transparent py-1.5' 
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select 
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                >
                    
                    {currencyOptions.map((currency) => (
                        // jb hum aise koi loop lagate hai to react performance pr impact pdta hai kyunki wo prevent krta hai kahi ek hi component baar baar to nhi na banaye jaa raha to usko prevent ya handle krne ke liye ek property hai key naam se wo use krneg hum yaha
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}


// normally chhote projects me to hum directly aise hi export kr dete hai but bade projects me hum components folder me ek import.js naam se file banate hai phir waha pr saare components ko import krte hai phir waha se us index.js file ko hi export kr dete hai jo ki jyada better approach hai isse hume jaha bhi jo bhi components use krne honge waha multiple comopenets ko import krne ke bajaye hum seedhe is index.js ko importt kr lenge
// index.js is like a dockyard for components

export default InputBox