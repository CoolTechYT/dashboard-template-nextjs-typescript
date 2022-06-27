import { modalContext } from '@contexts/modalContext';
import React, { useContext } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
    const { hideModal } = useContext(modalContext);
    return (
        <div className={styles['modal']}>
            <div onClick={hideModal} className={styles['close']}>
                Close
            </div>
            {children}
        </div>
    )
};