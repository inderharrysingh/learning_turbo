import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { loginOrSignup , User } from 'utility-functions'

export const authOptions : NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string ,
      clientSecret: process.env.GOOGLE_SECRET as string ,
    }),
  ],
  secret : process.env.NEXTAUTH_SECRET,
  
  callbacks: {
   
    async jwt({ token, account }) {
    

      if (account) {  
        token.accessToken = account.access_token 
      }

      const user : User  = {
        name : token.name || "",
        email : token.email || "",
        isUsingOAuth : true
      }

      const id = await  loginOrSignup(user);
      token.id = id;
      return token
    }
,

      // session call back is all afte the jwt and all prpperties set to jwt is part of token in seesion 
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      // session.accessToken = token.accessToken
      // session.user.id = token.id
      
      return session
    }

  }

  
}
const handler =  NextAuth(authOptions)
export { handler as GET , handler as POST };


