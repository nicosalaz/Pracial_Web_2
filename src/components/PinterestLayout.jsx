import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
    return <div style={ stylesLayout.pin_container }>
            <PinCard size='small' imagen = 'https://picsum.photos//200/201'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/202'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/203'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/204'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/205'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/206'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/207'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/208'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/209'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/210'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/211'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/212'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/213'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/214'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/215'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/216'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/217'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/218'/>
            <PinCard size='small' imagen = 'https://picsum.photos//200/219'/>
            <PinCard size='medium' imagen = 'https://picsum.photos//200/220'/>
            <PinCard size='large' imagen = 'https://picsum.photos//200/221'/>
            
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