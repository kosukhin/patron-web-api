'use strict';

var patronOop = require('patron-oop');

class HistoryPoppedPage {
  constructor(pageSource) {
    this.pageSource = pageSource;
  }
  watchPop() {
    window.addEventListener("popstate", (event) => {
      const { state } = event;
      if (state?.url) {
        patronOop.give(state.url, this.pageSource);
      }
    });
  }
}

class HistoryNewPage {
  give(url) {
    const correctUrl = location.href.replace(location.origin, "");
    if (url === correctUrl) {
      return this;
    }
    history.pushState(
      {
        url,
        date: Date.now()
      },
      "Loading...",
      url
    );
    return this;
  }
}

exports.HistoryNewPage = HistoryNewPage;
exports.HistoryPoppedPage = HistoryPoppedPage;
//# sourceMappingURL=patron-web-api.cjs.map
