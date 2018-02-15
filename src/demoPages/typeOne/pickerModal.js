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
    this.handleRangePickerChange = this.handleRangePickerChange.bind(this);
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

  handleRangePickerChange = values => {
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
        <Modal
          closable={false}
          maskClosable={false}
          width={600}
          visible={true}
          title="Select From Season or Custom"
          footer={footer}
        >
          <PickerModalWrapper>
            <Segment>
              <FormItem>
                <Radio
                  onChange={this.handleDatePickerTypeChange}
                  checked={datePickerSelectedType === datePickerTypes.SEASON}
                  name="datePickerType"
                  id="datePickerType"
                  value={datePickerTypes.SEASON}
                >
                  Select from a season
                </Radio>
                <br />

                <Select
                  disabled={datePickerSelectedType !== datePickerTypes.SEASON}
                  showSearch
                  style={{ width: 330 }}
                  placeholder="Select a season"
                  optionFilterProp="children"
                  onChange={this.handleSeasonSelectChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {seasons &&
                    seasons.map((season, index) => (
                      <Option key={season.guid}>{season.seasonName}</Option>
                    ))}
                </Select>
              </FormItem>

              <FormItem>
                <Radio
                  onChange={this.handleDatePickerTypeChange}
                  checked={datePickerSelectedType === datePickerTypes.CUSTOM}
                  name="datePickerType"
                  id="datePickerType"
                  value={datePickerTypes.CUSTOM}
                >
                  Set a custom date range
                </Radio>
                <br />
                <RangePicker
                  disabled={datePickerSelectedType !== datePickerTypes.CUSTOM}
                  defaultValue={[searchRange.start, searchRange.end]}
                  onChange={this.handleRangePickerChange}
                />
              </FormItem>
            </Segment>
          </PickerModalWrapper>
        </Modal>
      );
    } else {
      return <span>error</span>;
    }
  }
}
