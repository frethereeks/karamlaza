import { writeFile } from "fs/promises"
const router = createRouter()

// create shop
router.post("/create", defineEventHandler(async (event) => {
    const files: any = await readMultipartFormData(event)
    const images = files.map((item: any) => item.name === "images")
    const uploadPath = `./public/images/shop/${images.filename}`
    await writeFile(uploadPath, images.data)
    return uploadPath;
}))

export default useBase("/api/shop", router.handler)