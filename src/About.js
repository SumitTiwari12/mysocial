import React, { useContext, useEffect } from 'react'
import Socialstate from './context/Socialstate';
import Socialcontext from './context/socialcontext';

function About() {
    const {user,getdata,person} = useContext(Socialcontext)
    console.log(user)
    const a = useContext(Socialcontext)
    console.log(a)
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      {a.person.name}
      {user.name}
    </div>
  )
}

export default About
