import Image from 'next/image';
import restaurant from "../../../public/images/restaurant.png";


export default function About() {
    return (
        <div id="about" className="about-container">
            <h1 className="about-header"> Luxcore Steakhouse</h1>

            {/* Tab Navigation */}
            <div className="tab-navigation">
                <button data-tab="about-luxcore" className="tab">About Luxcore</button>
                <button data-tab="owners" className="tab">The Owners</button>
                <button data-tab="membership" className="tab">Membership Club</button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {/* About Luxcore Tab */}
                <section id="about-luxcore" className="content luxcore" style={{ display: 'none' }}>
                    <p>Luxcore Steakhouse offers an unrivaled dining experience in an atmosphere of understated elegance. We are committed to providing exquisite meals and impeccable service. Our menu features the finest cuts of steak, each dish crafted to perfection, and paired with an extensive selection of world-class wines. Nestled in the heart of the city, Luxcore is not just a restaurant; it's a culinary landmark. With an interior that whispers luxury and sophistication, our establishment beckons those who seek an exclusive dining encounter.</p>
                    <p>Our dedicated chefs combine traditional techniques with modern culinary innovations, creating dishes that are as visually stunning as they are flavorful. From the moment you step inside, you're taken on a gastronomic journey that promises to delight every sense.</p>
                    <div className="about-image">
                        <Image
                            src={restaurant}
                            alt="Luxcore Steakhouse"
                            width={500} // Adjust as needed
                            height={300} // Adjust as needed
                            layout="responsive"
                        />
                    </div>
                </section>

                {/* The Owners Tab */}
                <section id="owners" className="content owners" style={{ display: 'none' }}>
                    <p>At the heart of Luxcore Steakhouse are our esteemed owners, Michael and Chiara. With a passion for culinary excellence and hospitality, they have created a dining haven that reflects their commitment to quality, luxury, and memorable experiences. Michael, a renowned chef with years of experience in some of the world's finest kitchens, brings an unparalleled expertise in gastronomy. Chiara, with her exquisite taste and eye for design, has crafted the elegant ambiance of Luxcore, making it a visual feast as well as a culinary one.</p>
                    <p>Together, they have built more than a restaurant; they have created a place where every meal is a celebration, every dish a work of art, and every visit an unforgettable experience.</p>
                </section>

                {/* Membership Club Tab */}
                <section id="membership" className="content membership" style={{ display: 'none' }}>
                    <p>Join our exclusive C&M Members Club to experience the pinnacle of luxury dining. Membership offers priority reservations, access to members-only events, and a bespoke gastronomic concierge service. Embrace the world of culinary wonders and exceptional service that only Luxcore can offer. As a member, you'll enjoy a range of privileges including exclusive tasting events, personalized menu recommendations from our chefs, and invitations to special culinary workshops and gatherings.</p>
                    <p>Our Members Club is more than a loyalty program; it's a gateway to a community of culinary enthusiasts and a world of luxurious dining experiences. Membership is limited, ensuring personalized attention and an intimate atmosphere for all our esteemed members.</p>
                    <a href="#contact-us" className="btn membership-btn">Enquire About Membership</a>
                </section>
            </div>




            {/* Client-side Script */}
            <script dangerouslySetInnerHTML={{
                __html: `
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.addEventListener('click', function() {
                        // Hide all content
                        document.querySelectorAll('.content').forEach(content => {
                            content.style.display = 'none';
                        });
                        // Show active content
                        const activeTabId = this.getAttribute('data-tab');
                        document.getElementById(activeTabId).style.display = 'block';

                        // Update active class on tabs
                        document.querySelectorAll('.tab').forEach(t => {
                            t.classList.remove('active');
                        });
                        this.classList.add('active');
                    });
                });

                // Initialize the first tab as active
                document.addEventListener('DOMContentLoaded', () => {
                    document.querySelector('.tab[data-tab="about-luxcore"]').click();
                });
            `}} />
        </div>


    );
}
