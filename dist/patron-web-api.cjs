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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
class Fetched {
  constructor(errors) {
    this.errors = errors;
    __publicField(this, "source", new patronOop.SourceWithPool());
  }
  do() {
    return new patronOop.Guest((request) => {
      fetch(request.url, request).then((resp) => {
        if (!resp.ok) {
          return Promise.reject(new Error("Error of status " + resp.status));
        }
        if (request.asJson) {
          return resp.json();
        }
        return resp.text();
      }).then((content) => {
        this.source.give(content);
      }).catch((e) => {
        this.errors.give(e);
      });
    });
  }
  result() {
    return this.source;
  }
}

exports.Fetched = Fetched;
exports.HistoryNewPage = HistoryNewPage;
exports.HistoryPoppedPage = HistoryPoppedPage;
//# sourceMappingURL=patron-web-api.cjs.map
