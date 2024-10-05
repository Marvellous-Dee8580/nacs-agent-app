import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd'; // Renaming Layout from Ant Design to AntLayout to avoid conflict
const { Header, Content, Footer } = AntLayout;

const AppLayout = () => {
  return (
    <AntLayout>
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
    </AntLayout>
  );
};

export default AppLayout;
