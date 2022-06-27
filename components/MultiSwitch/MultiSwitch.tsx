import React from 'react';
import styles from './MultiSwitch.module.scss';

interface MultiSwitch {
    label?: string;
    options: Array<{
        label: string | JSX.Element;
        value: string;
    }>;
    selected: string;
    onChange: (value: string) => void;
}

export const MultiSwitch: React.FC<MultiSwitch> = ({
    label,
    options,
    selected,
    onChange,
}) => {
    return (
        <div className={styles['multi-switch']}>
            {label && (
                <span className={styles['label']}>{label}</span>
            )}
            <div className={styles['switch']}>
                {options.map((option, index) => {
                    const { label, value } = option;
                    const isSelected = value === selected;
                    const isSelectedClass = isSelected ? styles['selected'] : '';
                    const className = `${styles['item']} ${isSelectedClass}`;

                    return (
                        <div
                            key={index}
                            className={className}
                            onClick={() => onChange(value)}
                        >
                            <span>{label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};