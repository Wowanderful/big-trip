import SortView from '../view/sort-view.js';
import BoardEventsView from '../view/trip-events-view.js';
import {render} from '../render.js';

export default class Presenter {

boardComponent = new BoardEventsView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render (this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
  }
}
