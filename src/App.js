import React, {Component, Fragment} from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {BrowserRouter, Route} from 'react-router-dom';
import {Global} from './statics/iconfont/iconfont';
import store from './store/index';
import {Provider} from 'react-redux';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <Global/>
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/write' exact component={Write}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </Fragment>


        );
    }
}

export default App;
