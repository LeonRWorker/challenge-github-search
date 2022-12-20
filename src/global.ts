import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0px 30px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const Button = styled.button`
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 600;
    padding: 12px 25px;
    border-radius: 10px;
    background-color: #0079fe;
`
export const Fields = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Field = styled.input`
    width: 100%;
    border: none;
    color: white;
    font-size: 1em;
    margin-left: 10px;
    padding: 10px 0px;
    background-color: transparent;
    ::placeholder {
        color: white;
    }
`
export const Search = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    padding: 10px 20px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 20px;
    background-color: #1f2a48;
    justify-content: space-between;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    @media (max-width: 767px) {
        ${Field} {
            font-size: 0.9em;
        }
        min-width: 320px;
    }
    @media (min-width: 815px) and (max-width: 1023px) {
        max-width: 760px;
    }
    @media (min-width: 1024px) {
        max-width: 700px;
    }
`