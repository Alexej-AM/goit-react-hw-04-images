import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './ModalStyled';
import PropTypes from 'prop-types';
import { useEffect,useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');


export const  Modal =({onClose, children}) => {
  const handleClose = useCallback(({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
    }
  }, [onClose]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    }
  }, [handleClose]);

  

  return createPortal(
             <Overlay onClick={handleClose}>
            <StyledModal>{children}</StyledModal>
         </Overlay>,
          modalRoot
         
        );
}




// export class Modal extends Component {

  

// componentDidMount() {
//     window.addEventListener('keydown', this.handleClose);
// }


// componentWillUnmount(){
//     window.removeEventListener('keydown', this.handleClose);
 
// }

// handleClose = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
     
//      <Overlay onClick={handleClose}>
//         <StyledModal>{this.props.children}</StyledModal>
//      </Overlay>,
//       modalRoot
     
//     );
//   }
// }


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};