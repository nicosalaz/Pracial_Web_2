import React from 'react';

class PinCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {hover: false};
        this.hadleClick = this.hadleClick.bind(this);
        this.imagen = props.imagen;
        this.size = props.size;
    }
    hadleClick(){
        this.setState(prevState => ({
            hover : !prevState.hover
        }));
    }
    render(){
        const stylePinCard = {
            pin_card:{
                margin : '15px 10px',
                padding: 0,
                borderRadius: '15px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
            },
            small:{
                gridRowEnd:'span 26'
            },
            medium:{
                gridRowEnd:'span 33'
            },
            large:{
                gridRowEnd:'span 45'
            },
            img : {
                borderRadius:'15px',
                width: '100%',
                height:'100%',
            }
        };

        if (this.state.hover) {
            stylePinCard.img = {
                ...stylePinCard.img,
                opacity:'0.7',
            }
        }
        
        return (
            <div style={{ ...stylePinCard.pin_card, ...stylePinCard[this.size]}}>
                <img style={stylePinCard.img} src={this.imagen} alt="no se encontro la imagen" onMouseLeave = {this.hadleClick} onMouseEnter = {this.hadleClick}/>
            </div>
        );
    }
}

export default PinCard;


/*
const PinCard = (props) => {
    return (
        <div style={{ ...stylePinCard.pin_card, ...stylePinCard[props.size]}}>
            <img style={stylePinCard.img} src={props.imagen} alt="no se encontro la imagen" />
        </div>
    );
};

const stylePinCard = {
    pin_card:{
        margin : '15px 10px',
        padding: 0,
        borderRadius: '15px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    small:{
        gridRowEnd:'span 26'
    },
    medium:{
        gridRowEnd:'span 33'
    },
    large:{
        gridRowEnd:'span 45'
    },
    img : {
        borderRadius:'15px',
        width: '100%',
        height:'100%',
    }
};

export default PinCard;*/