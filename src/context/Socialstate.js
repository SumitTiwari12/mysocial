import { useState } from "react"
import Socialcontext from "./socialcontext"

const Socialstate = (props)=>{
    let person = {
        name:"Shivam",
    }
    const[user,setUser] = useState(person)
    const getdata = ()=>{
        setTimeout(() => {
            setUser({name:"Shivanshu"})  
        }, 3000);
    }
    return(
    <Socialcontext.Provider value={{user,getdata,person}}>
        {props.children}
    </Socialcontext.Provider>
    )
}

export default Socialstate