import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    .user-icon {
        font-size: 36px;
    }
    color:  #575757;
    width: 100vw;
    .line{
        width: 75vw;
        margin-top: 0.4vw;
        border-radius: 10px;
        border-bottom: 1.5px solid #ebebeb;
    }
    @media (max-width: 1000px) {
        display: flex;
        margin: none;
        padding: none;
    }
`;



export const Description = styled.div`
  display: flex;
  width: 75vw;
  justify-content: space-between;
  font-family: 'Roboto';
  margin-top: 0.7%;
  align-items: center;
  h3 {
    font-size: 19px;
    font-weight: 500;
    color: #666f77;
  }
  p {
    color: #a2a2a2;
    margin-top: -5px;
  }
  button {
    background-color: #e29933;
    border: none;
    color: white;
    height: 35px;
    padding: 0em 1.2em 0em;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    font-size: 15px;
  }
  button:hover {
    background-color: #ebbc7b;

  }
  .line{
        width: 60px;
        border-bottom: 1px solid #4b4949;
    }
    @media (max-width: 1000px) {
        margin: none;
        padding: none;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        font-weight: 400;
        font-size: 28px;
        margin-left:10px;
    }
`;

export const Content = styled.div`
    display: flex;

    flex-wrap: wrap;
    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
    
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12%;
    padding-right: 12%;
    flex-wrap: wrap;
    padding-top: 6%;
    @media (max-width: 1000px) {
        padding: none;
        margin: none;
    }
`;

export const ClientsNumber = styled.div`
    font-size: 20px;
    color: #8b8b8b;
    margin-top: 30px;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        position: absolute;
        top: 3%;
    }
`;


