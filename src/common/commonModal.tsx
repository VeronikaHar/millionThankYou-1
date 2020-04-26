import React, {Component} from 'react';

interface ICompProps {
    isOpen: boolean
    modalBody: any

    submitUser(user: any): void;
}

class CommonModal extends Component<ICompProps> {

    constructor(props: ICompProps) {
        super(props);
    }

    render() {
        return (<div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex={-1} role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Submit your "Thank You"</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.modalBody}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary"
                                    onClick={this.props.submitUser}>Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonModal;