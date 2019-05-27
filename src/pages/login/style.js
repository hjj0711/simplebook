
import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;

`
export const LoginBox = styled.div`
    width: 400px;
    height: 360px;
    margin: 80px auto;
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0.1);
    padding-top: 20px;

`
export const Input = styled.input`
    display: block;
    width: 265px;
    height: 40px;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
    margin: 20px auto;
`
export const Button = styled.button`
    display: block;
    width: 300px;
    height: 50px;
    line-height: 30px;
    color:#fff;
    background: #3193d0;
    border-radius: 25px;
    text-align: center;
    margin: 20px auto;
    cursor: pointer;
`
export const LoginTap = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    span{
        font-weight: 700;
        margin: 0 16px;
        &:nth-child(1){
            border-bottom: 2px solid #ea6f5a;
            color: #ea6f5a;

        }
    }
    
`
export const Problemwrapper = styled.div`
    width: 300px;
    margin: 60px auto 10px;
    font-size: 15px;
    color: #969696;
    checkBox{
        float: left;
    }
    a{
        vertical-align: middle;
        font-size: 15px;
        color: #969696; 
        float: right;
        cursor: pointer;
    }
`
