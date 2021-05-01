export const CARDS_PER_PAGE: number = 5;

export enum AppRoute {
  MAIN = '/',
  CREATE = '/create',
  INFO = '/info',
}

export enum Options {
  DATE = 'date',
}

export const PaginateConfig = {
  PREVIOUS_LABEL: 'prev',
  NEXT_LABEL: 'next',
  BREAK_LABEL: '...',
  MARGIN_PAGES: 2,
  PAGE_RANGE: 5,
};
