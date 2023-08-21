import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    font-family: 'Roboto';
    width: 75vw;
    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        height: 395px;
        margin: none;
    }
`;

export const EachCard = styled.div`
    display: flex;
    padding: 0px 15px 0px;
    width: 75vw;
    justify-content: space-around;
    align-items: center;
    color: #a8a8a8;
    border: 0.5px solid #e2e2e2;
    height: 95px;
    margin: 1em 0em 0em;
    h3 {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #7c7a7a;
        font-weight: 400;
        width: 200px;
        
    }

    h4 {
        font-size: 20px;
        width: 200px;
        margin-bottom: -5%;
        color: #7c7a7a;
        font-weight: 500;
    }

    .status {
        color: green;
        background-color: green;
    }
    button {
        background-color: white;
        border: 2px solid #dda85e;
        font-size: 18px;
        color: #dda85e;
        border-radius: 8px;
        padding: 0.5em 2.2em 0.5em;
        transition: .2s;
    }
    button:hover {
        background-color: #dda85e;

        color: white;
    }
    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        height: 395px;
        margin: none;
        padding: none;
    }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 300px;
  justify-content: center;
  align-items: start;
  margin-bottom: 11px;
  p {
    font-size: 18px;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
