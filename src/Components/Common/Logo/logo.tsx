import styles from './logo.module.scss';

export interface LogoProps{
    src: string;
}

export default function Logo({ src, ...props }: LogoProps) {

    return (
        <div {...props} className={styles.wrapLogo}>
            <img className={styles.logo} src={src} alt={'logo'}/>
        </div>
    );
}
