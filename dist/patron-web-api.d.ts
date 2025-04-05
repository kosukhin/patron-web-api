import { GuestType, GuestObjectType, Guest, SourceWithPool } from 'patron-oop';

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

export { Fetched, HistoryNewPage, type HistoryPageDocument, HistoryPoppedPage };
