import React, {PureComponent} from 'react';
import {WriterWrapper,WriterInfo} from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent{
    render(){
        const {list}=this.props;
        return(
            <WriterWrapper>
                {
                    list.map((item)=>{
                        return (
                            <WriterInfo key={item.get('id')}>
                                <img alt='' className='writer-pic' src={item.get('imgUrl')}></img>
                                <h3 className='name'>{item.get('name')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </WriterInfo>
                        )
                    })
                }
            </WriterWrapper>

        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','writerList'])
});

export default connect(mapState,null)(Writer);