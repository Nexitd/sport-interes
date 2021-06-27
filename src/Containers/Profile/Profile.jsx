import React from "react";
import { Tabs } from "antd";


const Profile = () => {
  return (
    <Tabs defaultActiveKey='1' centered>
      <Tabs.TabPane tab='Профиль' key='1'>
        <ProfileInfo />
      </Tabs.TabPane>
      <Tabs.TabPane tab='Комнаты' key='2'>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab='Вывод средств' key='3'>
        Content of Tab Pane 3
      </Tabs.TabPane>
			<Tabs.TabPane tab='Настройки' key='4'>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Profile;
