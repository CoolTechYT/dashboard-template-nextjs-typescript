import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    primary = false,
    disabled = false,
    loading = false,
}) => {
    const className = `${styles['button']} ${primary ? styles['primary'] : ''} ${loading ? styles['loading'] : ''}`;
    return (
        <button
            disabled={loading || disabled}
            className={className}
            onClick={!disabled ? onClick : () => { }}
        >
            {loading ? <span className={styles['loading']} /> : children}
        </button>
    )
};