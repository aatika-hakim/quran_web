'use client'

import Router from 'next/router'
import { useEffect } from "react";


export default function Home(props: any) {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/') {
            Router.push('/login');
        }
    }, [props]);

    return ''
}