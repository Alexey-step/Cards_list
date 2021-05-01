import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../pages/main/main';
import Create from '../pages/create/create';
import Info from '../pages/info/info';
import { RootState } from '../../store/reducer';
import * as ActionCreator from '../../store/action-creators';
import { Card } from '../../types';
import { AppRoute } from '../../const';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => { return state; });

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards) {
      savedCards.forEach((card: Card) => { return dispatch(ActionCreator.updateCards(card)); });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <Main />
      </Route>
      <Route path={AppRoute.CREATE}>
        <Create />
      </Route>
      <Route path={`${AppRoute.INFO}/:id`}>
        <Info />
      </Route>
    </Switch>
  );
};

export default App;
