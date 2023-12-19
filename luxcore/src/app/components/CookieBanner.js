// components/CookieBanner.js
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null); // Initially null

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent); // Update based on stored value
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied';
            window.gtag("consent", 'update', { 'analytics_storage': newValue });
            setLocalStorage("cookie_consent", cookieConsent);
        }
    }, [cookieConsent]);

    // Do not render the banner if consent has been set
    if (cookieConsent !== null) {
        return null;
    }



    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                        bg-white rounded-lg shadow`}>

            <div className='text-center'>
                <Link href="/info/cookies">
                    <p>We use <span className='font-bold text-red-950'>cookies</span> on our site.</p>
                </Link>
            </div>

            <div className='flex gap-2'>
            <button onClick={() => setCookieConsent(false)}>Decline</button>
                <button onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>
        </div>
    );
}
