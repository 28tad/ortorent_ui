import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary', 
}

interface AppLinkProps extends LinkProps { 
    className?: string;
    theme: AppLinkTheme;
    children: React.ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const { 
        className,
        theme = AppLinkTheme.PRIMARY,
        to, 
        children, 
        ...otherProps 
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, theme])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}