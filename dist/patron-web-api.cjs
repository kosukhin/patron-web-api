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

class Element {
  constructor(selector) {
    this.selector = selector;
  }
  value(guest) {
    patronOop.value(
      this.selector,
      new patronOop.GuestCast(guest, (selectorContent) => {
        const element = document.querySelector(selectorContent);
        if (element) {
          patronOop.give(element, guest);
        } else {
          const targetNode = document.body;
          const config = { childList: true, subtree: true };
          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (mutation.type === "childList") {
                const element2 = document.querySelector(selectorContent);
                if (element2) {
                  patronOop.give(element2, guest);
                  observer.disconnect();
                  break;
                }
              }
            }
          });
          observer.observe(targetNode, config);
        }
      })
    );
    return this;
  }
}

class Attribute {
  constructor(element, attrName, defaultValue = "") {
    this.element = element;
    this.attrName = attrName;
    this.defaultValue = defaultValue;
  }
  value(guest) {
    patronOop.value(
      this.element,
      new patronOop.GuestCast(guest, (el) => {
        patronOop.give(el.getAttribute(this.attrName) || this.defaultValue, guest);
      })
    );
    return this;
  }
}

class StyleInstalled {
  give(value) {
    const styleEl = document.createElement("style");
    styleEl.textContent = value;
    document.head.appendChild(styleEl);
    return this;
  }
}

class Log {
  constructor(title = "") {
    this.title = title;
  }
  introduction() {
    return "patron";
  }
  give(value) {
    console.log("LOG: ", this.title, value);
    return this;
  }
}

exports.Attribute = Attribute;
exports.Element = Element;
exports.Fetched = Fetched;
exports.HistoryNewPage = HistoryNewPage;
exports.HistoryPoppedPage = HistoryPoppedPage;
exports.Log = Log;
exports.StyleInstalled = StyleInstalled;
//# sourceMappingURL=patron-web-api.cjs.map
