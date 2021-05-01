import { reducer, InitialState } from './reducer';
import * as ActionCreator from './action-creators';
import { cards, TEST } from '../mocks/test-mocks';

describe('Reducer work correctly', () => {
  it('Reducer should change card by setActiveCard action creator given value', () => {
    expect(reducer(InitialState, ActionCreator.setActiveCard(cards.start[0])))
      .toEqual({
        ...InitialState,
        card: cards.start[0],
      });
  });
  it('Reducer should change cards by setCard action creator given value', () => {
    const state = {
      ...InitialState,
      cards: [cards.start[0]],
    };
    expect(reducer(state, ActionCreator.setCard(cards.start[1])))
      .toEqual({
        ...InitialState,
        cards: [cards.start[0], cards.start[1]],
      });
  });
  it('Reducer should update cards by updateCards action creator given value', () => {
    expect(reducer(InitialState, ActionCreator.updateCards(cards.start[0])))
      .toEqual({
        ...InitialState,
        cards: [cards.start[0]],
      });
  });
  it('Reducer should delete card form cards by deleteCard action creator given value', () => {
    const state = {
      ...InitialState,
      cards: [...cards.start],
    };
    const expectedState = {
      ...InitialState,
      cards: [cards.start[1]],
    };
    expect(reducer(state, ActionCreator.deleteCard(cards.start[0].id)))
      .toEqual(expectedState);
  });
  it('Reducer should update cards by setLiked action creator given value', () => {
    const state = {
      ...InitialState,
      cards: [...cards.start],
    };
    const expectedState = {
      ...InitialState,
      cards: [...cards.end],
    };
    expect(reducer(state, ActionCreator.setLiked(cards.start[1].id)))
      .toEqual(expectedState);
  });
  it('Reducer should update option by setOption action creator given value', () => {
    const state = {
      ...InitialState,
      option: '',
    };
    const expectedState = {
      ...InitialState,
      option: TEST,
    };
    expect(reducer(state, ActionCreator.setOption(TEST)))
      .toEqual(expectedState);
  });
  it('Reducer should update isAscending by setIsAscending action creator', () => {
    const state = {
      ...InitialState,
      isAscending: true,
    };
    const expectedState = {
      ...InitialState,
      isAscending: false,
    };
    expect(reducer(state, ActionCreator.setIsAscending()))
      .toEqual(expectedState);
  });
});
