import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    margin-bottom: 50px;
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
    flex-direction: column;
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

export const NewUsersDescription = styled.div`
    color: #7c8288;
    margin-top: 2px;
    margin-bottom: 20px;
    h4 {
        font-size: 20px;
        font-weight: 500;
    }
    p {
        margin-top: -10px;
    }
`;


export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    input {
        width: 249px;
        font-size: 17px;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 12px;
        border-radius: 5px;
        border: 1px solid gray;
        margin-bottom: 18px;
    }
    select {
        width: 265px;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 12px;
        border-radius: 5px;
        color: #666f77;
        font-size: 17px;
        padding-right: 10px;
        background-color: white;
        margin-bottom: 10px;
    }
    option {
        color: black;
    }
    select option {
    background-color: #f5f5f5;
    color: #333;
    font-size: 14px;
}
    .create {
        background-color: #e29933;
        border: none;
        color: white;
        height: 45px;
        padding: 0em 3em 0em;
        border-radius: 6px;
        cursor: pointer;
        transition: .2s;
        font-size: 16px;
        margin-top: 60px;
        margin-right: 19px;
    }

    .create:hover {
    background-color: #ebbc7b;

  }

    .back {
        border: none;
        background-color: white;
        color: #dda85e;
        border: 1px solid #dda85e;
        height: 45px;
        padding: 0em 3em 0em;
        border-radius: 6px;
        cursor: pointer;
        transition: .2s;
        font-size: 16px;
    }

    .back:hover {
    background-color: #faf8f0;

  }
`;


