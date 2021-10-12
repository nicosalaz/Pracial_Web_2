import React from 'react';

const RigthButtons = () => {
    return (
        <div style={styleRightButtons.right_buttons}>
            <div style={styleRightButtons.espacio_notificacion}>
                <svg aria-hidden="true"  width="20px" height="20px" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="grey" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                <span style={styleRightButtons.numero_notificacion}>65</span>
            </div>
            <svg aria-hidden="true" focusable="false"  width="20px" height="20px" data-prefix="fas" data-icon="comment-dots" class="svg-inline--fa fa-comment-dots fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="grey" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
            <select name="letras" id="" style={styleRightButtons.select}>
            </select>
        </div>
    );
};

const styleRightButtons={
    right_buttons :{
        width: '15%',
        height: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
    },
    espacio_notificacion:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    numero_notificacion:{
        position: 'absolute',
        marginLeft:"20px",
        marginBottom:"20px",
        padding: '1px 2px',
        borderRadius: '50%',
        background: 'red',
        color: 'white',
        fontSize:'10px',
    },
    select:{
        border:'none',
    },
    espacio_letra:{
        width: '300%',
        height: '50px',
        backgroundColor: 'red',
        fontFamily:"sans-serif",
        fontWeight: "bolder",
        fontSize:"14px",
    }
};

export default RigthButtons;