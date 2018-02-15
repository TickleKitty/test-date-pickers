import React from "react";
import { Icon } from "antd";
import { activeToggleBox, showUnitCount, displayMarketName } from "./tableHelpers";

const tableSampleColumns = [
  {
    title: "Market",
    width: 200,
    fixed: "left",
    key: "key",
    render: displayMarketName
  },
  {
    title: "View Name",
    dataIndex: "viewName",
    key: "viewName"
  },
  {
    title: "Active",
    dataIndex: "viewActive",
    render: activeToggleBox,
    key: "viewActive"
  },
  {
    title: "Unit Count",
    render: showUnitCount,
    key: "activeProperties"
  }
];

const tableSampleData = [
  {
    key: "sample1guid",
    marketGuid: 'walton-guid',
    viewName: "Houses w/ bikes",
    viewActive: true,
    activeProperties: [
      '129f66e9-52db-4a90-b0fe-fe077955df5d',
      '0aee0b35-fcaf-4595-b978-c81ac69c720b'
    ]
  },
  {
    key: "sample2guid",
    marketGuid: 'walton-guid',
    viewName: "Houses w/ hot tubs",
    viewActive: true,
    activeProperties: []
  }
  // ,
  // {
  //   key: "sample2guid",
  //   marketGuid: 'orlando-guid',
  //   viewName: "Houses w/ Spas",
  //   viewActive: true,
  //   properties: [
  //     '4882820d-9e71-4c11-855c-58824bdd79ef',      
  //     '65beb382-ec07-4eb2-94b9-7e069ad6e34c'
  //     ]
  // },
  // {
  //   key: "sample3guid",
  //   marketGuid: 'jacksonville-guid',
  //   viewName: "Haunted Houses",
  //   viewActive: true,
  //   properties: [
  //     '081ce337-c093-45ef-9628-8b6b5b80fc38',
  //     'dc927c82-2df2-4e44-8167-4291a5647366',
  //     'daf7d13f-d3d6-4530-bd46-28a7e2b6971e',
  //     'fee70fa5-48ed-4ef6-8698-1dc468b0b3a5'
  //     ]
  // }

];

export { tableSampleColumns, tableSampleData };
