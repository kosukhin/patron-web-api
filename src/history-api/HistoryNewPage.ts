import { GuestObjectType } from "patron-oop";
import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryNewPage implements GuestObjectType<HistoryPageDocument> {
  public give(value: HistoryPageDocument) {
    const correctUrl = location.href.replace(location.origin, "");
    if (value.url === correctUrl) {
      return this;
    }
    history.pushState(
      Object.assign({}, value.data ?? {}, {
        ...value,
        date: Date.now(),
      }),
      value.title,
      value.url,
    );
    return this;
  }
}
