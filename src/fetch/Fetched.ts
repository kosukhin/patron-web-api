import { Guest, SourceWithPool } from "patron-oop";

interface FetchRequestType extends RequestInit {
  url: string;
  asJson: boolean;
}

/**
 * Wrapper around FetchAPI
 * https://kosukhin.github.io/patron-web-api/#/fetch/fetched
 */
export class Fetched<T> {
  private source = new SourceWithPool<T>();

  public constructor(private errors: Guest<Error>) {}

  public do() {
    return new Guest<FetchRequestType>((request) => {
      fetch(request.url, request)
        .then((resp) => {
          if (!resp.ok) {
            return Promise.reject(new Error("Error of status " + resp.status));
          }
          if (request.asJson) {
            return resp.json();
          }
          return resp.text();
        })
        .then((content) => {
          this.source.give(content);
        })
        .catch((e) => {
          this.errors.give(e);
        });
    });
  }

  public result() {
    return this.source;
  }
}
