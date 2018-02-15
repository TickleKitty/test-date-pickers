import React, { Component } from "react";
import { DatePicker, Button, Popconfirm } from "antd";
import { Segment } from "semantic-ui-react";
import { RangePickerWrapper } from "./rangePicker.style";
import { dateFormat } from "../sampleSeasons";
import SeasonSelectorFooter from "./seasonSelectorFooter";
const { RangePicker } = DatePicker;

export default class RangePickerPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRange: Object.assign({}, props.searchRange),
      pickerActive: false,
      dateChanged: false
    };

    this.handleRangePickerChange = this.handleRangePickerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFromSeasonSelect = this.updateFromSeasonSelect.bind(this);
  }

  handleRangePickerChange = values => {
    const { updateFromPicker } = this.props;

    updateFromPicker({
      start: values[0],
      end: values[1]
    });
  };

  updateFromSeasonSelect = season => {
    const { updateFromPicker } = this.props;

    updateFromPicker({
      start: season.start,
      end: season.end
    });
  };

  handleSubmit = () => {
    const { searchRange } = this.state;
    const { updateFromPicker } = this.props;

    updateFromPicker(searchRange);
  };

  render() {
    const { seasons } = this.props;
    const { searchRange } = this.state;

    if (searchRange) {
      return (
        <RangePickerWrapper>
          <RangePicker
            width={550}
            open={true}
            value={[searchRange.start, searchRange.end]}
            onChange={this.handleRangePickerChange}
            renderExtraFooter={() => (
              <SeasonSelectorFooter
                searchRange={searchRange}
                seasons={seasons}
                updateFromSeasonSelect={this.updateFromSeasonSelect}
              />
            )}
          />
        </RangePickerWrapper>
      );
    } else {
      return <span>error</span>;
    }
  }
}
