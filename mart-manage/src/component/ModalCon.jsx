import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.body;


class ModalContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='modal' onClick={(e) => {
                this.props.ondel()
            }}>
                <div className='mb' onClick={(e) => { e.stopPropagation() }}>
                    <h2 className='mb-header'>{this.props.title || 'Modal'}</h2>
                    <div className='mb-main'>
                        {this.props.children}
                    </div>
                    <div className='mb-foot'>
                        <button onClick={() => { this.props.ondel() }}>NO</button>
                        <button onClick={() => { this.props.onOk() }}>YES</button>
                    </div>
                </div>
            </div>
        );
    }
}
class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {}
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            this.props.flag ?
                <div className="App">
                    <ModalContainer>
                        <ModalContent {...this.props} />
                    </ModalContainer>
                </div>
                : <></>
        );
    }
}
export default Modal