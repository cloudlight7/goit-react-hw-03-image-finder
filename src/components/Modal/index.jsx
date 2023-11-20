import { Component } from 'react';
import { createPortal } from 'react-dom';
import CSS from '../styles.module.css';

const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDown)
        }

    hendleKeyDown = eve => {
                if (eve.code === 'Escape') {
                    this.props.onCloseModal(eve.code);
                }
            }
    hendleBackDrop = event => {
                if (event.currentTarget === event.target) {
                    this.props.onCloseModal('Escape');
                   // console.log(event);
        }
    }
    
render(){
    return createPortal(
        <div onClick={this.hendleBackDrop} className={CSS.Overlay}>
            <div className={CSS.Modal}>
                {this.props.children}
  </div>
</div>, modalRoot)
}
    }