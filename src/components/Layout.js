import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd'; // If using Ant Design
const { Header, Content, Footer } = Layout;

const Layout = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/transactions">Transactions</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/reports">Reports</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '64px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Merchant Agent App ©2024</Footer>
    </Layout>
  );
};

export default Layout;