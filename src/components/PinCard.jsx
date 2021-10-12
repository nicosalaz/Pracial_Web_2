import React from 'react';

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

export default PinCard;