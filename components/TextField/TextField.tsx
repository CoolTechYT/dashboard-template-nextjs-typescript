import React, { useState } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
    id?: string;
    label?: string;
    helpText?: string;
    placeholder?: string;
    value?: string | number;
    onChange: (value: string) => void;
    readOnly?: boolean;
    before?: React.ReactNode;
    after?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
    id,
    label,
    helpText,
    placeholder,
    value,
    onChange,
    readOnly = false,
    before,
    after
}) => {
    return (
        <div className={styles['textfield']}>
            {label && (
                <label
                    htmlFor={id}
                    className={styles['label']}
                >
                    {label}
                </label>
            )}
            <div className={styles['input-container']}>
                {before}
                <input
                    placeholder={placeholder}
                    value={value}
                    readOnly={readOnly}
                    id={id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                />
                {after}
            </div>
            {helpText && (
                <span className={styles['help-text']}>{helpText}</span>
            )}
        </div>
    )
};