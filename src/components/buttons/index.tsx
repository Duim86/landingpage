import React, { ButtonHTMLAttributes} from 'react';

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    
}

const Buttons: React.FC<ButtonProps> = ({...rest }) => {
    return (
        <div className="buttons-block">
             <button type="submit" {...rest} />
        </div>
    )
};

export default Buttons;