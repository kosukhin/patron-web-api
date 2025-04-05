import { GuestObjectType } from "patron-oop";

export class StyleInstalled implements GuestObjectType<string> {
  public give(value: string): this {
    const styleEl = document.createElement("style");
    styleEl.textContent = value;
    document.head.appendChild(styleEl);
    return this;
  }
}
