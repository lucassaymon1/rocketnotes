import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  >header{
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    button{
      border: none;
      background: none;
      cursor: pointer;
    }

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }

`
export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  >div:nth-child(4){
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  /* position relative to set a position absolute for the label, so you can adjust where in the label will stay in the Avatar div */
  position: relative;
  /* this will make the avatar to rise and stay right above the line between header and body */
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }
    svg{
      height: 20px;
      width: 20px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

  }
`