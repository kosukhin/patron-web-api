import { SourceType } from "patron-oop";
import { HistoryPageDocument } from "src/history-api/HistoryPageDocument";

export class HistoryPoppedPage {
  public constructor(private pageSource: SourceType<HistoryPageDocument>) {}

  public watchPop() {
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        this.pageSource.give({
          url: state.url,
          title: "",
          data: event.state,
        });
      }
    });
  }
}
