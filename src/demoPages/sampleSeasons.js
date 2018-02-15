import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';

const sampleSeasons = [
  {
    guid: "129f66e9-52db-4a90-b0fe-fe077955df5d",
    seasonName: "Spring Break 2018",
    start: moment('2018/03/01', dateFormat),
    end: moment('2018/03/31', dateFormat)
  },
  {
    guid: "29f66e9-12db-3a78-b0fe-ze067955df4d",
    seasonName: "Bonaroo 2018",
    start: moment('2018/06/07', dateFormat),
    end: moment('2018/06/10', dateFormat)
  },
  {
    guid: "ze067955df4d-29f66e9-b0fe-12db-3a78",
    seasonName: "Christmas / New Years 2018!!",
    start: moment('2018/12/15', dateFormat),
    end: moment('2019/01/10', dateFormat)
  }
];

export { sampleSeasons, dateFormat };