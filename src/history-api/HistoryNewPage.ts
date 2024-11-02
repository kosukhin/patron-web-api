import { GuestObjectType } from "patron-oop";

export class HistoryNewPage implements GuestObjectType<string> {
  public give(url: string) {
    const correctUrl = location.href.replace(location.origin, "");
    if (url === correctUrl) {
      return this;
    }
    history.pushState(
      {
        url,
        date: Date.now(),
      },
      "Loading...",
      url,
    );
    return this;
  }
}
