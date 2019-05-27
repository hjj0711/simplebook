import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    &:after{
      content:"";
      display:block;
      clear:both;
    }
` 
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    width: 625px;
    .banner_img{
        width: 625px;
        height: 240px;
        margin-top: 30px;
    }
`
export const HomeRight = styled.div`
    width: 315px;
    float: right;
`
export const TopicWapprer = styled.div`
    overflow: hidden;
    padding: 28px 0 18px ;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-right: 28px;
    padding-right: 10px;
    margin-bottom: 12px;
    background: #f7f7f7;
    font-size: 14px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}
    color: #502103;
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
    margin: 25px 0 16px 0;
    width: 280px;
    float: right;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 8px; 
    border-radius: 7px;
    background: url(${props => props.imgurl});
    background-size: contain;
`
export const DownLoadApp = styled.a`
    display: block;
    width: 280px;
    border: 1px solid #dcdcdc;
    padding: 10px 22px;
    box-sizing:border-box;
    float: right;
    cursor: pointer;
    text-align: center;
    border-radius: 5px; 
    
    p:nth-child(2){
        font-size: 15px;
        color: #333;
        display: inline-block;
        margin: 10px 0;
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
    p:nth-child(3){
        font-size: 13px;
        display: inline-block;
        color: #999;
    }
    }
    .appImg{
        float: left;
        vertical-align: middle;
        width: 60px;
        height: 60px;
        opacity: .85;
    }
`

export const Advertising = styled.div`
    width: 280px;
    height: 160px;
    border: 1px solid #dcdcdc;
    margin: 27px 0 0 18px;
    float: right;
    margin-bottom: 8px; 
    border-radius: 7px;
    background: url(${props => props.imgUrl});
    background-size: cover;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    margin: 30px 0;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #dcdcdc;
    cursor: pointer;
`
