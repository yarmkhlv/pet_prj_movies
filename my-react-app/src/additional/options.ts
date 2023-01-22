import { SELECTED_VALUE, SELECTED_YEAR } from './consts';

export type Option = {
  value: string | number;
  label: string;
  id: number;
  default: boolean;
};

const OPTIONS_SORT: Option[] = [
  {
    value: SELECTED_VALUE.popularDescending,
    label: 'Популярные по возрастанию',
    id: 1,
    default: true,
  },
  {
    value: SELECTED_VALUE.popularAscending,
    label: 'Популярные по убыванию',
    id: 2,
    default: false,
  },
  {
    value: SELECTED_VALUE.ratingDescending,
    label: 'Рейтинг по убыванию',
    id: 3,
    default: false,
  },
  {
    value: SELECTED_VALUE.ratingAscending,
    label: 'Рейтинг по возрастанию',
    id: 4,
    default: false,
  },
];

const OPTIONS_YEAR: Option[] = [
  {
    value: SELECTED_YEAR.any,
    label: 'Любой',
    id: 1,
    default: true,
  },
  {
    value: SELECTED_YEAR[2020],
    label: '2020',
    id: 2,
    default: false,
  },
  {
    value: SELECTED_YEAR[2019],
    label: '2019',
    id: 3,
    default: false,
  },
  {
    value: SELECTED_YEAR[2018],
    label: '2018',
    id: 4,
    default: false,
  },
  {
    value: SELECTED_YEAR[2017],
    label: '2017',
    id: 5,
    default: false,
  },
];

export { OPTIONS_SORT, OPTIONS_YEAR };
