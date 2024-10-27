import { HistoryPageDocument as HistoryPageDocument$1 } from 'src/history-api/HistoryPageDocument';
import { SourceType, GuestType } from 'patron-oop';

declare class HistoryCurrentPage {
    private pageSource;
    constructor(pageSource: SourceType<HistoryPageDocument$1>);
    page(guest: GuestType<HistoryPageDocument$1>): this;
}

declare class HistoryNewPage {
    private pageSource;
    constructor(pageSource: SourceType<HistoryPageDocument$1>);
    receive(value: HistoryPageDocument$1): this;
}

interface HistoryPageDocument {
    url: string;
    title: string;
    data?: unknown;
}

export { HistoryCurrentPage, HistoryNewPage, type HistoryPageDocument };
