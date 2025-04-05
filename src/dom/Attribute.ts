import {
  give,
  GuestCast,
  GuestType,
  SourceObjectType,
  SourceType,
  value,
} from "patron-oop";

export class Attribute implements SourceObjectType<string> {
  public constructor(
    private element: SourceType<HTMLElement>,
    private attrName: string,
    private defaultValue: string = "",
  ) {}

  public value(guest: GuestType<string>) {
    value(
      this.element,
      new GuestCast(guest, (el) => {
        give(el.getAttribute(this.attrName) || this.defaultValue, guest);
      }),
    );
    return this;
  }
}
