class HistoryCurrentPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
    window.addEventListener("popstate", (event) => {
      pageSource.receive({
        url: document.location,
        title: "",
        data: event.state
      });
    });
  }
  page(guest) {
    this.pageSource.receiving(guest);
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

export { HistoryCurrentPage, HistoryNewPage };
//# sourceMappingURL=patron-web-api.mjs.map
