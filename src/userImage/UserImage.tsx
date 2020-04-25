import React, {Component} from 'react';

interface ICompProps {
    image: any
    imageKey: number
}

class UserImage extends Component<ICompProps> {
    constructor(props: ICompProps) {
        super(props);
    }

    render() {
        return (
            <div className='tile' key={this.props.imageKey}>
                <img className='plus' src={require(this.props.image.userImageUrl)}/>
            </div>
        );
    }
}

export default UserImage;