import styled from "styled-components";

export const FlexBox = styled.div`
    gap: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-star;
    :nth-child(2) {
        margin-top: 20px;
        width: 77.3% !important;
    }
`
export const Asset = styled.img`
    width: 100px;
    border: none;
    height: 100px;
    border-radius: 50%;
    background-color: white;
`
export const Personal = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    height: 100px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`
export const Profile = styled.div`
    gap: 5px;
    width: 60%;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    justify-content: center;
`
export const Name = styled.span`
    width: 100%;
    color: white;
    font-size: 1.4em;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
`
export const Username = styled.span`
    width: 100%;
    color: #0863cb;
    font-size: 1em;
    cursor: pointer;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    text-transform: capitalize;
`
export const Bio = styled.span`
    color: white;
    font-size: 1em;
    text-align: left;
    margin-top: 10px;
    filter: opacity(60%);
    :nth-child(2){
        display: none;
    }
`
export const Joined = styled.span`
    width: 50%;
    color: white;
    display: flex;
    font-size: 1em;
    margin-top: 4px;
    /* align-items: center; */
    filter: opacity(70%);
    justify-content: flex-end;
    :nth-child(3){
        display: none;
    }
`
export const Boxes = styled.div`
    gap: 15px;
    width: 100%;
    color: white;
    display: grid;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #141c2f;
    grid-template-columns: repeat(3, 1fr);
`
export const Text = styled.span``
export const Box = styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Text}:nth-child(1) {
        font-size: 0.8em;
        filter: opacity(80%);
    }
    ${Text}:nth-child(2) {
        font-size: 1.1em;
        font-weight: 600;
    }
`
export const Icon = styled.span`
    gap: 10px;
    display: flex;
    align-items: center;
    ${Text} {
        max-width: 170px;
        font-size: 0.9em;
        filter: opacity(80%);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
export const Icons = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Container = styled.div`
    padding: 30px;
    display: flex;
    border-radius: 10px;
    align-items: flex-end;
    flex-direction: column;
    background-color: #1f2a48;
    justify-content: flex-end;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    ${FlexBox} {
        :nth-child(2) {
            width: 70%;
            margin-bottom: 20px;
            justify-content: flex-start;
            ${Bio} {
                margin-top: 0px;
            }
        }
        :nth-child(3) {
            gap: 50px;
            width: 100%;
            margin-bottom: 20px;
        }
        :nth-child(4) {
            gap: 30px;
            width: 100%;
        }
    }
    @media (max-width: 767px) {
        ${FlexBox}:nth-child(3) {
            ${Boxes} {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }
        }
        ${FlexBox}:nth-child(4) {
            gap: 10px;
            flex-direction: column;
        }
        ${Asset} {
            width: 80px;
            height: 80px;
        }
    }
    @media (max-width: 814px) {
        width: 100%;
    }
    @media (min-width: 815px) and (max-width: 1023px) {
        width: 760px;
    }
    @media (min-width: 1024px) {
        width: 700px;
        ${FlexBox}:nth-child(2) {
            margin-top: 0px;
            margin-bottom: 0px;
        }
        ${Bio} {
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
            transform: translateY(-15px);
        }
    }
    @media (max-width: 1023px) {
        ${FlexBox} {
            width: 100% !important;
            /* overflow: hidden; */
            :nth-child(1) {
                ${Personal} {
                    width: 100%;
                }
            }
        }
        ${Personal} {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
        }
        ${Joined} {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            transform: translateY(-15px);
        }
    }
`