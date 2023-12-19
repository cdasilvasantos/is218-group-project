'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import steakImage from '../../../public/images/steak.png';
import wineImage from '../../../public/images/wine.png';


export default function Menu() {
    // State to manage modal visibility
    const [isSteakModalVisible, setSteakModalVisible] = useState(false);
    const [isWineModalVisible, setWineModalVisible] = useState(false);

    return (
        <div id="menu" className="menu-container">
            <h1 className="menu-header">Discover Our Menu</h1>

            {/* Menu Categories */}
            <div className="menu-categories">
                <button onClick={() => setSteakModalVisible(!isSteakModalVisible)}>Steak</button>
                <button onClick={() => setWineModalVisible(!isWineModalVisible)}>Wine</button>
            </div>

            {/* Steak Menu Modal */}
            {isSteakModalVisible && (
                <div className="menu-modal">
                    <h2>Steak Selection</h2>
                    <ul>
                    <li>Ribeye - A tender and flavorful classic cut, $35</li>
                    <li>Filet Mignon - Lean and succulent, our signature cut, $40</li>
                    <li>Strip Steak - Perfectly marbled, $38</li>
                </ul>
                    <Image src={steakImage} alt="Signature Filet Mignon" layout="responsive" />
                    <button onClick={() => setSteakModalVisible(false)}>Close</button>
                </div>
            )}

            {/* Wine Menu Modal */}
            {isWineModalVisible && (
                <div className="menu-modal">
                    <h2>Wine Selection</h2>
                    <ul>
                    <li>Chardonnay - Fruity and rich, $15/glass</li>
                    <li>Pinot Noir - Light and versatile, $16/glass</li>
                    <li>Cabernet Sauvignon - Bold and spicy, featured selection, $18/glass</li>
                </ul>                    <Image src={wineImage} alt="Featured Cabernet Sauvignon" layout="responsive" />
                    <button onClick={() => setWineModalVisible(false)}>Close</button>
                </div>
            )}
        </div>
    );
}
