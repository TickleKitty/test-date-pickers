import React from 'react';
import TableActions from './tableActions';
import { Checkbox } from 'antd';
import { getMarket } from "./lookups";

const activeToggleBox = (text, record) => {
  const { viewActive } = record;

  return <div className='toggleCheckBox'><Checkbox disabled checked={viewActive}></Checkbox></div>;
}

const appendActionsColumn = (currentColumns, actionsColumn) => {
  return currentColumns.push(actionsColumn);
}

const showUnitCount = (text, record) => {
  const { activeProperties } = record;

  return <span>{activeProperties.length }</span>;
}

const displayMarketName = (text, record) => {
  const { marketGuid } = record;

  var market = getMarket(marketGuid);

  if (market) {
    return <span>{market.marketName}</span>;
  } 
  else 
  {
    return '';
  }

}

const actions = (text, recordForEdit) => {
  return <TableActions recordForEdit={recordForEdit} />;
}

export { activeToggleBox, actions, appendActionsColumn, showUnitCount, displayMarketName }