import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
    return <div style={ stylesLayout.pin_container }>
            <PinCard size='small' imagen = 'https://picsum.photos//200/231'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/432'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/240'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/213'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/632'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/765'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/300'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/125'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/324'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/865'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/323'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/764'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/527'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/953'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/156'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/374'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/648'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/933'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/555'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/712'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/654'/>
            
        </div>;
};

const stylesLayout = {
    pin_container: {
        margin:0,
        padding:0,
        width:'90vw',
        backgroundColor:'white',
        position : 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent:'center',
    },
};

export default PinterestLayout;