import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    padding: 30px 0 0 15px;
    .banner_img {
        display: block;
        width: 625px;
        height: 270px;
        border-radius: 3px;
    }
`;

export const HomeRight = styled.div`
    float: left;
    margin-left: 40px;
    width: 280px;
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
    color: #555;
    margin-left: 18px;
    margin-bottom: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    &.more {              //更多热门专题
        background: #fff;
        border: none;
        a {
            color: #777;
            text-align: center;
        }
    }
    .item_img {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    width: 625px;
    border-bottom: 1px solid rgb(240,240,240);
    padding: 15px 2px 20px 0;
    margin-bottom: 15px;
    overflow: hidden;
    .list_img {
        display: block;
        margin-top: 27px;
        width: 150px;
        height: 100px;
        float: right;
        border-radius:4px;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        margin-bottom: 4px;
        display: block;
        color: rgb(47,47,47);
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
    }
    .article {
        line-height:24px;
        font-size: 13px;
        color: rgb(153,153,153);
        margin-bottom: 8px;
    }
`;

export const Bottom = styled.div`
    overflow: hidden;
    line-height: 20px;
    color: rgb(180,180,180);
    font-size: 12px;
    .author {
        float: left;
        margin-right: 10px;
    }
    .comment {
        float: left;
        margin-right: 10px;
    }
    .star {
        float: left;
        margin-right: 10px;
    }
    .iconfont {
        font-size: 13px;
        line-height: 20px;
    }
`;