import styled from 'styled-components';

export const Body = styled.div`
    background: #f9f9f9;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DetailWrapper = styled.div`
    width: 1000px;
    padding: 10px 16px 0 16px;
    display: flex;
    justify-content: between;
`;

export const DetailBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 730px;
`;

export const DetailSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 260px;
`;

export const ArticleWrapper = styled.div`
    width: 682px;
    padding: 24px;
    margin-bottom: 20px;
    background: #fff;
    .title {
        color: #404040;
        font-size: 30px;
        font-weight: 700;
        line-height: 42px;
        margin-bottom: 15px;
    }
`;

export const AuthorInLine = styled.div`
    height: 48px;
    margin-bottom: 32px;
    color: #404040;
    display: flex;
    justify-content: flex-start;
    position: relative;
    .info {
        margin-left: 8px;
        width: 220px;
        height: 46px;
        color: rgb(150,150,150);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .add {
        display: flex;
        width: 220px;
        height: 12px;
        span {
            display:block;
            margin-right: 10px;
            font-size: 12px;
            height: 12px;
        }
        .last {
            margin-right: 0;
        }
    }
    .name {
        margin-bottom: 3px;
        font-size: 15px;
        color: #404040;
        cursor: pointer;
    }
    .edit {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 13px;
        color: rgb(141,141,141);
        line-height: 48px;
        cursor: pointer;
    }
`;

export const AuthorWrapper = styled.div`
    width: 228px;
    padding: 16px;
    height: 240px;
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .divide {
        height: 15px;
        width: 228px;
        border-top: 1px solid rgb(238,238,238);
    }
`;

export const AuthorInfo = styled.div`
    display: flex;
    margin-bottom: 16px;
    img {
        height: 45px;
        width: 45px;
        border-radius: 22.5px;
        border: 1px solid rgb(238,238,238);
    }
    .info {
        width: 175px;
        height: 45px;
        margin-left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .name {
        margin-bottom: 3px;
        font-size: 14px;
        color: #404040;
        cursor: pointer;
    }
    span {
        font-size: 12px;
        color: rgb(150,150,150);
    }
`;

export const Avatar = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 23px;
    border: 1px solid rgb(238,238,238);
`;

export const ArticleBody = styled.p`
    height: 1000px;
    font-size: 16px;
`;

export const RecommendWrapper = styled.div`
    background: #fff;
    width: 228px;
    height: 320px;
    padding: 16px;
    margin-bottom: 10px;
    position: sticky;
    top: 66px;
    .title {
        margin-bottom: 16px;
        border-left: 4px solid rgb(236,114,89);
        font-size: 16px;
        padding-left: 6px;
    }
`;