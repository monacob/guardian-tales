import React from 'react';
import './../App.css';
import 'antd/dist/antd.css';
import {UserOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {withRouter} from "react-router-dom";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

type Props = {
    children: React.Node
}

function MenuTemplate({children,history}: Props) {
    return (

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
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default withRouter(MenuTemplate);
