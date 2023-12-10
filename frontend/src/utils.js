const SERVER_ORIGIN = "";

const loginUrl = `${SERVER_ORIGIN}/login`; // /login

export const login = (credential) => {
  const formData = new FormData(); //key value pairs
  formData.append("username", credential.username);
  formData.append("password", credential.password);

  //http://localhost:8080/login

  //now loginUrl = '/login'
  //we are missing http://localhost:8080
  return fetch(loginUrl, {
    // call backend api
    method: "POST",
    credentials: "include",
    body: formData,
  }).then((response) => {
    if (response.status !== 204) {
      throw Error("Fail to log in");
    }
  });
};

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = () => {
  return fetch(logoutUrl, {
    method: "POST",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 204) {
      // 204 no content
      throw Error("Fail to log out");
    }
  });
};

const topGamesUrl = `${SERVER_ORIGIN}/game`;

export const getTopGames = () => {
  return fetch(topGamesUrl).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get top games");
    }

    return response.json(); // 找到body，parse成json格式并作为promise返回，return a promise
  });
};

const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;

const getGameDetails = (gameName) => {
  return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to find the game");
    }

    return response.json();
  });
};

const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;

export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to find the game");
    }
    return response.json();
  });
};

export const searchGameByName = (gameName) => {
  return getGameDetails(gameName).then((data) => {
    if (data && data[0].id) {
      return searchGameById(data[0].id);
    }

    throw Error("Fail to find the game");
  });
};

const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;

export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", //把cookies什么的传到后端
    body: JSON.stringify({ favorite: favItem }),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to add favorite item");
    }
  });
  // promise success - .then()， .then()返回的也是个promise
  //          fail- .catch()，接住错误
};

export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }, //json 必须伴随着header
    credentials: "include",
    body: JSON.stringify({ favorite: favItem }), //变为json 轻量化 方便传输
  }).then((response) => {
    //fetch/then return response if success
    if (response.status !== 200) {
      throw Error("Fail to delete favorite item");
    }
  });
};

export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get favorite item");
    }

    return response.json();
  });
};

const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;

export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get recommended item");
    }

    return response.json();
  });
};
