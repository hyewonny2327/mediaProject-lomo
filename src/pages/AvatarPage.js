import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MakingAvatar from './MakingAvatar';
import ChooseSex from './ChooseSex';
import progressBar from './img/progressBar/progressBar_sex.svg'
import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom';
import logo from './img/logo_2.svg';

const AvatarPageStyle = styled.div`
margin:3px;
font-family: 'Noto Sans KR', sans-serif;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
cursor: url('/img/cursor/defaultCursor.png') 2 2, auto;

.avatar-container{
    width:1920px;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
}
.avatar-and-progress-bar{
    display:flex;
    width:100%;
    flex-direction:row;
    //border: 1px solid red;
    justify-content:space-around;
    align-items:center;
    margin-top:50px;
}
.progress-bar{
    position:absolute;
    top:56px;
}
.logo{
    position:absolute;
    top:25px;
    left:15px;
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}
.arrows{
    position:fixed;
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;

}
#arrow-R{
    right:50px;
}
#arrow-L{
    left:50px;
}
.progress-bar{
    margin-bottom:10px;
}


`
function AvatarPage(){
    let navigate = useNavigate();

    return(
        <AvatarPageStyle>
            <div className='main-container'>
                <img className='logo' src={logo} alt='logo image' onClick={()=>navigate('/')}/>
                <div className='avatar-container'>
                        <img className='progress-bar' src={progressBar}></img>
                    <div className='avatar-and-progress-bar'>

                        <ChooseSex/>

                    </div>
                    
                    

                    </div>
                </div>
            </AvatarPageStyle>
        
    )
}

export default AvatarPage;
