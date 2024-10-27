import { SourceType } from "patron-oop";
import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryNewPage {
  public constructor(private pageSource: SourceType<HistoryPageDocument>) {}

  public receive(value: HistoryPageDocument) {
    history.pushState(value.data ?? {}, value.title, value.url);
    this.pageSource.receive(value);
    return this;
  }
}
