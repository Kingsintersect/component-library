import { UserGroupIcon } from '@heroicons/react/24/outline';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    icon?: React.ReactElement;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    isLoading?: boolean;
    width?: string;
    height?: string;
}
const Button = (props: IButtonProps) => {
    const { to, disabled, children, isLoading, icon } = props;
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
            if (to) {
                history.push(to);
            } else {
                props.onClick && props.onClick(e)
            }
        }
    };

    return (
        <button {...props} onClick={onClickHandler} disabled={isLoading}>
            {children}
            {isLoading &&
                <UserGroupIcon />
            }
            {icon}
        </button>
    )
}

export default Button

