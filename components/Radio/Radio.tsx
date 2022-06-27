import React, { useState } from 'react';
import styles from './Radio.module.scss';

type RadioOption = {
    label: string;
    value: string;
};

interface RadioProps {
    id?: string;
    label?: string;
    options: RadioOption[];
    value?: string;
    onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
    id,
    label,
    options,
    value,
    onChange
}) => {
    return (
        <div className={styles['radio']}>
            <span className={styles['label']}>{label}</span>
            <div className={styles['options']}>
                {options.map((option, index) => (
                    <div key={index} className={styles['option']}>
                        <input
                            onClick={() => onChange(option.value)}
                            name={id}
                            id={option.value}
                            type="radio"
                            checked={value === option.value}
                            onChange={() => { }}
                        />
                        <label onClick={() => onChange(option.value)} htmlFor={option.value}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
};