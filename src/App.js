import React from 'react';
import './App.css';
import Home from './pages/home'
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Heroes from "./pages/heroes";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Layout, Menu, Breadcrumb} from 'antd';
import {createBrowserHistory} from 'history';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item onClick={() => history.push('/')} key="1">Home</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu onTitleClick={() => {
                                    history.push('/heroes')
                                }}
                                         key="sub1"
                                         icon={<UserOutlined/>}
                                         title="Heroes">

                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Switch>
                                    <Route path="/heroes">
                                        <Heroes/>
                                    </Route>
                                    <Route path="/">
                                        <Home/>
                                    </Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
