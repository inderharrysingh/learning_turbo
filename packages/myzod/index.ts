import { z} from 'zod'

const authUser = z.object({
    email : z.string().email(),
    name : z.string().min(1).max(40),
    

})