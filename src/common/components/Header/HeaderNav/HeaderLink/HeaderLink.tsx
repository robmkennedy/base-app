import type { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router';
import { NavLink } from '@mantine/core';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    return (
        <NavLink
            w='auto'
            variant='subtle'
            classNames={{ root: styles.root }}
            component={RouterLink}
            to={to}
            leftSection={icon}
            label={label}
        />
    );
}
