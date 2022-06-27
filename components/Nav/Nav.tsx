import { Button } from '@components/Button';
import { modalContext } from '@contexts/modalContext';
import React, { useContext } from 'react';
import styles from './Nav.module.scss';

export const Nav: React.FC = () => {
    // TODO: Add param to renderModal for width/height
    const { renderModal } = useContext(modalContext);
    return (
        <div className={styles['nav']}>
            <div className={styles['logo']}>
                <img src="/images/logo.svg" alt="TikTok Play" />
                <span style={{ fontSize: 18, cursor: "default", fontWeight: "bold" }}>
                    Turbovid
                </span>
            </div>
            <div className={styles['buttons']}>
                <Button onClick={() => window.open('https://turbovid.io/support', '_blank')}>Support</Button>
                <Button onClick={() => renderModal("Test")}>Add to theme</Button>
            </div>
        </div>
    )
};