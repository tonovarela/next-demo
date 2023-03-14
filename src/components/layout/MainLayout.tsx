import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css'

export const MainLayout:FC<PropsWithChildren> = ({children}) => {

    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <main className={styles.main}>
                <div className={styles.description}>
                    {children}
                </div>
            </main>
        </>
    )
};

