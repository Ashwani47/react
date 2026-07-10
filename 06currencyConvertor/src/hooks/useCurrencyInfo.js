import {useEffect, useState} from "react";

//                                                                  STEP :- 1


// ab ye hook karega kya .. hum currency input pass karenge jaise maanlo mujhe inr ka conversion rate pata karna hai to yaha currency = inr aa jayega wo jayega fetch kr through api me inject hokr or ek reponse laayega ab hum use then ke jariye handle karenge... pahale use .json me convert karenge phir us jason me multiple entries hongi na to ab useState ke through set karenge apane data me .... ab in sbko useEffect ka ue kiye hai taaki jaise hi currency me change aaye re render krdo
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;