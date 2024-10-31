'use strict';

class HistoryCurrentPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        this.pageSource.receive({
          url: state.url,
          title: "",
          data: event.state
        });
      }
    });
  }
  page(guest) {
    this.pageSource.receiving(guest);
    return this;
  }
}

class HistoryNewPage {
  receive(value) {
    history.pushState(value.data ?? {}, value.title, value.url);
    return this;
  }
}

exports.HistoryCurrentPage = HistoryCurrentPage;
exports.HistoryNewPage = HistoryNewPage;
//# sourceMappingURL=patron-web-api.js.map
