const SELECTED_VALUE = {
  popularDescending: 'popularDescending',
  popularAscending: 'popularAscending',
  ratingDescending: 'ratingDescending',
  ratingAscending: 'ratingAscending',
};
const SELECTED_YEAR = {
  any: 'any',
  2020: 2020,
  2019: 2019,
  2018: 2018,
  2017: 2017,
};
const PER_PAGE = 10;

const SELECTED_QUICK = {
  choose: 'choose',
  favorite: 'favorite',
  postpone: 'postpone',
};

type Genre = {
  id: number;
  name: string;
};

const genres = [
  {
    id: 28,
    name: 'боевик',
  },
  {
    id: 12,
    name: 'приключения',
  },
  {
    id: 16,
    name: 'мультфильм',
  },
  {
    id: 35,
    name: 'комедия',
  },
  {
    id: 80,
    name: 'криминал',
  },
  {
    id: 99,
    name: 'документальный',
  },
  {
    id: 18,
    name: 'драма',
  },
  {
    id: 10751,
    name: 'семейный',
  },
  {
    id: 14,
    name: 'фэнтези',
  },
  {
    id: 36,
    name: 'история',
  },
  {
    id: 27,
    name: 'ужасы',
  },
  {
    id: 10402,
    name: 'музыка',
  },
  {
    id: 9648,
    name: 'детектив',
  },
  {
    id: 10749,
    name: 'мелодрама',
  },
  {
    id: 878,
    name: 'фантастика',
  },
  {
    id: 10770,
    name: 'телевизионный фильм',
  },
  {
    id: 53,
    name: 'триллер',
  },
  {
    id: 10752,
    name: 'военный',
  },
  {
    id: 37,
    name: 'вестерн',
  },
];

export { genres, SELECTED_VALUE, SELECTED_YEAR, PER_PAGE, SELECTED_QUICK };
export type { Genre };
