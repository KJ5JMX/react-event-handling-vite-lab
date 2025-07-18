// Code PasswordInput Component Here
import React from 'react';

function PasswordInput({ onPasswordChange }) {
    function handleChange(event) {
        console.log('Entering password...');
        if (onPasswordChange) {
            onPasswordChange(event.target.value);
        }
    }

    return (
        <input
            type="password"
            onChange={handleChange}
        />
    );
}

export default PasswordInput;