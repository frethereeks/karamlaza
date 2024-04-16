type ApproachProp = {
    id: string
    title: string
    text: string
}

type BlogItemProp = {
    id: string
    title: string
    slug: string
    images: string[],
    text: string,
    category: string,
    createdAt: Date,
    author?: {
        id: string
        firstname: string
        lastname: string
        image: string
    },
}