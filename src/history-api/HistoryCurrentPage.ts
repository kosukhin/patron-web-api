import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";
import { GuestType, SourceType } from "patron-oop";

export class HistoryCurrentPage {
  public constructor(private pageSource: SourceType<HistoryPageDocument>) {}

  public page(guest: GuestType<HistoryPageDocument>) {
    this.pageSource.receiving(guest);
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        this.pageSource.receive({
          url: state.url,
          title: "",
          data: event.state,
        });
      }
    });
    return this;
  }
}
