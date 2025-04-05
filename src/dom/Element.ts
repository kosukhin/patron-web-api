import {
  give,
  GuestCast,
  GuestType,
  SourceObjectType,
  SourceType,
  value,
} from "patron-oop";

export class Element implements SourceObjectType<HTMLElement> {
  public constructor(private selector: SourceType<string>) {}

  public value(guest: GuestType<HTMLElement>) {
    value(
      this.selector,
      new GuestCast(guest, (selectorContent) => {
        const element = document.querySelector(selectorContent);
        if (element) {
          give(element as HTMLElement, guest);
        } else {
          const targetNode = document.body;
          const config = { childList: true, subtree: true };

          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (mutation.type === "childList") {
                const element = document.querySelector(selectorContent);
                if (element) {
                  give(element as HTMLElement, guest);
                  observer.disconnect();
                  break;
                }
              }
            }
          });

          observer.observe(targetNode, config);
        }
      }),
    );

    return this;
  }
}
