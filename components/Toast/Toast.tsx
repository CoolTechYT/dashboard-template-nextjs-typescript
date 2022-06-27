import { ToastType } from '@interfaces';
import React from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    const className = `${styles['toast']} ${styles[type]}`;
    return (
        <div onClick={onClose} className={className}>
            <span>{message}</span>
        </div>
    )
};