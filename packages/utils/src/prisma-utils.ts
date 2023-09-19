import { PrismaClient } from 'custom-prisma'
const prisma = new PrismaClient();

export interface User
{ name : string ,
     email : string , 
     isUsingOAuth : boolean
 }

//  find user (email)
export async function createUser( user  :  User ) {
    
         await prisma.$connect
        const newUser = await prisma.user.create({  data :  {  name : user.name , email : user.email , isUsingOAuth : user.isUsingOAuth  }  });
        return newUser ;
}



export async function loginOrSignup(user : User )  {

    // already exist 
    const alreadExist = await findUserbyEmail(user.email);
    if ( alreadExist ){
        return alreadExist.id;
    } 


    // create new  
    else{
        const newUser = await createUser(user);
        return newUser.id;

    }


}



// find by email , password 

export async function findUserbyEmail( email : string  ) {
    
   
    await prisma.$connect
    const user = await prisma.user.findFirst({ where : { email : email  }})
    return user;
}




// find by id user 



// user using  normal way 


// 



// save user  (user object )  : { name , email , opt password , isUsingOAuth : opt  } 




//  admin login with credentials 




// add product {title , description , price , sellerId : one who had created }  


// update course obj with optional properties  have something in zod


// get  cart userid 


// order give userid and product id 





