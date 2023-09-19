"use client"
// import { useSession, signIn, signOut } from "next-auth/react"
import { Card } from 'ui'
import {  useRecoilState, useRecoilValue  } from "recoil"
import {  userState,getUsername } from "store"

import { Nav } from './Navbar'

export default function Component() {

//  const session =   useSession();
  
  return (
    <>
     
        <div>
          {/* <Nav /> */}
            {/* <h1>{session.status}</h1>   */}
          {/* <button onClick={ () => signOut()}>SignOut</button> */}
        </div>
        
        <div>
          Pandas
        {/* <button onClick={() => signIn()}>SignIn</button> */}
        </div>
    
    </>
  )

}