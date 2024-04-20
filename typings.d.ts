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
    createdAt: Date | string,
    author?: {
        id: string
        firstname: string
        lastname: string
        image: string
    },
}

type ProductProps = {
    id: string
    title: string
    price: number
    featured: boolean
    category: string
    description: string
    inventory: number
    image: string
}