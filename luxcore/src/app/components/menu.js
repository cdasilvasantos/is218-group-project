import React from 'react';
import Image from 'next/image';
import steakImage from '../../../public/images/steak.png';
import wineImage from '../../../public/images/wine.png';
import './modalScript';

export default function Menu() {
    // JavaScript code to handle modal toggle
    const scriptString = `
        function toggleModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('steakButton').onclick = function() { toggleModal('steakMenuModal'); };
            document.getElementById('wineButton').onclick = function() { toggleModal('wineMenuModal'); };

            document.querySelectorAll('.closeButton').forEach(button => {
                button.onclick = function() {
                    this.parentElement.style.display = 'none';
                };
            });
        });
    `;

    return (
        
        <div id ="menu" className="menu-container">
            <h1 className="menu-header">Discover Our Menu</h1>

            {/* Menu Categories */}
            <div className="menu-categories">
                <button id="steakButton">Steak</button>
                <button id="wineButton">Wine</button>
            </div>

            {/* Steak Menu Modal */}
            <div id="steakMenuModal" className="menu-modal" style={{ display: 'none' }}>
                <h2>Steak Selection</h2>
                <ul>
                    <li>Ribeye - A tender and flavorful classic cut, $35</li>
                    <li>Filet Mignon - Lean and succulent, our signature cut, $40</li>
                    <li>Strip Steak - Perfectly marbled, $38</li>
                    {/* Add more steak items */}
                </ul>
                <Image
                    src="/images/steak.png"
                    alt="Signature Filet Mignon"
                    width={300}
                    height={200}
                    layout="responsive"
                />
                <button className="closeButton">Close</button>
            </div>

            <div id="wineMenuModal" className="menu-modal" style={{ display: 'none' }}>
                <h2>Wine Selection</h2>
                <ul>
                    <li>Chardonnay - Fruity and rich, $15/glass</li>
                    <li>Pinot Noir - Light and versatile, $16/glass</li>
                    <li>Cabernet Sauvignon - Bold and spicy, featured selection, $18/glass</li>
                    {/* Add more wine items */}
                </ul>
                <Image
                    src="/images/wine.png"
                    alt="Featured Cabernet Sauvignon"
                    width={300}
                    height={200}
                    layout="responsive"
                />
                <button className="closeButton">Close</button>
            </div>

            {/* Client-side Script */}
            <script dangerouslySetInnerHTML={{ __html: scriptString }} />
        </div>
    );
}