import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Tabs } from "antd";
import { Menu, Icon, Layout, BackTop } from "antd";
import "antd/dist/antd.css";
import "./test.css";
import {
  TypeOne,
  TypeTwo
} from "./demoPages";
const { Header, Footer, Content } = Layout;
const TabPane = Tabs.TabPane;

export default class GridExampleStretched extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BackTop />
        <Layout className="layoutBox">
          <Header className="headerStyle">
          <h1>Datepicker Demos</h1>
          </Header>
          <Content style={{ padding: "20px 50px" }}>
            <Grid columns={2}>
              <Grid.Row stretched>
                <Grid.Column width={16}>
                  <Segment>
                    <Tabs defaultActiveKey="2" tabPosition="left">
                      <TabPane tab="Type 1" key="1">
                        <TypeOne />
                      </TabPane>
                      <TabPane tab="Type 2" key="2">
                        <TypeTwo />
                      </TabPane>
 
                     {/*} <TabPane tab="Users" key="5">
                        <Users />
                        </TabPane>
                      */}
                    </Tabs>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Content>

          <Footer>2018 VRMarket Data</Footer>
        </Layout>
      </div>
    );
  }
}
