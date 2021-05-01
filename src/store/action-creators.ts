import { createAction } from '@reduxjs/toolkit';
import ActionType from './actions';

export const setActiveCard = createAction(ActionType.SET_ACTIVE_CARD, (card) => {
  return {
    payload: card,
  };
});

export const setCard = createAction(ActionType.SET_CARD, (card) => {
  return {
    payload: card,
  };
});

export const setLiked = createAction(ActionType.SET_LIKED, (id) => {
  return {
    payload: id,
  };
});

export const deleteCard = createAction(ActionType.DELETE_CARD, (id) => {
  return {
    payload: id,
  };
});

export const updateCards = createAction(ActionType.UPDATE_CARDS, (card) => {
  return {
    payload: card,
  };
});

export const setOption = createAction(ActionType.SET_OPTION, (option) => {
  return {
    payload: option,
  };
});

export const setIsAscending = createAction(ActionType.SET_IS_ASCENDING);
