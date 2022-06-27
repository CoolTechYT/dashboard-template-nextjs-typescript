import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useToastPortal } from '@hooks/useToastPortal';
import { toastContext } from '@contexts/toastContext';
import { Toast } from '@components/Toast';
import styles from './ToastContainer.module.scss';

export const ToastContainer = () => {
    const { toasts, removeToast } = useContext(toastContext);
    const { loaded, portalId } = useToastPortal();
    const portalNode = document.getElementById(portalId);

    return (portalNode && loaded) ? ReactDOM.createPortal(
        <div className={styles['toast-container']}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>,
        portalNode
    ) : <></>;
};