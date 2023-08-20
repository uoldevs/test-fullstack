'use client';
import './globals.css';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/users');
    });

    return;
}
