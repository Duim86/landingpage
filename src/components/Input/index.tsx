import React, { InputHTMLAttributes} from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    
}

const Input: React.FC<InputProps> = ({name, ...rest }) => {
    return (
        <div className="input-block">
             <input type="text" {...rest} />
        </div>
    )
};

export default Input;