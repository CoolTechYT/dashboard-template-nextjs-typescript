import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useModalPortal } from '@hooks/useModalPortal';
import styles from './ModalContainer.module.scss';
import { modalContext } from '@contexts/modalContext';

export const ModalContainer = () => {
    const { modal } = useContext(modalContext);
    const { loaded, portalId } = useModalPortal();
    const portalNode = document.getElementById(portalId);

    return (portalNode && modal && loaded) ? ReactDOM.createPortal(
        <div className={styles['modal-container']}>
            {modal}
        </div>,
        portalNode
    ) : <></>;
};