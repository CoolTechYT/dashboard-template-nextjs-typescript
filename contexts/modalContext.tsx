import { Test } from '@components/Modal/modals/Test';
import React, { createContext, useState } from 'react';

type ModalType = "Test";

interface IModalContext {
    modal: React.ReactNode | null;
    renderModal: (modal: ModalType) => void;
    hideModal: () => void;
}

const modalContextDefaultValues = {
    modal: null,
    renderModal: () => { },
    hideModal: () => { }
};

export const modalContext = createContext<IModalContext>(modalContextDefaultValues);

const ModalContext: React.FC<{ children: any }> = ({ children }) => {
    const [modal, setModal] = useState<React.ReactNode | null>(modalContextDefaultValues.modal);

    const renderModal = (modal: ModalType) => {
        switch (modal) {
            case "Test": setModal(<Test />); break;
            default: setModal(null); break;
        }
    };

    const hideModal = () => setModal(null);

    return (
        <modalContext.Provider value={{ modal, renderModal, hideModal }}>
            {children}
        </modalContext.Provider>
    );
};

export default ModalContext;