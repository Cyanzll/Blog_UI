import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    min-height: 100vh; /*保证底部在最下*/
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    padding: 30px 0 0 15px;
    .banner_img {
        object-fit: cover;
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
    cursor: pointer;
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
    &:hover {
        background: #fff;
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
        display: block;
        margin-bottom: 4px;
        color: rgb(47,47,47);
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
        &:hover {
            text-decoration: underline;
        }
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

export const Banner = styled.img`
    width: 280px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 11px;
    border-radius: 10px;
`;

export const DownloadApp = styled.a`
    display: block;
    width: 234px;
    height: 60px;
    padding: 10px 22px;
    border: 1px solid rgb(240,240,240);
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 30px;
    .code {
        margin-right:14px;
        width: 60px;
        height: 60px;
        float:left;
    }
`;

export const DownloadInfo = styled.div`
    float:left;
    margin-top: 12px;
    .main{
        display: block;
        font-size: 15px;
        line-height: 15px;
        color: #222;
        margin-bottom: 5px;
    }
    .sub {
        display: block;
        font-size: 13px;
        line-height: 18px;
        color: rgb(153,153,153);
    }
`;

export const WriterWrapper = styled.div`
    width: 280px;
`;

export const WriterHeader = styled.div`
    width: 280px;
    overflow: hidden;
    font-size: 14px;
    color: #969696;
    margin-bottom: 20px;
    .rec {
        float: left;
    }
    .switch {
        float: right;
    }
    .iconfont {
        font-size: 14px;
        margin-right: 5px;
    }
`;

export const WriterItem = styled.div`
    width: 280px;
    height: 48px;
    overflow: hidden;
    .photo {
        float: left;
        height: 48px;
        width: 48px;
        border-radius: 24px;
        margin-right: 10px;
    }
    margin-bottom: 15px;
`;

export const WriterInfo = styled.div`
    float: left;
    box-sizing: border-box;
    width: 222px;
    height: 48px;
    padding: 10px 0;
    .header {
        overflow: hidden;
    }
    .name {
        float: left;
        font-size: 14px;
        color: #333;
    }
    .add {
        margin-top:5px;
        float: right;
        font-size: 13px;
        color: #42C02E;
    }
    .info {
        display: block;
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
`;

export const LoadMore = styled.div`
    width: 595px;
    height: 20px;
    padding: 10px 15px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;
    background: #A5A5A5;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
    line-height: 20px;
    color: #FFF;
    text-align: center;
    &:hover {
        background: rgb(155,155,155);
    }
`;

export const GetTop = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid rgb(220, 220, 220);
    position: fixed;
    right: 100px;
    bottom: 100px;
    padding-top: 14px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    background: #fff;
    .iconfont{
        font-size:20px;
        line-hieght:20px;
        color: rgb(51,51,51);
    }
`;