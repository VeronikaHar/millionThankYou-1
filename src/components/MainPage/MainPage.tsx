import React, {Component} from 'react';
import localImage from '../../assets/1.jpg';
import CommonModal from '../../common/commonModal'
import UserModalBody from "./UserModalBody";
import * as defaultApiService from '../../common/defaultApiService'

declare var $: any;

class MainPage extends Component {
    imageCount: number = 1000;
    imageModal: any;

    image = {
        userImageUrl: localImage
    };
    state = {
        isOpen: false,
        users: [],
        currentUser: {
            "thumbnailImageUrl": localImage,
            "originalImageUrl": "",
            "gridId": null,
            "name": null,
            "thanksTo": "",
            "hashTags": ""
        }
    };
    openModal = (user: any) => {
        this.setState({currentUser: user}, () => {
            this.imageModal.click();
        });
    };

    componentDidMount() {
        defaultApiService.get('GetAll')
            .then(res => {
                this.imageCount = res.data && res.data.length >= 1 && res.data.length < this.imageCount ? this.imageCount - res.data.length : this.imageCount;
                const tempUsers = res.data;
                for (let i = res.data.length | 0; i < 1000; i++) {
                    tempUsers.push({
                        "thumbnailImageUrl": localImage,
                        "originalImageUrl": "",
                        "gridId": null,
                        "name": null,
                        "thanksTo": "",
                        "hashTags": ""
                    })
                }
                this.setState({users: tempUsers});
            })
    }

    submitUser = (user: any) => {
        defaultApiService.post('UploadData', user)
            .then(res => {
                $('#userModal').modal('hide');
            })
    };

    render() {
        return (
            <>
                <CommonModal isOpen={this.state.isOpen}
                             modalBody={<UserModalBody currentUser={this.state.currentUser}
                                                       readOnly={this.state.currentUser.gridId ? true : false}/>}
                             submitUser={this.submitUser}/>

                {this.state.users.length >= 1 && <div className='board' style={{"textAlign": "center"}}>
                    {this.state.users.map((e: any, i) => {
                            return <div className='tile' key={i} style={{"opacity": e.gridId ? '1' : 0.6}}>
                                <img className={e.gridId ? 'plusImage' : 'plus'} src={e.thumbnailImageUrl}
                                     onClick={() => this.openModal(e)}/>
                            </div>
                        }
                    )}
                </div>}

                {/*Button trigger modal*/}
                <button ref={(f) => {
                    this.imageModal = f;
                }} type="button" className="btn btn-primary d-none" data-toggle="modal"
                        data-target="#exampleModalCenter">
                    Launch demo modal
                </button>
            </>
        );
    }
}

export default MainPage;