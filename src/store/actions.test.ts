import * as ActionCreator from './action-creators';
import ActionType from './actions';
import { cards, TEST } from '../mocks/test-mocks';

describe('Action creators work correctly', () => {
  it('setActiveCard action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: cards.start[0],
    };

    expect(ActionCreator.setActiveCard(cards.start[0])).toEqual(expectedAction);
  });
  it('setCard action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_CARD,
      payload: cards.start[0],
    };

    expect(ActionCreator.setCard(cards.start[0])).toEqual(expectedAction);
  });
  it('setOption action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_OPTION,
      payload: TEST,
    };

    expect(ActionCreator.setOption(TEST)).toEqual(expectedAction);
  });
  it('setLiked action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_LIKED,
      payload: cards.start[0].id,
    };

    expect(ActionCreator.setLiked(cards.start[0].id)).toEqual(expectedAction);
  });
  it('deleteCard action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.DELETE_CARD,
      payload: cards.start[0].id,
    };

    expect(ActionCreator.deleteCard(cards.start[0].id)).toEqual(expectedAction);
  });
  it('updateCards action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_CARDS,
      payload: cards.start[0],
    };

    expect(ActionCreator.updateCards(cards.start[0])).toEqual(expectedAction);
  });
  it('setIsAscending action creator returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_ASCENDING,
    };

    expect(ActionCreator.setIsAscending()).toEqual(expectedAction);
  });
});
