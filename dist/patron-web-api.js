'use strict';

class HistoryCurrentPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
  }
  page(guest) {
    this.pageSource.receiving(guest);
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
    return this;
  }
}

class HistoryNewPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
  }
  receive(value) {
    history.pushState(value.data ?? {}, value.title, value.url);
    this.pageSource.receive(value);
    return this;
  }
}

exports.HistoryCurrentPage = HistoryCurrentPage;
exports.HistoryNewPage = HistoryNewPage;
//# sourceMappingURL=patron-web-api.js.map
