import React from 'react';
import Image from 'next/image';
import awesome from "../../../public/images/awesome.png";
import {Button} from '@chakra-ui/react'

export default function Hero() {
    return (
        <main>
            <section id= "hero" className="banner">
                <Image 
                    src={awesome} 
                    alt="Banner Image" 
                    layout="fill" // This makes the image fill the container
                    objectFit="cover" // Keeps the aspect ratio and covers the area
                    quality={100} // Adjust for desired image quality
                />
                <section className="calltoaction">
                    <h1>Where culinary craftsmanship meets timeless elegance</h1>
                    <p>Join our members club for an all exclusive experience.</p>
                    <Button>
                      <a href="#contact-us" className="btn about1">C&M Members Club</a>
                    </Button>                 </section>
            </section>
        </main>
    );
}
