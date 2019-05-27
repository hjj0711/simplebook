// import logoPic from 'assest'
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction:row;
`
export const Logo = styled.div`
    display: block;
    width:100px;
    min-width: 78px;
    height:56px;
    background: url(${logoPic});
    background-size: cover;
`
export const Nav = styled.div`
    width: 70%;
    height: 100%;
    min-width:525px;
    margin: 0 auto;
    // padding-right: 70px;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size:17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float: right;
        color:#969696
        cursor: pointer;
    }
    &.active{
        color: #ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
    width:160px;
    height: 38px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    color: #666
    margin-left: 20px;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size:14px;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width:230px;
        // transition: width 0.6s;
        // -moz-transition: width 0.6s; /* Firefox 4 */
        // -webkit-transition: width 0.6s; /* Safari 和 Chrome */
        // -o-transition: width 0.6s; /* Opera */
    }
`
export const Addition = styled.div`                                                                                                     
    height:56px;
    min-width: 230px;
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        text-align: center;
        right: 5px;
        top: 13px;
        width:30px;
        border-radius: 30px;
        line-height: 30px;
        &.focused {
            background: #777;
            color: #FFF;
        }
    }
    
    .slide-enter {
        transition: all 0.2s ease-out;
    }
    .slide-enter-active {
        width: 230px;
    }
    .slide-exit{
        transition: all 0.2s ease-out;
    }
    .slide-exit{
        width: 160px;
    }
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right 20px;
    padding: 0 18px;
    line-height: 38px;
    border-radius: 19px;
    border:1px solid #ec6149;
    font-size: 14ppx;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`
export const SearchInfo = styled.div`
    z-index: 2;
    position:absolute;
    left:0;
    top:56px;
    width:260px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0);
    box-shadow: 0 0 5px #888888;
    background: #fff;
`
export const SearchInfoTitile = styled.span`
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    display: inline-block;
    margin-top: 20px;
    float: right;
    font-size:13px;
    color: #7878;
    &:hover{
        color: #969696;
        cursor:pointer;  
    }
    .spin{
        margin-right: 4px;
        font-size 12px;
        display: block;
        float: left;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoItem = styled.span`
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    line-height:20px;
    padding: 0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color: #7878;
    border-radius: 3px;
    &:hover{
        color: #969696;
        cursor:pointer;  
    }
`
