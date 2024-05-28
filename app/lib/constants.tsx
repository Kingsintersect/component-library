import { MenuItem } from "../components/NavBar";

export const menuItems: MenuItem[] = [
    { menuText: 'Administrator', menuUrl: '/dashboard' },
    { menuText: 'About', menuUrl: '/about' },
    { menuText: 'Gallery', menuUrl: '/gallery' },
    { menuText: 'Sign In', menuUrl: '/login' },
    { menuText: 'Sign Up', menuUrl: '/register' },
    {
        menuText: 'Profile', menuUrl: '/', extended: [
            { menuText: 'Profile', menuUrl: "/profile" },
            { menuText: 'Sign Out', menuUrl: "/logout" }
        ]
    },
];


export const heroCarouselData = [
    {
        colorDeep: "#802FDE",
        colorLite: "#E8E2F7",
        mainText: "Innovative",
        buttonText: "LEt's Go",
        subText: "Regardless of if you’re starting a new company and in need of a logo Regardless of if you’re starting a new company and in need of a logo.Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/pictures/nature-1.jpg",
    },
    {
        colorDeep: "#E50087",
        colorLite: "#FFE5F4",
        mainText: "Time Concious",
        buttonText: "LEt's Go",
        subText: "Regardless of if you’re starting a new company and in need of a logo. Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/pictures/nature-2.jpg",
    },
    {
        colorDeep: "#14B789",
        colorLite: "#D5F8EF",
        mainText: "Result Driven",
        buttonText: "LEt's Go",
        subText: "Regardless of if you’re starting a new company and in need of a logo. Regardless of if you’re starting a new company Regardless of if you’re starting a new company and in need of a logo. and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/pictures/nature-3.jpg",
    },
    {
        colorDeep: "#00AEE5",
        colorLite: "#D8F6FF",
        mainText: "At Your Service (24/7)",
        buttonText: "LEt's Go",
        subText: "Regardless of if you’re starting a new company and in need of a logo. Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/pictures/nature-4.jpg",
    },
    {
        colorDeep: "#DAAB00",
        colorLite: "#FDF3CE",
        mainText: "Result Driven",
        buttonText: "LEt's Go",
        subText: "Regardless of if you’re starting a new company and in need of a logo. Regardless of if you’re starting a new company and in need of a logo. Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/pictures/nature-5.jpg",
    },
];

export const data = [
    {
        colorDeep: "#802FDE",
        colorLite: "#E8E2F7",
        mainText: "Innovative",
        subText: "Regardless of if you’re starting a new company and in need of a logo",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/img1.png",
    },
    {
        colorDeep: "#E50087",
        colorLite: "#FFE5F4",
        mainText: "Time Concious",
        subText: "Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/img2.png",
    },
    {
        colorDeep: "#14B789",
        colorLite: "#D5F8EF",
        mainText: "Result Driven",
        subText: "Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/img3.png",
    },
    {
        colorDeep: "#00AEE5",
        colorLite: "#D8F6FF",
        mainText: "Result Driven",
        subText: "Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/img4.png",
    },
    {
        colorDeep: "#DAAB00",
        colorLite: "#FDF3CE",
        mainText: "Result Driven",
        subText: "Regardless of if you’re starting a new company and in need of a logo.",
        shadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        mobileShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important",
        img: "/img5.png",
    },
];
export const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Image Gallery", url: "/gallery" },
    { label: "Administrator", url: "/dashboard" },
];


export const productCardData = [
    {
        imgurl: "/",
        title: "Slide 1",
        price: "Price tag",
    },
    {
        imgurl: "/",
        title: "Slide 2",
        price: "Price tag",
    },
    {
        imgurl: "/",
        title: "Slide 3",
        price: "Price tag",
    },
    {
        imgurl: "/",
        title: "Slide 4",
        price: "Price tag",
    },
    {
        imgurl: "/",
        title: "Slide 5",
        price: "Price tag",
    },
    {
        imgurl: "/",
        title: "Slide 6",
        price: "Price tag",
    },
]
export const slideMenu = [
    { title: "Nature 1", url: "/pictures/nature-1.jpg" },
    { title: "Nature 2", url: "/pictures/nature-2.jpg" },
    { title: "Nature 3", url: "/pictures/nature-3.jpg" },
    { title: "Nature 4", url: "/pictures/nature-4.jpg" },
    { title: "Nature 5", url: "/pictures/nature-5.jpg" },
    { title: "Nature 6", url: "/pictures/nature-6.jpg" },
    { title: "Nature 7", url: "/pictures/nature-7.jpg" },
    { title: "Nature 8", url: "/pictures/nature-8.jpg" },
    { title: "Nature 9", url: "/pictures/nature-9.jpg" },
]

export const parallaxData = [
    {
        title: "Slide 1",
        subTitle: "Subtitle",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at  ullamcorper velit. Nulla ligula nisi,imperdiet ut lacinia nec,  tincidunt ut libero. Aenean feugiat non eros quis feugiat."
    },
    {
        title: "Slide 2",
        subTitle: "Subtitle",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at  ullamcorper velit. Nulla ligula nisi,imperdiet ut lacinia nec,  tincidunt ut libero. Aenean feugiat non eros quis feugiat."
    },
    {
        title: "Slide 3",
        subTitle: "Subtitle",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at  ullamcorper velit. Nulla ligula nisi,imperdiet ut lacinia nec,  tincidunt ut libero. Aenean feugiat non eros quis feugiat."
    },
]

export const productDetailData = {
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec",
    price: "$12.5",
    imageUrl: [
        '/pictures/nature-1.jpg',
        '/pictures/nature-2.jpg',
        '/pictures/nature-3.jpg',
        '/pictures/nature-4.jpg',
        '/pictures/nature-5.jpg',
        '/pictures/nature-6.jpg',
        '/pictures/nature-7.jpg',
        '/pictures/nature-8.jpg',
        '/pictures/nature-9.jpg',
    ]

}

export const accordionItems = [
    {
        title: 'Accordion Item 1',
        content: 'Content for Accordion Item 1',
    },
    {
        title: 'Accordion Item 2',
        content: 'Content for Accordion Item 2',
    },
    {
        title: 'Accordion Item 3',
        content: 'Content for Accordion Item 3',
    },
];