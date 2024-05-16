import prisma from "../../../composables/prisma"
import nodemailer from "nodemailer"

const router = createRouter()

router.post("/create", defineEventHandler(async (event) => {
    const { apiSecret } = useRuntimeConfig(event)
    const { fullname, email, message } = await readBody(event)
    try {
        await prisma.contact.create({
            data: {fullname, email, message, }
        })
        const html = `
                <section className="flex flex-col">
                    <h2 style="color: rgb(51,65,85); text-align: center; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem; border-bottom: 1px solid #eee; margin: .5rem; padding-bottom: .5rem;" className="text-slate-700 text-center">New Contact Message!</h2>
                    <div className="flex gap-1">
                    div style="background: rgb(59, 130, 246); color: white; text-align: center; border-radius: 5px;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Contact Details</div>
                        <div className="flex flex-col flex-1">
                            <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">${fullname}</h4>
                            <p style="color: rgb(100,116,139); font-size: 0.75rem; line-height: 1rem;" className="text-xs text-slate-500">Email: ${email}</p>
                        </div>
                        <p style="color: rgb(100,116,139); font-size: 0.875rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">${message}</p>
                    </div>
                </section>
            `;
        
        const transport = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })
        transport.sendMail({
            // from: `Karamlaza.com <brunomany1@gmail.com>`,
            from: `Karamlaza.com <${process.env.MAIL_FROM}>`,
            to: ['Karamlaza Admin <brytjunioriaku@gmail.com>', 'Karamlaza Admin <brunomany1@gmail.com>'],
            bcc: 'Karamlaza Admin <adefredy1@gmail.com>',
            replyTo: email?.toString(),
            subject: 'New Contact Message from Karamlaza',
            html
        }, (err, info) => {
            if (err) {
                return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
            }
            console.log(`Message sent: ${info?.messageId}`)
        })
    } catch (error) {
        
    }
    console.log('Create End Point')
    console.log({ fullname, email, message })
}))

router.post("/edit", defineEventHandler( async(event) => {
    const { fullname, email, message } = await readBody(event)
    console.log('Edit End Point')
    console.log({ fullname, email, message })
}))

export default useBase("/api/contact", router.handler)