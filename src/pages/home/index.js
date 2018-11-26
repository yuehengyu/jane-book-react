import React, {PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';

class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-image' src="https://www.telekom.com/resource/image/530616/landscape_ratio2x1/3000/1500/c3e6730fcd3f9223420a2ab53db0ede4/po/bi-blogschmuckbild-en.jpg"></img>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>BackTop</BackTop>:null}
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapState=(state)=>({
    showScroll: state.getIn(['home','showScroll'])
});

const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState,mapDispatch)(Home);