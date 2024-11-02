import { GuestType, GuestObjectType } from 'patron-oop';

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

export { HistoryNewPage, type HistoryPageDocument, HistoryPoppedPage };
