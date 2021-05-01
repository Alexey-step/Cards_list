import { createSelector } from 'reselect';
import { Options } from '../const';
import { RootState } from './reducer';

export const getCards = (state: RootState) => { return state.cards; };
export const getOption = (state: RootState) => { return state.option; };
export const isAscending = (state: RootState) => { return state.isAscending; };

export const getActiveCards = createSelector(
  [getCards, getOption, isAscending],
  (cards, option, asc) => {
    const activeCards = cards.slice();

    switch (option) {
      case Options.DATE:
        return asc ? activeCards.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); })
          : activeCards.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
      default:
        return activeCards;
    }
  },
);
