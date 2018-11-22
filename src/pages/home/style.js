import styled from 'styled-components';


export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft=styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-image{
        width:625px;
        height:270px;
    }
`;

export const HomeRight=styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem=styled.div`
    background；#f7f7f7;
    height:32px;
    margin-left:18px;
    margin-bottom:18px;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    float:left;
    .topic-pic{
        width:32px;
        display:block;
        float:left;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .list-pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;
export const RecommendWrapper=styled.div`
    width:280px;
    margin:30px 0;
`;
export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`;
export const WriterWrapper=styled.div`
    overflow:hidden;
    width:278px;
    margin-top:100px;
    
    border-radius:3px;
    padding:20px 0;
    line-height:300px;
    text-align:center;
    
`;
export const WriterInfo=styled.div`
    width:220px;
    
    .writer-pic{
        float:left;
        width:48px;
        height:48px;
        margin-right:20px;
        border:1px solid #ddd;
        border-radius:24px;
    }
    .name{
        float:left;
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        float:left;
        font-size:13px;
        line-height:24px;
        margin-bottom:20px;
        color:#999;
    }
`;

export const LoadMore=styled.div`
    width:100%;
    margin:30px 0;
    height:40px;
    cursor:pointer;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
`;

export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    font-size:14px;
    height:60px;
    line-height:60px;
    cursor:pointer;
    width:60px;
    text-align：center;
    border:1px solid #ccc;
`;