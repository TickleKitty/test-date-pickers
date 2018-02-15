import React, { Component } from "react";
import uuid from "react-native-uuid";
import update from "immutability-helper";
import { Button, Alert } from "antd";
import "antd/dist/antd.css";
import "../../test.css";
import { sampleSeasons, dateFormat } from "../sampleSeasons";
import RangePickerPopup from "./rangePickerPopup";
import moment from "moment";

import { tableSampleColumns, tableSampleData } from "./tableSampleData";
import {
  marketsWithPropertyExamples,
  getMarket,
  prepareTransferBoxData
} from "./lookups";

export default class TypeTwo extends Component {
  constructor(props) {
    super(props);

    this.handleStartTestPicker = this.handleStartTestPicker.bind(this);

    this.state = {
      searchRange: {
        start: moment("2018/12/15", dateFormat),
        end: moment("2019/01/10", dateFormat)
      },
      testPickerActive: false
    };
  }

  closeDatePicker = () => {
    this.setState({
      testPickerActive: false
    });
  };

  handleStartTestPicker = e => {
    this.setState({
      testPickerActive: true
    });
  };

  updateFromPicker = newSearchRange => {

    this.setState({ searchRange: newSearchRange });
    this.closeDatePicker();
  };

  render() {
    const { searchRange, testPickerActive } = this.state;

    return (
      <div>
        <Alert message="Range picker with seasons on the footer." type="success" />
        <h2>Search Start Date</h2>
        <span>{searchRange.start.format("dddd, MMMM Do YYYY")}</span>
        <hr />
        <h2>Search End Date</h2>
        <span>{searchRange.end.format("dddd, MMMM Do YYYY")}</span>
        <hr />
        <br />
        <br />
        <Button type="primary" onClick={this.handleStartTestPicker}>
          Change Dates
        </Button>
        {testPickerActive && (
          <RangePickerPopup
            seasons={sampleSeasons}
            searchRange={searchRange}
            closePickerFunction={this.closeDatePicker}
            updateFromPicker={this.updateFromPicker}
          />
        )}
      </div>
    );
  }
}
