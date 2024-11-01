import { SourceType } from 'patron-oop';
import { HistoryPageDocument as HistoryPageDocument$1 } from 'src/history-api/HistoryPageDocument';

declare class HistoryPoppedPage {
    private pageSource;
    constructor(pageSource: SourceType<HistoryPageDocument$1>);
    watchPop(): void;
}

declare class HistoryNewPage {
    receive(value: HistoryPageDocument$1): this;
}

interface HistoryPageDocument {
    url: string;
    title: string;
    data?: unknown;
}

export { HistoryNewPage, type HistoryPageDocument, HistoryPoppedPage };
