import React, { Component } from 'react';
import localImage from '../../assets/1.jpg';
import CommonModal from '../../common/commonModal';
import DisplayModal from "./DisplayModal";
import UserModalBody from "./UserModalBody";
import * as defaultApiService from '../../common/defaultApiService'

declare var $: any;

interface IUser {
    "thumbnailImageUrl": string,
    "originalImageUrl": string,
    "gridId": string,
    "name": string,
    "thanksTo": string,
    "hashTags": string
}

class MainPage extends Component {
    imageCount: number = 1000;
    imageModal: any;
    state = {
        isOpen: false,
        users: [],
        currentUser: {
            "thumbnailImageUrl": localImage,
            "originalImageUrl": "",
            "gridId": null,
            'id': null,
            "name": null,
            "thanksTo": "",
            "hashTags": ""
        },
        file: null,
        newUser: {
            "thumbnailImageUrl": localImage,
            "originalImageUrl": "",
            "gridId": '',
            "name": '',
            "thanksTo": "",
            "hashTags": "",
            "email": '',
            "file": ''
        }
    };
    openModal = (user: any) => {
        this.setState({ currentUser: user }, () => {
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
                this.setState({ users: tempUsers });
            })
    }

    submitUser = () => {
        let data = new FormData();
        data.append('file', this.state.newUser.file);
        data.append('name', this.state.newUser.name);
        data.append('email', this.state.newUser.email);
        data.append('thanksTo', this.state.newUser.thanksTo);
        data.append('hashTags', this.state.newUser.hashTags);
        data.append('gridId', Math.random().toString());
        defaultApiService.post('UploadData', data)
            .then(res => {
                // @ts-ignore
                document.getElementById('modalCloseButton').click();
            })
    };

    setNewUserModal = (newUser: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                name: newUser.name,
                email: newUser.email,
                thanksTo: newUser.thanksTo,
                hashTags: newUser.hashTags,
                file: newUser.file
            }
        })
    };

    render() {
        return (
            <>
                {this.state.currentUser.originalImageUrl === '' ?
                    <CommonModal isOpen={this.state.isOpen}
                        modalBody={<UserModalBody
                            currentUser={this.state.currentUser}
                            readOnly={this.state.currentUser.id ? true : false}
                            setNewUserModal={this.setNewUserModal}
                        />}
                        submitUser={this.submitUser} />
                    : <DisplayModal
                        isOpen={this.state.isOpen}
                        user={this.state.currentUser} />}

                {this.state.users.length >= 1 && <div className='board'>
                    {this.state.users.map((e: any, i) => {
                        return <div className='tile' key={i}>
                            <img className={e.id ? 'plusImage' : 'plus'} src={e.thumbnailImageUrl}
                                onClick={() => { this.openModal(e); console.log(e) }} />
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