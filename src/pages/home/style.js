import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    height: 470px;
    padding: 30px 0 0 15px;
    .banner_img {
        width: 625px;
        height: 270px;
        background: #ccc;
    }
`;

export const HomeRight = styled.div`
    float: left;
    margin-left: 40px;
    width: 280px;
    height: 470px;
    padding: 30px 0 0 0;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    float: left;
    background: #F7F7F7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    margin-left: 18px;
    margin-bottom: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    .item_img {
        float: left;
        width: 32px;
        height: 32px;
        background: #ddd;
        margin-right: 10px;
    }
`;