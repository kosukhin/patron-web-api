import { HistoryPageDocument } from 'src/history-api/HistoryPageDocument';
import { SourceType, GuestType } from 'patron-oop';

declare class HistoryCurrentPage {
    private pageSource;
    constructor(pageSource: SourceType<HistoryPageDocument>);
    page(guest: GuestType<HistoryPageDocument>): this;
}

declare class HistoryNewPage implements GuestType<HistoryPageDocument> {
    private pageSource;
    constructor(pageSource: SourceType<HistoryPageDocument>);
    receive(value: HistoryPageDocument): this;
}

export { HistoryCurrentPage, HistoryNewPage };
