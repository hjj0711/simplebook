import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
` 
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-topL 30px;
    width: 625px;
    .banner_img{
        width: 645px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 240px;
    float: right;
`
export const TopicWapprer = styled.div`
    overflow: hidden;
    padding: 20px 0 10px ;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .top_pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic{
        display:block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`
export const ListInfo = styled.div`
    width: 450px;
    float:letf;
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 8px;
    };
    .detail{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    };
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280opx;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    // background: url(${props => props.imgurl});
    background: url(${props => props.imgurl});
    background-size: contain;
`
