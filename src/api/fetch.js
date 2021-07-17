const customHeaderJson = (token_name = "access_token") => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem(token_name)}`,
});

const customHeaderFormData = (token_name = "access_token") => ({
  Authorization: `Bearer ${localStorage.getItem(token_name)}`,
  Accept: "application/json",
});

const refresh = async (url) => {
  const refreshToken = localStorage.getItem("refresh_token");
  return fetch(`${process.env.REACT_APP_URL_API}${url}`, {
    method: "post",
    headers: customHeaderJson("refresh_token"),
    body: JSON.stringify({ refresh_token: refreshToken }),
  })
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => error);
};

const base = (method, url, data = {}, option = "json") => {
  const body = method !== "get" ? JSON.stringify(data) : null;
  return fetch(`${process.env.REACT_APP_API}${url}`, {
    method,
    headers: option === "json" ? customHeaderJson() : customHeaderFormData(),
    body: option === "json" ? body : data,
  })
    .then(async (response) => {
      const { status } = response;
      switch (status) {
        case 401: {
          try {
            const refreshToken = localStorage.getItem("refresh_token");
            if (refreshToken !== "null") {
              const newData = await refresh("shop/auth/refresh");
              if (newData.access_token) {
                localStorage.setItem("access_token", newData.access_token);
                localStorage.setItem("expires_in", newData.expires_in);
                localStorage.setItem("refresh_token", newData.refresh_token);
                const newDataAfterRefresh = await base(method, url, data);
                return newDataAfterRefresh;
              }
              if (newData.message) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                throw new Error("error");
              }
            }
            localStorage.removeItem("access_token");
            throw new Error("error");
          } catch (e) {
            throw new Error(e);
          }
        }
        case 500: {
          throw new Error("error");
        }
        default: {
          try {
            const res = await response.json();
            return { ...res, status };
          } catch {
            return { status };
          }
        }
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const Fetch = {};
["get", "post", "put", "delete"].forEach((method) => {
  Fetch[method] = base.bind(null, method);
});
export default Fetch;
