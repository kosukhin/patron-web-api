import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";
import { GuestType, SourceType } from "patron-oop";

export class HistoryCurrentPage {
  public constructor(private pageSource: SourceType<HistoryPageDocument>) {
    window.addEventListener("popstate", (event) => {
      pageSource.receive({
        url: document.location,
        title: "",
        data: event.state,
      });
    });
  }

  public page(guest: GuestType<HistoryPageDocument>) {
    this.pageSource.receiving(guest);
    return this;
  }
}
