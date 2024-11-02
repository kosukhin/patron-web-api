'use strict';

class HistoryPoppedPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
  }
  watchPop() {
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state.url) {
        this.pageSource.give({
          url: state.url,
          title: "",
          data: event.state
        });
      }
    });
  }
}

class HistoryNewPage {
  give(value) {
    const correctUrl = location.href.replace(location.origin, "");
    if (value.url === correctUrl) {
      return this;
    }
    history.pushState(
      Object.assign({}, value.data ?? {}, {
        ...value,
        date: Date.now()
      }),
      value.title,
      value.url
    );
    return this;
  }
}

exports.HistoryNewPage = HistoryNewPage;
exports.HistoryPoppedPage = HistoryPoppedPage;
//# sourceMappingURL=patron-web-api.js.map
