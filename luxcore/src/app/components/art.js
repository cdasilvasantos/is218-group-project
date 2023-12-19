import Image from "next/image";
import art from "../../../public/images/art.png";

export default function Art() {
    return (
        <main className="art">
            <section>
                <h1 className="art-heading">" Dine in comfort, Revel in Exceptional Quality:
                    Where Culinary Craftsmanship Meets Timeless Elegance. "</h1>
            </section>
            
            <section className="art-images-section">
                <div className="art-image-wrapper">
                    <Image
                        src={art}
                        layout="responsive"
                        width={500}
                        height={500}
                        alt="Picture of the art"
                    />
                </div>
            </section>
            <section className="testimonial-header">
                <h2>Discover Why Our Guests Love Luxcore</h2>
                <p>Join the C&M Members Club and be part of an exclusive experience that's revered by culinary connoisseurs and high-profile personalities alike.</p>
                
            </section>

            {/* Testimonial cards */}
            <section className="testimonial-section">
                <div className="testimonial-card">
                    <p className="testimonial-quote">"The ambiance and the quality of the steak at Luxcore are unparalleled. A top-notch dining experience that's a cut above the rest!"</p>
                    <p className="testimonial-author">- Alex Regent, CEO of Regent Enterprises</p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-quote">"A truly exquisite culinary journey. The attention to detail and the flavors of Luxcore Steakhouse are unforgettable."</p>
                    <p className="testimonial-author">- Dr. Samantha Pearce, Renowned Food Critic</p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-quote">"Every visit to Luxcore is a delight. The steak is perfectly seasoned and cooked to perfection, and the service is impeccable."</p>
                    <p className="testimonial-author">- Michael Stonebridge, Michelin Star Chef</p>
                </div>
            </section>
        </main>
    );
}
