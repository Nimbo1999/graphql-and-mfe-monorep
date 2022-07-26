import { useMemo } from 'react';

import styles from './Paddings.module.scss';

type PaddingValues = 1 | 2 | 3 | 4 | 5;

interface PaddingsProps {
    children?: React.ReactNode,
    vertical?: PaddingValues;
    horizontal?: PaddingValues;
}

const Paddings: React.FC<PaddingsProps> = ({ children, horizontal, vertical }) => {
    const className = useMemo((): string => {
        const classes: string[] = [styles.baseStyle];

        if (!!horizontal) classes.push(styles[`horizontal-${horizontal}`]);
        if (!!vertical) classes.push(styles[`vertical-${vertical}`]);

        return classes.join(' ');
    }, []);

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Paddings;
