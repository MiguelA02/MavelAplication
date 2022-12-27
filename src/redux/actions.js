export const GET_CHARACTERS = "GET_CARACTER";
export const GET_CHARACTER = "GET_CHARACTER";
export const GET_COMICS = "GET_COMICS";
export const GET_COMIC_DETAILS = "GET_COMIC_DETAILS";
export const GET_CHAARACTER_COMICS = "GET_CHARACTER_COMICS";

export const getCharacter = (name) => {
  return function (dispatch) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${name}&apikey=def82f5587f86444a30303d7fa48a68c&hash=038ffc109bd264d5f668ff80f56995ca`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_CHARACTER, payload: res }));
  };
};
export const getComics = () => {
  return {type: GET_COMICS, payload: ''}
}

export const getComicDetail = (id) => {
  return function (dispatch) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=def82f5587f86444a30303d7fa48a68c`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_COMIC_DETAILS, payload: res }));
  };
};
export const getCharacterComics = (id) => {
  return function (dispatch) {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=def82f5587f86444a30303d7fa48a68c`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_CHAARACTER_COMICS, payload: res }));
  };
};
