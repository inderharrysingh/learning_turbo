import { NextAuthProvider } from "./NextAuthProvider"
import { RecoilProvider } from "./Recoilprovider"
import { Navbar } from "ui"

export function ClientProvider({ children }  : { children : React.ReactNode }){

    return (
        <RecoilProvider>
        <NextAuthProvider >
            <Navbar />
                          {children}  
       </NextAuthProvider>
     </RecoilProvider>
    )


}