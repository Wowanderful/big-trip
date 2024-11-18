import NewEventButtonView from './view/new-event-button-view.js';
import FilterView from './view/filters-view.js';
import Presenter from './presenters/presenter.js';

import {render} from './render.js';

const filterParent = document.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-body__container');

render (new FilterView(), filterParent);
render(new NewEventButtonView(), tripMainElement);

const presenter = new Presenter;
presenter.init(siteMainElement);


