import { GuestType, SourceType } from "patron-oop";
import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryNewPage implements GuestType<HistoryPageDocument> {
  public constructor(private pageSource: SourceType<HistoryPageDocument>) {}

  public receive(value: HistoryPageDocument): this {
    history.pushState(value.data ?? {}, value.title, value.url);
    this.pageSource.receive(value);
    return this;
  }
}
