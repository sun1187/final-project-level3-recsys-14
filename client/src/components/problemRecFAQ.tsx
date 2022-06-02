import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import { 
    dark_purple_blue,
    light_pink_white,
    light_purple,
    almost_black,
 } from "../constants/color";

const StyledAccordianButton = styled(Accordion.Button)`
    color: ${almost_black};
    font-weight: 500;

    &:focus {
        border-color: ${light_purple};
        box-shadow: 0 0 0 0.25rem ${light_purple}66;
    }

    &:not(.collapsed) {
        background-color: ${light_pink_white}66;
        color: ${dark_purple_blue};

        
    }

    &::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23595959%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e")!important;
    }

`;

const ProblemRecFAQ = () => {
    return (
        <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <StyledAccordianButton>
                    RECJOON은 어떤 웹 사이트인가요?
                </StyledAccordianButton>
                <Accordion.Body>
                RECJOON은 solved.ac API로 수집한 Baekjoon Online Judge 데이터를 바탕으로 solved.ac 유저 개개인에 맞는 문제를 추천하는 웹 서비스입니다. 
                또한 개인의 실력과 비슷한 유저를 라이벌로 추천하고, 라이벌이 풀었던 문제 중에서 자신이 풀지 않았던 문제도 추천해 드립니다.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <StyledAccordianButton>
                    Baekjoon Online Judge 또는 solved.ac와 관련된 사이트인가요?
                </StyledAccordianButton>
                <Accordion.Body>
                본 웹사이트는 네이버 커넥트재단 부스트캠프 AI Tech 3기의 RecSys Track의 14조인 RECognizer 팀의 최종 프로젝트의 일환으로 제작되었습니다.
                Baekjoon Online Judge 또는 solved.ac와 일절 관련이 없으며, 어떠한 영리 목적으로도 운영되지 않는 팀 프로젝트 결과물입니다.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <StyledAccordianButton>
                    Baekjoon Online Judge 유저와 문제에 관한 데이터는 어떻게 수집되나요?
                </StyledAccordianButton>
                <Accordion.Body>
                Baekjoon Online Judge는 원칙적으로 웹 스크래핑이 금지되어 있으므로 solved.ac API를 이용하여 데이터를 수집하고 있습니다.
                데이터 수집은 정해진 주기에 따라 자동으로 진행되며, 수집된 데이터를 바탕으로 유저별로 문제 또는 라이벌 추천 데이터가 생성됩니다.
                데이터 수집 과정에서 발생한 오류 또는 데이터 부재로 인해 만족스러운 추천 결과가 나오지 못할 수 있는 점 양해 바랍니다.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
    
}

export default ProblemRecFAQ;