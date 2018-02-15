import React, { Component } from "react";
import { Form, Select, Popover, Button } from "antd";
import { SeasonSelectorFooterWrapper } from "./seasonSelectorFooter.style";
const FormItem = Form.Item;
const Option = Select.Option;

export default class SeasonSelectorFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRange: Object.assign({}, props.searchRange),
      dateChanged: false
    };

    this.handleSeasonSelectChange = this.handleSeasonSelectChange.bind(this);
  }

  handleSeasonSelectChange = value => {
    const { seasons, updateFromSeasonSelect } = this.props;

    var selectedSeason = seasons.find(s => s.guid === value);

    if (selectedSeason) {
      updateFromSeasonSelect(selectedSeason);
    }
  };

  checkIfSearchRangeMatchesAnySeason = () => {
    const { seasons, searchRange } = this.props;
    var activeSeason;

    seasons.forEach(function(season) {
      if (
        season.start.isSame(searchRange.start) &&
        season.end.isSame(searchRange.end)
      ) {
        activeSeason = season;
      }
    });

    return activeSeason;
  };

  render() {
    const { seasons, searchRange } = this.props;
    const activeSeason = this.checkIfSearchRangeMatchesAnySeason();

    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <SeasonSelectorFooterWrapper>
        <Form>
          <FormItem {...formItemLayout} label="Season">
            <Select
              defaultValue={activeSeason !== undefined ? activeSeason.guid : ''}
              showSearch
              style={{ width: 435 }}
              placeholder="Season"
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
                  <Option key={season.guid} se>
                    {season.seasonName}
                    &nbsp; ({season.start.format("MMM Do YYYY")} to{" "}
                    {season.end.format("MMM Do YYYY")}){" "}
                  </Option>
                ))}
            </Select>
          </FormItem>
        </Form>
      </SeasonSelectorFooterWrapper>
    );
  }
}

// (season.start.format("dddd, MMMM Do YYYY"))
// `Hello ${firstName}!
// How are you
// today?`
