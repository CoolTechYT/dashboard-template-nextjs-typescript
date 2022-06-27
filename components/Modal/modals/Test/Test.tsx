import { Modal } from '@components/Modal';
import React from 'react';
import styles from './Test.module.scss';

export const Test = () => {
    return (
        <Modal>
            <div className={styles['content']}>
                <span>Test</span>
            </div>
        </Modal>
    )
};