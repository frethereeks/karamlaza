import { Prisma } from "@prisma/client"



const router = createRouter()

const allUsers = [
        {
            id: "80250",
            firstname: "Angela",
            lastname: "Jones",
            email: "angelajones@gmail.com",
            password: "Fredericks",
            image: "essence_accent_chair.jpg",
        },
        {
            id: "80251",
            firstname: "Dorcas",
            lastname: "Omoh",
            email: "dorcasomoh@gmail.com",
            password: "Fredericks",
            image: "moonlit_muse_chair.jpg",
        },
    ]


router.post("/", defineEventHandler( async(event: any) => {
    const { email, password }: { email: string, password: string } = await readBody(event)
    console.log({email, password})
    try {
        const user = await allUsers.find(el => el.email === email.toLowerCase() && el.password === password)
        if (user) {
            setResponseStatus(event, 200, 'Found Resources')
            return { user, message: `Welcome Back ${user.firstname} ${user.lastname}.`, error: false }
        }
        else {
            // setResponseStatus(event, 404)
            return createError({ statusCode: 404, statusMessage: 'Invalid username and Password'})
        }
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: `Something went wrong at ${error}`})
        
    }

}))

export default useBase("/api/login", router.handler)


type IBody = {
    email: string
    password: string
}

// export default defineEventHandler<{ body: IBody }>(async (event) => {
//     const allUsers = [
//         {
//             id: "80250",
//             firstname: "Angela",
//             lastname: "Jones",
//             email: "angelajones@gmail.com",
//             password: "1961961",
//             image: "essence_accent_chair.jpg",
//         },
//         {
//             id: "80251",
//             firstname: "Dorcas",
//             lastname: "Omoh",
//             email: "dorcasomoh@gmail.com",
//             password: "1961961",
//             image: "moonlit_muse_chair.jpg",
//         },
//     ]
//     const { email, password }: IBody = await readBody(event)
//     console.log({ email, password })
//     try {
//         const user = await allUsers.find(el => el.email === email.toLowerCase() && el.password === password)
//         if (user) return user
//         else throw createError({ statusCode: 402, statusMessage: `Invalid user detected.` })
//     } catch (error) {
//         throw createError({ statusCode: 201, statusMessage: `Welcome back ${email}` })

//     }
// })