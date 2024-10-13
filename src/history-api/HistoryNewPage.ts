import { GuestType } from "patron-oop/src/GuestType";
import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryNewPage implements GuestType<HistoryPageDocument> {
  receive(value: HistoryPageDocument): this {
    history.pushState(value.data ?? {}, value.title, value.url);
    return this;
  }
}
