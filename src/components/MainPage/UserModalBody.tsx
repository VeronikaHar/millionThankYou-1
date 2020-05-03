import React, { Component } from 'react';
import localImage from '../../assets/1.jpg';

interface ICompProps {
    currentUser: any
    readOnly: boolean
    noFile: boolean
    noEmail: boolean

    setNewUserModal(user: any): void;

    resetValidation(): void;
}

class UserModalBody extends Component<ICompProps> {
    constructor(props: ICompProps) {
        super(props)
    }

    state = {
        userData: {
            "thumbnailImageUrl": localImage,
            "originalImageUrl": "",
            "gridId": null,
            "name": '',
            "thanksTo": "",
            "hashTags": "",
            "email": ''
        },
        fileLabel: 'Choose file...',
        file: null
    };

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.currentUser && this.props.currentUser.id !== prevProps.currentUser.id) {
            this.setState({ userData: this.props.currentUser })
        }
    }

    fileChanged = (event: any) => {
        this.props.resetValidation();
        const file = event.target.files[0];
        this.setState({ fileLabel: file.name });
        this.setState({ userData: { ...this.state.userData, file: file } }, () => {
            this.props.setNewUserModal(this.state.userData);
        });
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="txtName">Name (Optional)</label>
                    <input type="text" name="name" className="form-control" id="txtName"
                        value={this.state.userData.name || ''}
                        readOnly={this.props.readOnly}
                        onChange={(event) => {
                            this.setState({ userData: { ...this.state.userData, name: event.target.value } }, () => {
                                this.props.setNewUserModal(this.state.userData)
                            })
                        }} />
                </div>
                {!this.props.readOnly && <div className="form-group">
                    <label htmlFor="txtEmail">Email</label>
                    <input type="text" name="email" className="form-control" id="txtEmail" required
                        value={this.state.userData.email || ''} readOnly={this.props.readOnly}
                        onChange={(event) => {
                            this.setState({ userData: { ...this.state.userData, email: event.target.value } }, () => {
                                this.props.setNewUserModal(this.state.userData)
                                this.props.resetValidation();
                            })
                        }} />
                    {this.props.noEmail &&
                        <div className='text-danger text-left'>Please enter a valid email address</div>}

                </div>}
                <div className="form-group">
                    <label htmlFor="txtSpecial">Special thank you to (Optional)</label>
                    <input type="text" className="form-control" id="txtSpecial"
                        value={this.state.userData.thanksTo || ''} readOnly={this.props.readOnly}
                        onChange={(event) => {
                            this.setState({ userData: { ...this.state.userData, thanksTo: event.target.value } }, () => {
                                this.props.setNewUserModal(this.state.userData)
                            })
                        }} />
                </div>
                <div className="form-group">
                    <label htmlFor="txttxtHashtags">Hashtags (Optional)</label>
                    <input type="text" className="form-control" id="txtHashtags"
                        value={this.state.userData.hashTags || ''} readOnly={this.props.readOnly}
                        onChange={(event) => {
                            this.setState({ userData: { ...this.state.userData, hashTags: event.target.value } }, () => {
                                this.props.setNewUserModal(this.state.userData)
                            })
                        }} />
                </div>
                {!this.props.readOnly && <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile"
                        onChange={this.fileChanged} />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">{this.state.fileLabel}</label>
                    {this.props.noFile &&
                        <div className='text-danger text-left'>Please select a valid image to upload</div>}
                </div>}
            </form>
        );
    }
}

export default UserModalBody;