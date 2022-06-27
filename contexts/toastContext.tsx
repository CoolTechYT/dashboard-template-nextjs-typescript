import React, { createContext, useEffect, useState } from 'react';
import { IToast } from '@interfaces';
import { uuid } from '@utils';

type AddToastArgs = { message: IToast['message']; type: IToast['type'] };

interface IToastContext {
    toasts: IToast[];
    removeToast: (id: string) => void;
    toast: {
        success: (message: string) => void;
        error: (message: string) => void;
        info: (message: string) => void;
    };
}

const toastContextDefaultValues = {
    toasts: [],
    toast: {
        success: (message: string) => { },
        error: (message: string) => { },
        info: (message: string) => { },
    } as IToastContext['toast'],
    setToasts: () => { },
    removeToast: () => { },
    addToast: () => { }
};

export const toastContext = createContext<IToastContext>(toastContextDefaultValues);

const ToastContext: React.FC<{ children: any }> = ({ children }) => {
    const [toasts, setToasts] = useState<IToast[]>(toastContextDefaultValues.toasts);
    const [removing, setRemoving] = useState<string | null>(null);

    useEffect(() => {
        if (toasts.length) setTimeout(() => setRemoving(toasts[0].id), 5000);
    }, [toasts]);

    useEffect(() => {
        if (removing) {
            setToasts(toasts.filter(toast => toast.id !== removing));
            setRemoving(null);
        }
    }, [removing]);

    const removeToast = (id: string) => setToasts(toasts.filter(toast => toast.id !== id));
    const addToast = ({ message, type }: AddToastArgs) => {
        setToasts([...toasts, { id: uuid(), message, type }]);
    };

    const toast = {
        success: (message: string) => addToast({ message, type: 'success' }),
        error: (message: string) => addToast({ message, type: 'error' }),
        info: (message: string) => addToast({ message, type: 'info' }),
    };

    return (
        <toastContext.Provider value={{ toasts, toast, removeToast }}>
            {children}
        </toastContext.Provider>
    );
};

export default ToastContext;