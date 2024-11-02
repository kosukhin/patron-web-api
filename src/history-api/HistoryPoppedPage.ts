import { give, GuestType } from "patron-oop";

export class HistoryPoppedPage {
  public constructor(private pageSource: GuestType<string>) {}

  public watchPop() {
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        give(state.url, this.pageSource);
      }
    });
  }
}
