class HistoryCurrentPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        pageSource.receive({
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
