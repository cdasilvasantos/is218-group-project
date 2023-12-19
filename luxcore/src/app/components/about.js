'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import restaurant from "../../../public/images/restaurant.png";

export default function About() {
    const [activeTab, setActiveTab] = useState('about-luxcore');

    return (
        <div id="about" className="about-container">
            <h1 className="about-header">Luxcore Steakhouse</h1>

            <div className="tab-navigation">
                <button 
                    className={`tab ${activeTab === 'about-luxcore' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about-luxcore')}
                >
                    About Luxcore
                </button>
                <button 
                    className={`tab ${activeTab === 'owners' ? 'active' : ''}`}
                    onClick={() => setActiveTab('owners')}
                >
                    The Owners
                </button>
                <button 
                    className={`tab ${activeTab === 'membership' ? 'active' : ''}`}
                    onClick={() => setActiveTab('membership')}
                >
                    Membership Club
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'about-luxcore' && (
                    <section className="content luxcore">
                        <p>Experience the pinnacle of fine dining at Luxcore Steakhouse...</p>
                        <Image src={restaurant} alt="Luxcore Steakhouse" width={500} height={300} layout="responsive" />
                    </section>
                )}

                {activeTab === 'owners' && (
                    <section className="content owners">
                        <p>Discover the passion behind Luxcore Steakhouse, led by owners Michael and Chiara...</p>
                    </section>
                )}

                {activeTab === 'membership' && (
                    <section className="content membership">
                        <p>Become part of an exclusive world of culinary delights with our C&M Members Club...</p>
                        <a href="#contact-us" className="btn membership-btn">Enquire About Membership</a>
                    </section>
                )}
            </div>
        </div>
    );
}
