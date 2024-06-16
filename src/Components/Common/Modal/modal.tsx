import styles from './modal.module.scss';
import { useState, useEffect, HTMLAttributes, ReactNode } from 'react';
import CloseButton from '../Buttons/CloseButton/closeButton';
import Logo from '../Logo/logo';

export interface ModalProps extends HTMLAttributes<HTMLDivElement>{
    closeModal: () => void;
    insert: JSX.Element | ReactNode;
}

export default function Modal({ closeModal, insert, ...props }: ModalProps) {
    const [ show, setShow ] = useState<boolean>(false);

    useEffect(() => {
        setShow(v => !v);
    }, []);

    const handleClick = () => {
        setShow(v => !v);
        setTimeout(closeModal, 300);
    };

    return (
        <>
            <div className={`${styles.overlay} ${show ? styles.overlayShow : null}`}></div>
            <div {...props} className={`${styles.modal} ${show ? styles.modalShow : null}`}>
                <div className={styles.topPanel}>
                    <Logo src={'images/svg/logo-white.svg'}/>
                    <CloseButton show={show} onClick={handleClick}></CloseButton>
                </div>
                {insert}
            </div>
        </>
    );
}