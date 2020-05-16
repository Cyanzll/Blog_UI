import styled from 'styled-components';
import React from '../../statics/react.png';

export const FooterWrapper = styled.div`
    width: 100%;
    height: 80px;
    background: #222222;
`;

export const FooterBody = styled.div`
    width: 960px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .left {
        margin-top: 20px;
        color: #F5F5F5;
        font-size: 13px;
    }
    .left span {
        display: block;
        line-height: 15px;
        margin-bottom: 10px;
    }
    .right {
        margin-top: 5px;
    }
    .react {
        height: 60px;
        width: 60px;
        background: url(${React});
    }
`;


