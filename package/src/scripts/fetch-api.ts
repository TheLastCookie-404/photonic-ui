import http from "http";

function fetchApi(url: string) {
  http.get(url, (response) => response);
}

export { fetchApi };
