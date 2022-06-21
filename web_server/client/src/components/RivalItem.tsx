import { elementTypeAcceptingRef } from "@mui/utils";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import svgIcon from "../components/svgIcon";


const RivalItemBox = styled.div`
position: relative;
background: white;
box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

min-height: 150px;

margin: 0 auto;
border-radius: 1rem;

cursor: pointer;
transition: all 0.6s cubic-bezier(.25,.8,.25,1) 0.3s;

`;

const RivalTitle = styled.h3`
    font-size: 1.6rem;
    word-break: keep-all;
`;

const RivalLinkButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 1rem;
    padding: 0 15px;
    letter-spacing: 1.15px;
    background-color: #6539dc;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    transition: transform 0.5s cubic-bezier(.25,.8,.25,1) 0.2s;
    &:hover {
        transform: scale(1.08);
    }
    &:hover .linkIcon{
        transform: translate(3px);
    }
`;

const LinkSvgIcon = styled(svgIcon)` 
    width: min(max(calc(10px + 1vmin), 10px), 18px); 
    height: min(max(calc(10px + 1vmin), 10px), 18px);
    position: relative;
    left: 6px;
    stroke: #fff;
    fill: #fff;
    cursor: pointer;
    transition: transform 0.6s cubic-bezier(.25,.8,.25,1) 0.3s;
`;

const LinkSvgIconWrapper = styled.div`
    display: inline-block;
`;

const RivalItem = ({rival, onToggle}:any) => {
    // console.log(rival);
    const onClick = () =>{
        onToggle(rival);
    }
    
    return(
//onClick={onToggle(item)}
    <RivalItemBox className='item' onClick={onClick}>
        <div style={{display:'flex', flexDirection: 'column'}}>
            <h2>{rival.handle}</h2>
            <RivalTitle>
                <a href = {`https://solved.ac/profile/${rival.handle}`} target='_blank'> 
                    <RivalLinkButton>
                        라이벌로 등록하기 
                        <LinkSvgIconWrapper>
                            <LinkSvgIcon
                                className="linkIcon"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                viewBox="0 0 36 36">
                                <path d="M 32.2664 12.9024 l -8.8992 -8.8992 c -0.8064 -0.8064 -2.1888 -0.8064 -2.9952 0 s -0.8064 2.1888 0 2.9952 l 5.2416 5.2704 h -19.3824 c -1.1808 0 -2.1312 0.9504 -2.1312 2.1312 s 0.9504 2.1312 2.1312 2.1312 h 19.4112 l -5.2704 5.2416 c -0.8064 0.8064 -0.8064 2.1888 0 2.9952 c 0.432 0.432 0.9792 0.6336 1.5264 0.6336 s 1.0944 -0.2016 1.5264 -0.6336 l 8.8416 -8.8416 c 0.4032 -0.4032 0.6336 -0.9504 0.6336 -1.5264 s -0.2016 -1.1232 -0.6336 -1.4976 z"></path>
                            </LinkSvgIcon>
                        </LinkSvgIconWrapper>
                    </RivalLinkButton>
                </a>
            </RivalTitle>
        </div>
        {/* {item.tags.split(',').map((tag : string, i : number) => <div key={i}>{tag}</div>)} */}
    </RivalItemBox>
    );
}

export default RivalItem;
