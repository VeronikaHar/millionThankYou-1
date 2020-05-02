import React, { Component } from 'react';
import InstagramEmbed from "react-instagram-embed";

class AboutUs extends Component {
    render() {
        return (
            <div className="ex-basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h3>Our Mission</h3>
                                <p>Together provide appreciation to frontline workers.</p>
                            </div>
                            <br />
                            <div className="text-container">
                                <h3>About us</h3>
                                <p>Hi there! We are a bunch of individuals who just want to help bring some normalcy into this chaotic situation. We cannot do what our frontline workers are doing, they are the real heroes and this is our way of saying “thank you” to them. There have been many international crises in the past battled by many heroes and as the life goes on, we tend to forget them but not this time. We will collect 1,000,000 images and keep this page running as long as we can to show that we will never forget how our frontline workers stood and saved the world during COVID-19 pandemic.</p>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="text-container">
                                        <h3>Be a part of our mission</h3>
                                        <p>Be a part of our mission to collect 1 million thank you pictures. We strongly believe that everyone wants to contribute what they can to bring happiness into this world and this is your chance to make the different in the community and bring a smile to all the frontline workers around the world. Simply take a picture of you or your family holding a sign saying “thank you”.</p>
                                        <p><b>Phase 1:</b> We are releasing 10,000 spots to upload your image and as we fill out the spot we will be keep opening more until we fill up 1,000,000.</p>
                                    </div>
                                    <br />
                                    <div className="text-container" style={{ marginBottom: '40px', textAlign: 'left' }}>
                                        <h3>Contact us</h3>
                                        <p>You can reach us at <a href="mailto:millionthankyouorg@gmail.com">millionthankyouorg@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-container" style={{ maxHeight: '600px', overflow: 'hidden' }}>
                                        <h3>Message from Michelle Obama</h3>
                                        <InstagramEmbed
                                            url='https://www.instagram.com/p/B-dHjFkgdL9/?utm_source=ig_web_copy_link'
                                            hideCaption={true}
                                            containerTagName='div'
                                            protocol=''
                                            injectScript
                                            onLoading={() => { }}
                                            onSuccess={() => { }}
                                            onAfterRender={() => { }}
                                            onFailure={() => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AboutUs;