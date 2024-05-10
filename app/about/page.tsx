export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us - Nextspace',
    description: 'Totally real social media company',
    
}

export default async function About(){
    return (
        <main>
            <h1>About</h1>
            <p>Totally real and not fake or cloned social media page made for my portfolio</p>
        </main>
    );
}