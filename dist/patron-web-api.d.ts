import { GuestType, GuestObjectType, Guest, SourceWithPool, SourceObjectType, SourceType } from 'patron-oop';

declare class HistoryPoppedPage {
    private pageSource;
    constructor(pageSource: GuestType<string>);
    watchPop(): void;
}

declare class HistoryNewPage implements GuestObjectType<string> {
    give(url: string): this;
}

interface HistoryPageDocument {
    url: string;
    title: string;
    data?: unknown;
}

interface FetchRequestType extends RequestInit {
    url: string;
    asJson: boolean;
}
/**
 * Wrapper around FetchAPI
 * https://kosukhin.github.io/patron-web-api/#/fetch/fetched
 */
declare class Fetched<T> {
    private errors;
    private source;
    constructor(errors: Guest<Error>);
    do(): Guest<FetchRequestType>;
    result(): SourceWithPool<T>;
}

declare class Element implements SourceObjectType<HTMLElement> {
    private selector;
    constructor(selector: SourceType<string>);
    value(guest: GuestType<HTMLElement>): this;
}

declare class Attribute implements SourceObjectType<string> {
    private element;
    private attrName;
    private defaultValue;
    constructor(element: SourceType<HTMLElement>, attrName: string, defaultValue?: string);
    value(guest: GuestType<string>): this;
}

declare class StyleInstalled implements GuestObjectType<string> {
    give(value: string): this;
}

declare class Log implements GuestObjectType<unknown> {
    private title;
    constructor(title?: string);
    introduction(): "guest" | "patron";
    give(value: unknown): this;
}

export { Attribute, Element, Fetched, HistoryNewPage, type HistoryPageDocument, HistoryPoppedPage, Log, StyleInstalled };
