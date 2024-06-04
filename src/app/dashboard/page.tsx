import React from 'react'
import ImageCard from '../components/cards/ImageCard';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';
import Carousel from '../components/carousels/Carousel';
import TeamSectionSlider from '../components/carousels/TeamSectionSlider';

const socialBtns = [
    { url: "facebook.com", icon: <UserCircleIcon width={24} /> },
    { url: "twitter.com", icon: <UserCircleIcon width={24} /> },
    { url: "whatsapp.com", icon: <UserCircleIcon width={24} /> },
    { url: "tiktok.com", icon: <UserCircleIcon width={24} /> }
]
const users = [
    {
        imageUrl: "images/user1.jpg",
        username: "Williamson",
        bio: "Web Developer",
        socialBtns: socialBtns
    },
    {
        imageUrl: "images/user1.jpg",
        username: "Derino",
        bio: "Content creator",
        socialBtns: socialBtns
    },
    {
        imageUrl: "images/user1.jpg",
        username: "Ikediana",
        bio: "Graphics Designer",
        socialBtns: socialBtns
    },
    {
        imageUrl: "images/user1.jpg",
        username: "Valentino",
        bio: "sofware Developer",
        socialBtns: socialBtns
    }
]

const slides = [
    { type: 'image', url: "/slide1.jpg" },
    { type: 'image', url: "/slide2.jpg" },
    { type: 'image', url: "/slide3.jpg" },
    { type: 'image', url: "/slide4.jpg" },
    { type: 'image', url: "/slide5.jpg" },
    { type: 'video', url: "/videos/video1.MP4", autoplay: true, loop: true },
]
const teamSlides = [
    { header: 'Lorem ipsum dolor sit amet.', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor sunt earum ipsam", url: "/slide1.jpg" },
    { header: 'Lorem ipsum dolor sit amet.', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor sunt earum ipsam", url: "/slide2.jpg" },
    { header: 'Lorem ipsum dolor sit amet.', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor sunt earum ipsam", url: "/slide3.jpg" },
    { header: 'Lorem ipsum dolor sit amet.', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor sunt earum ipsam", url: "/slide4.jpg" },
    { header: 'Lorem ipsum dolor sit amet.', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor sunt earum ipsam", url: "/slide5.jpg" },
]

const page = () => {
    return (
        <>
            <div className="">
                <h2>dashboard</h2>
                <div className="grid grid-cols-4 gap-4">
                    {users.map((user, index) => (
                        <ImageCard key={index} imageUrl={user.imageUrl} title={user.username} description={user.bio} socialBtn={user.socialBtns} />
                    ))}
                </div>
                <div className="mt-12 team-section max-w-full">
                    <TeamSectionSlider slides={teamSlides} autoSlide={true} autoSlideInterval={2000} />
                </div>
                <div className="mt-12 team-section max-w-lg">
                    <Carousel slides={slides} autoSlide={true} autoSlideInterval={2000} />
                </div>
            </div>
        </>
    )
}

export default page