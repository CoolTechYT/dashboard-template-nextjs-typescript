import React from 'react';
import { Nav } from '@components/Nav';
import styles from './Page.module.css';

interface PageProps {
    children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
};