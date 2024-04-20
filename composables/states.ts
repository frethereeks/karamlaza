export const useProductState = () => useState<ProductProps[]>('products', () => [
    {
        id: "8025820580",
        title: "Carraviggio Curved Chair",
        price: 1850000,
        featured: false,
        category: "Living Room",
        description: "Combination of wood and wool",
        inventory: 4,
        image: "carraviggio_curved_chair.jpg"
    },
    {
        id: "8025820581",
        title: "Carravio Night Chair",
        price: 1125000,
        featured: true,
        category: "Garden/Balcony",
        description: "Combination of wood and wool",
        inventory: 10,
        image: "carravio_night_chair.jpg"
    },
    {
        id: "8025820582",
        title: "Carravio Slim Chair",
        price: 995000,
        featured: false,
        category: "Chair",
        description: "Combination of wood and wool",
        inventory: 7,
        image: "carravio_slim_chair.jpg"
    },
    {
        id: "8025820583",
        title: "Essence Accent Chair",
        price: 847000,
        featured: false,
        category: "Garden/Balcony",
        description: "Combination of wood and wool",
        inventory: 11,
        image: "essence_accent_chair.jpg"
    },
    {
        id: "8025820584",
        title: "Keegan Checks Chair",
        price: 1650000,
        featured: true,
        category: "Living Room",
        description: "Combination of wood and wool",
        inventory: 9,
        image: "keegan_checks_chairs.jpg"
    },
    {
        id: "8025820585",
        title: "Lagoon Patio Chair",
        price: 2075000,
        featured: true,
        category: "Dining Room",
        description: "Combination of wood and wool",
        inventory: 0,
        image: "lagoon_patio_chair.jpg"
    },
    {
        id: "8025820586",
        title: "Haven Wingback Chair",
        price: 2150000,
        featured: false,
        category: "Sofa",
        description: "Combination of wood and wool",
        inventory: 10,
        image: "large_lagoon_lounge.jpg"
    },
    {
        id: "8025820587",
        title: "Moonlit Muse Chair",
        price: 1015500,
        featured: false,
        category: "Chair",
        description: "Combination of wood and wool",
        inventory: 13,
        image: "moonlit_muse_chair.jpg"
    },
    {
        id: "8025820588",
        title: "Nova Naving Sidetables",
        price: 1425000,
        featured: false,
        category: "Sofa",
        description: "Combination of wood and wool",
        inventory: 19,
        image: "nova_naving_sidetables.jpg"
    },
    {
        id: "8025820589",
        title: "Nova Nest Armchair",
        price: 2105000,
        featured: true,
        category: "Chair",
        description: "Combination of wood and wool",
        inventory: 3,
        image: "nova_nest_armchair.jpg"
    },
    {
        id: "8025820590",
        title: "Nova Rest Slimchair",
        price: 2250000,
        featured: true,
        category: "Dining Room",
        description: "Combination of wood and wool",
        inventory: 10,
        image: "nova_rest_slimchair.jpg"
    },
    {
        id: "8025820591",
        title: "White Accent Chair",
        price: 1355000,
        featured: false,
        category: "Chair",
        description: "Combination of wood and wool",
        inventory: 7,
        image: "white_accent_chair.jpg"
    },
    {
        id: "8025820592",
        title: "Willow Lounge Chair",
        price: 812000,
        featured: false,
        category: "Garden/Balcony",
        description: "Combination of wood and wool",
        inventory: 9,
        image: "willow_lounge_chair.jpg"
    },
    {
        id: "8025820593",
        title: "Whisper Slipper Chair",
        price: 2465000,
        featured: true,
        category: "Dining Room",
        description: "Combination of wood and wool",
        inventory: 6,
        image: "willow_lounge_chairs.jpg"
    },
    {
        id: "80258205894",
        title: "Willow Patio Chair",
        price: 1085000,
        featured: false,
        category: "Garden/Balcony",
        description: "Combination of wood and wool",
        inventory: 11,
        image: "willow_patio_chair.jpg"
    },
])

export const useBlogState = () => useState<BlogItemProp[]>('blogs', () => [
    {
        id: "8025620",
        title: "The Ultimate Furniture Guide for 2024",
        slug: "the-ultimate-furniture-guide-for-2024",
        category: "Collection",
        images: ["keegan_checks_chairs.jpg", "carravio_slim_chair.jpg", "nova_naving_sidetables.jpg"],
        text: "<p>The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.</p><p>The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.</p><p>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element. A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method.</p>",
        author: {
            id: "38025602",
            firstname: "Frederick",
            lastname: "Jones",
            image: "willow_lounge_chairs.jpg",
        },
        createdAt: new Date("4/14/2024"),
    },
    {
        id: "8025621",
        title: "Designing Dreams: Unraveling the Art of Furniture Colors",
        slug: "designing-dreams-unraveling-the-art-of-furniture-colors",
        category: "Home Decor",
        images: ["essence_accent_chair.jpg", "carravio_slim_chair.jpg", "willow_lounge_chairs.jpg"],
        text: "<p>The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.</p><p>The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.</p><p>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element. A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method.</p>",
        author: {
            id: "38025621",
            firstname: "Godstime",
            lastname: "John",
            image: "keegan_checks_chairs.jpg",
        },
        createdAt: new Date("4/9/2024"),
    },
    {
        id: "8025622",
        title: "Elevate your Home: Get Ready for Karam-Revolution",
        slug: "elevate-your-home-get-ready-for-karam-revolution",
        category: "Inspiration",
        images: ["large_lagoon_lounge.jpg", "willow_lounge_chairs.jpg", "keegan_checks_chairs.jpg"],
        text: "<p>The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.</p><p>The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.</p><p>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element. A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method.</p>",
        author: {
            id: "38025622",
            firstname: "Esther",
            lastname: "Obama",
            image: "carravio_slim_chair.jpg",
        },
        createdAt: new Date("3/25/2024"),
    },
    {
        id: "8025623",
        title: "Discover the Perfect Combination to Spice up your Private Rooms",
        slug: "discover-the-perfect-combination-to-spice-up-your-private-rooms",
        category: "Home Decor",
        images: ["nova_nest_armchair.jpg", "nova_rest_slimchair.jpg", "essence_accent_chair.jpg"],
        text: "<p>The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.</p><p>The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.</p><p>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element. A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method.</p>",
        author: {
            id: "38025623",
            firstname: "Angela",
            lastname: "Banks",
            image: "large_lagoon_lounge.jpg",
        },
        createdAt: new Date("3/3/2024"),
    },
])