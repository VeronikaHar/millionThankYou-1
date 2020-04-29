import React, { Component } from 'react';

interface ICompProps {
    isOpen: boolean
    imageUrl: string
    thxTo: string
}

class DisplayModal extends Component<ICompProps> {

    constructor(props: ICompProps) {
        super(props);
    }

    render() {
        return (<div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thank You! {this.props.thxTo} </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id='modalCloseButton'>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={this.props.imageUrl} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default DisplayModal;