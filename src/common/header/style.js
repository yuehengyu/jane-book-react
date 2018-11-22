import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper=styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo=styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav=styled.div`
    width:960px;
    padding-right:130px;
    box-sizing:border-box;
    margin:0 auto;
    height:100%;
`;
export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.active{
        color:#ea6f5a;
    }
    &.right{
        float:right;
        color:#969696;
    }
`;
export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
    
`;
export const NavSearch=styled.input.attrs({
    placeholder: 'Search'
})`
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    width:160px;
    box-sizing:border-box;
    height:38px;
    border:none;
    outline:none;
    font-size:14px;
    border-radius:19px;
    background:#eee;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button=styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`;

export const SearchInfo=styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding:0 20px;
    background:white;
`;
export const SearchInfoChange=styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center; 
    }
`;
export const SearchInfoList=styled.div`
    overflow:hidden;
`;
export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-right:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoItem=styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    padding:0 5px;
    font-size:12px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`;



