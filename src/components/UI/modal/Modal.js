import { Fragment } from 'react';
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../store/cartSlice';
import classes from './Modal.module.css';


const Backdrop = () => {
    const dispatch = useDispatch()

    return <div className={classes.backdrop} onClick={() => dispatch(cartAction.toggleCart())} />
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = props => {

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;