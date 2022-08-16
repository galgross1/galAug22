import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
    return(
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
  );
};

const portalElment = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElment)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElment
      )}
    </Fragment>
  );
};

export default Modal;