import styled from "styled-components";

const PropertySelectorBoxWrapper = styled.div`
  border: #1px solid green;
  margin-bottom: 10px;

  .selectListItem {
    width: 100%;
    cursor: pointer;
  }

  .selectListItem .checkBoxWrapper {
    float: left;
    padding: 3px 10px 0px 10px;
  }

  .selectListItem span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 230px;
    display: inline-block;
  }

  .ant-list {
    min-height: 300px;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .ant-checkbox {
    margin-bottom: 10px;
  }

  .moveButtons button {
    border: 1px solid green;
  }
`;

export { PropertySelectorBoxWrapper };
