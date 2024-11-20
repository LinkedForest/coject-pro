import React, { FC } from 'react';

// Types
import { iInput } from './types';

// Component
const Input: FC<iInput> = ({ name, type, placeholder }) => {
    return (
        <React.Fragment>
            <input name={name || 'input'} type={type || 'text'} placeholder={placeholder || name || ''} />
        </React.Fragment>
    )
}

export default Input;