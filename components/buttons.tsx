'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton(){
    // show avatar if signed in, button if not
    const {data: session, status} = useSession();
    console.log(session, status);

    if(status === 'loading'){
        return <>...</>;
    }

    if (status === 'authenticated'){
        return(
            <>
            <Link href={`/dashboard`}>
                <Image
                    src={session.user?.image ?? '/mememan.webp'}
                    width={32}
                    height={32}
                    alt='Your Name'
                />
            </Link>
            <SignOutButton/>
            </>
        )
    }

    return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton(){
    return <button onClick={() => signOut()}>Sign out</button>;
}