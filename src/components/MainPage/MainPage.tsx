import React, { Component } from 'react';
import localImage from '../../assets/1.jpg';
import CommonModal from '../../common/commonModal';
import DisplayModal from "./DisplayModal";
import UserModalBody from "./UserModalBody";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import * as defaultApiService from '../../common/defaultApiService'

declare var $: any;

class MainPage extends Component {
    currentImageCount: number = 1000;
    totalImageCount: number = 1000;
    imageModal: any;
    state = {
        isOpen: false,
        loading: true,
        noEmail: false,
        noFile: false,
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
                this.setState({ loading: false })
                this.currentImageCount = res.data && res.data.length >= 1 && res.data.length < this.currentImageCount ? this.currentImageCount - res.data.length : this.currentImageCount;
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
                this.welcomeToast();
            })
    }

    validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    submitUser = () => {
        if (!this.validateEmail(this.state.newUser.email) || !this.state.newUser.email) {
            this.setState({ noEmail: true });
            return;
        }
        if (!this.state.newUser.file) {
            this.setState({ noFile: true });
            return;
        }
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
                this.setState({ currentUser: {} });
                if (res.status === 200) {
                    this.setState({ isOpen: false });
                    this.successToast();
                    const gridNum = this.totalImageCount - this.currentImageCount;
                    this.setState(state => {
                        const users = this.state.users.map((user, j) => {
                            if (j === gridNum) {
                                return res.data;
                            } else {
                                return user;
                            }
                        });
                        return {
                            users,
                        };
                    });
                }
            }).catch(e => {
                console.log('Error', e)
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

    welcomeToast = () => toast.info("Welcome! \n \n Support your community by uploading a Thank You picture. \n \n For more details go to About page.");
    successToast = () => toast.success("Success! \n \n Your Thank You message has been uploaded.");

    render() {
        if (this.state.loading)
            return (<h5 className='text-center min-vh-100'
                style={{ marginTop: '50vh', fontWeight: 500, color: '#e71212' }}>Loading please wait...</h5>)
        return (
            <>
                <ToastContainer position={toast.POSITION.TOP_CENTER} />
                {this.state.currentUser.originalImageUrl === '' ?
                    <CommonModal isOpen={this.state.isOpen}
                        modalBody={<UserModalBody
                            currentUser={this.state.currentUser}
                            readOnly={this.state.currentUser.id ? true : false}
                            noFile={this.state.noFile}
                            noEmail={this.state.noEmail}
                            resetValidation={() => {
                                this.setState({ noFile: false, noEmail: false })
                            }}
                            setNewUserModal={this.setNewUserModal} />}
                        submitUser={this.submitUser} />
                    : <DisplayModal
                        isOpen={this.state.isOpen}
                        user={this.state.currentUser} />}

                {this.state.users.length >= 1 && <div className='board'>
                    {this.state.users.map((e: any, i) => {
                        return <div className='tile' key={i}>
                            <img className={e.id ? 'plusImage' : 'plus'} src={e.thumbnailImageUrl}
                                onClick={() => {
                                    this.openModal(e);
                                }} />
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