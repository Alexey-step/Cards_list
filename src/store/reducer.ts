import { createReducer } from '@reduxjs/toolkit';
import * as ActionCreator from './action-creators';
import { Card } from '../types';

interface InitialStateProps {
  cards: Card[];
  card?: Card,
  option: string,
  isAscending: boolean,
  isBlocking: boolean
}

export const InitialState: InitialStateProps = {
  cards: [],
  option: '',
  isAscending: true,
  isBlocking: false,
};

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(ActionCreator.setActiveCard, (state, action) => {
      state.card = action.payload;
    })
    .addCase(ActionCreator.setCard, (state, action) => {
      state.cards = [...state.cards, action.payload];
    })
    .addCase(ActionCreator.updateCards, (state, action) => {
      const index = state.cards.findIndex((card) => { return card.id === action.payload.id; });
      if (index !== -1) {
        state.cards = [
          ...state.cards.slice(0, index),
          action.payload,
          ...state.cards.slice(index + 1),
        ];
      } else {
        state.cards = [...state.cards, action.payload];
      }
    })
    .addCase(ActionCreator.setLiked, (state, action) => {
      const index = state.cards.findIndex((card) => { return card.id === action.payload; });
      const oldCard = state.cards[index];
      const newCard = {
        ...oldCard,
        isLiked: !oldCard.isLiked,
      };
      state.cards = [
        ...state.cards.slice(0, index),
        newCard,
        ...state.cards.slice(index + 1),
      ];
    })
    .addCase(ActionCreator.deleteCard, (state, action) => {
      const index = state.cards.findIndex((card) => { return card.id === action.payload; });
      state.cards = [
        ...state.cards.slice(0, index),
        ...state.cards.slice(index + 1),
      ];
    })
    .addCase(ActionCreator.setOption, (state, action) => {
      state.option = action.payload;
    })
    .addCase(ActionCreator.setIsAscending, (state) => {
      state.isAscending = !state.isAscending;
    })
    .addCase(ActionCreator.setIsBlocking, (state, action) => {
      state.isBlocking = action.payload;
    });
});

export type RootState = ReturnType<typeof reducer>;
