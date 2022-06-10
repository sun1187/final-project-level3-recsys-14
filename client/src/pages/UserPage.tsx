/* eslint-disable */
import React, { useCallback, useEffect, useState, useRef } from "react";

import styled, {css} from "styled-components";
import {Individual, Diverse, ProblemDetail} from '../components'
import NavBar from "../components/navbar";
import MainFooter from "../components/footer";
import {useSelector, useDispatch} from 'react-redux';
import { API } from "../utils/axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { search } from "../modules/userSearchInput";
import { toggleSwitch } from "../modules/tagSwitch";

import { RootState } from "../modules";
import userBackgroundImage from '../assets/images/user_background_large.png';
import userRecImage from "../assets/images/problem_rec_large.png";
import ProblemRecFAQ from "../components/problemRecFAQ";
import { initialProblem } from "../modules/problemItem";
import { autoUserInitial } from "../modules/autoSearch";
import RatingStar from "../components/RatingStar";
import svgIcon from "../components/svgIcon";
import {
    light_purple
} from "../constants/color";

const Box = styled.div`
    display : flex;
    z-index : 500;
    background-color: aqua;
`;

const SearchBox = styled.div`
    display : flex;
    z-index : 1000;
    transform : translate(-50%, 0);
`;
const useDidMountEffect = (func : any, deps : any) => {
    const didMount = useRef(false);
    useEffect(()=>{
        if(didMount.current){
            func();
        }else{
            didMount.current = true;
        }
    }, deps);
};

const UserIntroBox = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const UserIntroImage = styled.div`
    width: 100%;
    height: min(max(calc(240px + 10vmin), 340px), 380px);
    border: 0px;
    background: url(${userRecImage}) center center / contain no-repeat;
`;

const UserIntroStyledSpan = styled.span`
    color: #c89d7a;
    text-align: center;
    font-size: min(max(calc(10px + 1vmin), 10px), 18px);
    font-weight: 500;
`;

const UserIntroStyledDiv = styled.div`
    color: #fff;
    text-align: center;
    text-shadow:
        1px 1px 14px rgb(0 0 0 / 10%), 
        2px 2px 28px rgb(0 0 0 / 14%);
    font-size: min(max(calc(16px + 3.6vmin), 20px), 54px);
    font-weight: 800;
    margin: 2.5rem 0;
`;

const UserBackgroundStyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: min(calc(400px + 10vmin), 540px);
    z-index: -1;
    background: url(${userBackgroundImage}) center center / cover no-repeat;
    -webkit-mask: 
        -webkit-gradient( linear, 0% 80%, 0% 0%, from(rgba(0, 0, 0, 0.8)), to(rgb(0, 0, 0, 1)) );
`;

const SliderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
`;

const ContentInnerContainer = styled.div`
    width: 100%;
    padding: 0px 20px;
`;

const SectionTitle = styled.h2`
    display: block;
    font-weight: 800;
    font-size: 1.5em;
    letter-spacing: -0.02ch;
    margin: 1.5rem 0;
    text-align: left !important;

    @media screen and (max-width: 800px){
        text-align: center !important;
    }
`;
const RatingTitle = styled.h2`
    display: block;
    font-weight: 800;
    font-size: 1.5em;
    letter-spacing: -0.02ch;
    margin: 1.5rem 0;
    text-align: left !important;

    @media screen and (max-width: 800px){
        text-align: center !important;
    }
`;

const ProblemDescription = styled.p`
    display: block;
    font-size: 1em;
    font-weight: 400;
    margin: 1.2rem 0;
    text-align: left !important;

    @media screen and (max-width: 800px){
        text-align: center !important;
    }
`;


const LinkSvgIcon = styled(svgIcon)` 
    width: min(max(calc(10px + 1vmin), 10px), 18px); 
    height: min(max(calc(10px + 1vmin), 10px), 18px);
    position: relative;
    top: 6px;
    left: 6px;
    overflow: overlay;
    stroke: ${light_purple};
    cursor: pointer;
    transform: 
      translateY(-50%)
      rotate(-90deg);
`;

const LinkSvgIconWrapper = styled.div`
    display: inline-block;
`;

const BlankBox = styled.div`
    display: block;
    weight: 100%;
    height: 50px;
`;

function Userpage() {
    const params = useParams();
    console.log(params); // 첫 번째 userHandle : juk1329, 여섯 번째 userHandle : juk1329

    const location = useLocation();
    // console.log(location.pathname);

    const dispatch = useDispatch();
    const userHandleDispatch = useCallback((userHandle : string | undefined)=> dispatch(search(userHandle)), [dispatch]);
    const onTagSwitch = useCallback(() => dispatch(toggleSwitch()), [dispatch]);
    const autoSearchInitialDispatch = useCallback(() => dispatch(autoUserInitial()), [dispatch]);


    const initialUserpage = useCallback(() => dispatch(initialProblem()),[dispatch]);

    // dispatch(search(params.userHandle));

    const userHandle = useSelector((state: RootState) => state.userSearchInput.userHandle);
    const problemItem = useSelector((state: RootState) => state.problemItem);
    const tagSwitch = useSelector((state : RootState) => state.tagSwitch.toggle);

    console.log(userHandle); //두 번째 '', 일곱 번째 juk1329

    let navigate = useNavigate();

    const fetchUserCheck = async() =>{
        try{
            const {data} = await API.get(`/user/check?handle=${params.userHandle}`);
            console.log(data); //11번째
        }
        catch(e){
            console.error(e);
            alert("Wrong User !");
            navigate('/');
        }
    }

    useEffect(()=>{
        // userHandleDispatch(params.userHandle);
        fetchUserCheck();
        userHandleDispatch(params.userHandle);
        initialUserpage();
        autoSearchInitialDispatch();
    }, [params]);
    useEffect(()=>{
        if(tagSwitch == true){
            onTagSwitch();
        }
        // initialUserpage();
    }, []);
    
    //NavBar 세 번째, 8번쨰
    //individual 네 번째 9번째
    // App 다섯 번째

    return(
        <div>
            <NavBar pathname={location.pathname} />
            <UserIntroBox>
                <UserBackgroundStyledDiv />
                <UserIntroStyledDiv>
                    내가 모르던 나를 위한 문제.<br />
                    한눈에 모아보다.
                </UserIntroStyledDiv>
                <UserIntroStyledSpan>
                    {userHandle} 님에게 맞는 문제를 영역별로 추천해 드릴게요.<br />
                    본인의 목적에 맞는 문제를 찾아 풀어보세요.<br />
                </UserIntroStyledSpan>
                <UserIntroImage />
            </UserIntroBox>
            <SliderWrap>
                <Individual />
                {problemItem.toggle && tagSwitch && <ProblemDetail item={problemItem.item} />}
            </SliderWrap>
            <ContentContainer>
                <ContentInnerContainer>
                    <BlankBox />
                    <SectionTitle>
                        라이벌이 푼 문제도 보러 가 볼까요?
                    </SectionTitle>
                    <ProblemDescription>
                        나는 풀지 않았지만 실력이 비슷한 내 라이벌은 푼 문제는 무엇인지 궁금하지 않으신가요?<br />
                        지금 바로 이동해서 더 풀 만한 문제가 없는지 찾아보세요.
                        <LinkSvgIconWrapper>
                            <LinkSvgIcon
                            onClick={() => { navigate(`/user/${userHandle}/rival`)}}
                            className="searchicon"
                            fill-rule="evenodd"
                            fill= "#fff"
                            clip-rule="evenodd"
                            viewBox="0 0 28 28"
                            strokeWidth="2"
                            width="18" height="18">
                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                            </LinkSvgIcon>
                        </LinkSvgIconWrapper>
                    </ProblemDescription>
                <BlankBox />
                <BlankBox />
                <RatingTitle>
                    추천된 문제가 만족스러우신가요?
                </RatingTitle>
                <RatingStar />
                <BlankBox />
                <BlankBox />
                <SectionTitle>
                    문제 추천에 관한 궁금증을 정리했어요.
                </SectionTitle>
                <ProblemRecFAQ />
                <BlankBox />
            </ContentInnerContainer>
        </ContentContainer><MainFooter />
        </div>
    );
}

export default Userpage;