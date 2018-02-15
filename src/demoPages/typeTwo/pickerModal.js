import React, { Component } from "react";
import {
  Modal,
  DatePicker,
  Button,
  Radio,
  Form,
  Select,
  Popconfirm
} from "antd";
import { Segment } from "semantic-ui-react";
import { PickerModalWrapper } from "./pickerModal.style";
import { dateFormat } from "../sampleSeasons";
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;

const datePickerTypes = {
  SEASON: "SEASON",
  CUSTOM: "CUSTOM"
};

export default class PickerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRange: Object.assign({}, props.searchRange),
      datePickerSelectedType: datePickerTypes.SEASON,
      dateChanged: false
    };

    this.handleDatePickerTypeChange = this.handleDatePickerTypeChange.bind(
      this
    );

    this.handleSeasonSelectChange = this.handleSeasonSelectChange.bind(this);
    this.handleRangerPickerChange = this.handleRangerPickerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDatePickerTypeChange = e => {
    const { target } = e;

    this.setState({ datePickerSelectedType: target.value, dateChanged: false });
  };

  handleSeasonSelectChange = value => {
    const { seasons } = this.props;
    var selectedSeason = seasons.find(s => s.guid === value);

    if (selectedSeason) {
      console.dir(selectedSeason);
      this.updateSearchRange(selectedSeason.start, selectedSeason.end);
    }
  };

  handleRangerPickerChange = values => {
    this.updateSearchRange(values[0], values[1]);
  };

  updateSearchRange = (start, end) => {
    const { searchRange } = this.state;

    this.setState({
      searchRange: Object.assign({}, searchRange, {
        start: start,
        end: end
      }),
      dateChanged: true
    });
  };

  handleSubmit = () => {
    const { searchRange } = this.state;
    const { updateFromPicker } = this.props;

    console.dir(searchRange);

    updateFromPicker(searchRange);
  };

  render() {
    const { seasons } = this.props;
    const { closePickerFunction } = this.props;
    const { searchRange, datePickerSelectedType, dateChanged } = this.state;

    if (searchRange) {
      const cancelButton = dateChanged ? (
        <Popconfirm
          title="You have unsaved changes! Are you sure?"
          okText="Yes"
          cancelText="No"
          onConfirm={closePickerFunction}
        >
          <Button key="back">Cancel</Button>
        </Popconfirm>
      ) : (
        <Button key="back" onClick={closePickerFunction}>
          Cancel
        </Button>
      );

      const footer = (
        <div>
          {cancelButton}
          <Button
            disabled={!dateChanged}
            key="submit"
            type="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      );

      return (

        <RangePicker
          open={true}
          defaultValue={[searchRange.start, searchRange.end]}
          onChange={this.handleRangerPickerChange}
        />

      );
    } else {
      return <span>fooo</span>;
    }
  }
}
