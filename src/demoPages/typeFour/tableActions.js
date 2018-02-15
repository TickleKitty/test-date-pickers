import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import 'antd/dist/antd.css';

export default class TableActions extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { onEditAction, toggleAction, recordForEdit } = this.props;

    return (
      <div>
        <span>
          <a href="#" onClick={() => onEditAction(recordForEdit)}>Edit</a>
        </span>
        <span>&nbsp;|&nbsp;</span>
        <span>
          {recordForEdit.viewActive &&

            <Popconfirm title='Are You Sure?' onConfirm={() => toggleAction(recordForEdit)}
              okText='Yes' cancelText='No'>
              <a href="#">Delete</a>
            </Popconfirm>

          }

          {recordForEdit.viewActive ||

            <Popconfirm title='Are You Sure?' onConfirm={() => toggleAction(recordForEdit)}
              okText='Yes' cancelText='No'>
              <a href="#">Activate</a>
            </Popconfirm>

          }
        </span>
      </div>
    );

  }
};