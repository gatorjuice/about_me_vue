import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_ABOUT_ME_API_ENDPOINT;
axios.defaults.timeout = process.env.VUE_APP_AXIOS_TIMEOUT;

class HttpService {
  constructor() {
    let service = axios.create();

    service.interceptors.response.use(this.handleSuccess, this.handleError);

    if (process.env.NODE_ENV === "development") {
      service.interceptors.request.use((request) => {
        console.log("Starting Request", JSON.stringify(request, null, 2));
        return request;
      });

      service.interceptors.response.use((response) => {
        console.log("Response:", JSON.stringify(response, null, 2));
        return response;
      });
    }
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    console.log(error);
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/login");
        break;
      case 404:
        this.redirectTo(document, "/");
        break;
      default:
        this.redirectTo(document, "/");
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  get(path, headers, callback) {
    return this.service.get(path, { headers: headers }).then((response) => {
      // this.store.commit("addApiRequest", {
      //   id: uuidv4(),
      //   url: `GET ${path}`,
      //   response: {
      //     body: response.data,
      //     status: response.status,
      //   },
      // });
      return callback(response.status, response.data);
    });
  }

  delete(path, headers, callback) {
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        // this.store.commit("addApiRequest", {
        //   id: uuidv4(),
        //   url: `DELETE ${path}`,
        //   response: {
        //     body: response.data,
        //     status: response.status,
        //   },
        // });
        return callback(response.status, response.data);
      });
  }

  post(path, payload, headers, callback) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => {
        // this.store.commit("addApiRequest", {
        //   id: uuidv4(),
        //   url: `POST ${path}`,
        //   payload: payload,
        //   response: {
        //     body: response.data,
        //     status: response.status,
        //   },
        // });
        return callback(response.status, response.data);
      });
  }

  headers() {
    console.log(this.store.state.jwt);
    return {
      Authorization: `Bearer ${this.store.state.jwt}`,
    };
  }
}

export default new HttpService();
