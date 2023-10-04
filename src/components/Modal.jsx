import './Modal.css';

const Modal = ({ children, open, close }) => (
  <div
    className={`modal modal-lg ${open ? 'modal-show' : ''}`}
    tabIndex='-1'
    role='dialog'
    onClick={(e) => {
      if (e.target === e.currentTarget) close();
    }}
  >
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Course Plan</h5>
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={close}
          ></button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  </div>
);

export default Modal;
