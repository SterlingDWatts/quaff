import config from "../config";
import TokenService from "./token-service";

const ModulesApiService = {
  getModules() {
    const token = TokenService.hasAuthToken()
      ? `Bearer ${TokenService.getAuthToken()}`
      : "";
    return fetch(`${config.API_ENDPOINT}/modules`, {
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getModule(moduleId) {
    const token = TokenService.hasAuthToken()
      ? `Bearer ${TokenService.getAuthToken()}`
      : "";
    return fetch(`${config.API_ENDPOINT}/modules/${moduleId}`, {
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  insertTest(moduleId, views, score) {
    const token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/tests/${moduleId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        score: score,
        views: views,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getTopics() {
    const token = TokenService.hasAuthToken()
      ? `Bearer ${TokenService.getAuthToken()}`
      : "";
    return fetch(`${config.API_ENDPOINT}/topics`, {
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getTopic(topicId) {
    const token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  insertViews(views) {
    const token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/views`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        views: views,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ModulesApiService;
