import React, {Component} from 'react';
import localImage from '../../assets/1.jpg';

interface ICompProps {
    currentUser: any
    readOnly: boolean
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
        }
    };
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.currentUser && this.props.currentUser.gridId !== prevProps.currentUser.gridId) {
            this.setState({userData: this.props.currentUser})
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="txtName">Name (Optional)</label>
                    <input type="text" className="form-control" id="txtName" value={this.state.userData.name  || ''}
                           readOnly={this.props.readOnly}
                           onChange={(event) => {
                               this.setState({userData: {...this.state.userData, name: event.target.value}})
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtEmail">Email</label>
                    <input type="email" className="form-control" id="txtEmail"
                           value={this.state.userData.email || ''} readOnly={this.props.readOnly}
                           onChange={(event) => {
                               this.setState({userData: {...this.state.userData, email: event.target.value}})
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtSpecial">Special thank you to (Optional)</label>
                    <input type="text" className="form-control" id="txtSpecial"
                           value={this.state.userData.thanksTo || ''} readOnly={this.props.readOnly}
                           onChange={(event) => {
                               this.setState({userData: {...this.state.userData, thanksTo: event.target.value}})
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txttxtHashtags">Hashtags (Optional)</label>
                    <input type="text" className="form-control" id="txtHashtags"
                           value={this.state.userData.hashTags || ''} readOnly={this.props.readOnly}
                           onChange={(event) => {
                               this.setState({userData: {...this.state.userData, hashTags: event.target.value}})
                           }}/>
                </div>
                {!this.props.readOnly && <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required/>
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>}
            </form>
        );
    }
}

export default UserModalBody;