import React, { useState } from 'react';
import styles from './Toggle.module.scss';

interface ToggleProps {
    id?: string;
    label?: string;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ id, label, enabled, onChange }) => {
    const className = `${styles['switch']} ${enabled ? styles['enabled'] : ''}`;
    return (
        <div className={styles['toggle']}>
            <label htmlFor={id}>
                <span>{label}</span>
            </label>
            <input
                onChange={() => onChange(!enabled)}
                id={id}
                name={id}
                type="checkbox"
                className={className}
                checked={enabled}
            />
        </div>
    )
};