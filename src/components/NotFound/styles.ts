import styled from "styled-components";

export const Content = styled.div`
    gap: 30px;
    display: flex;
    height: 200px;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    background-color: #1f2a48;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    @media (max-width: 814px) {
        width: 100%;
    }
    @media (min-width: 815px) and (max-width: 1023px) {
        width: 760px;
    }
    @media (min-width: 1024px) {
        width: 700px;
    }
`
export const Text = styled.span`
    width: 70%;
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
`