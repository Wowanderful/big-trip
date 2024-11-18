import SortView from '../view/sort-view.js';
import BoardEventsView from '../view/trip-events-view.js';
import {render} from '../render.js';

export default class Presenter {
  BoardComponent = new BoardEventsView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(BoardComponent, this.boardContainer)
    render(new SortView(), BoardComponent.getElement());
  }
}
