import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryNewPage {
  public receive(value: HistoryPageDocument) {
    history.pushState(value.data ?? {}, value.title, value.url);
    return this;
  }
}
