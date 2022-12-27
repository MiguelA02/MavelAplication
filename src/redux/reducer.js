import * as actions from "./actions";

const initialState = {
  characters: [
    {
      id: 1009220,
      name: "Captain America",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
        "extension": "jpg"
      }
    },
    {
      id: 1009368,
      name: "Iron Man",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
        extension: "jpg"
      }
    },
    {
      id: 1009664,
      name: "Thor",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
        extension: "jpg"
      }
    },
    {
      id: 1009189,
      name: "Black Widow",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b",
        extension: "jpg"
      }
    },
    {
      id: 1009187,
      name: "Black Panther",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
        extension: "jpg"
      }
    },
    {
      id: 1009351,
      name: "Hulk",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
        extension: "jpg"
      }
    },
    {
      id: 1009262,
      name: "Daredevil",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee",
        extension: "jpg"
      }
    },
    {
      id: 1009720,
      name: "Wong",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/30/4ce5a21096f17",
        extension: "jpg"
      }
    },
    {
      id: 1009282,
      name: "Doctor Strange",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe",
        extension: "jpg"
      }
    },
    {
      id: 1009471,
      name: "Nick Fury",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/5261a745e658d",
        extension: "jpg"
      }
    },
    {
      id: 1010763,
      name: "Gamora",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/526032a2cce62",
        extension: "jpg"
      }
    },
    {
      id: 1010365,
      name: "Nebula",
      description: "",
      modified: "2014-07-17T14:47:55-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/e/30/528d339973337",
        extension: "jpg"
      }
    },
    {
      id: 1010740,
      name: "Winter Soldier",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e",
        extension: "jpg"
      }
    },
    {
      id: 1009338,
      name: "Hawkeye",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
        extension: "jpg"
      }
    },
    {
      id: 1009562,
      name: "Scarlet Witch",
      description: "",
      modified: "2016-06-16T14:23:56-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
        extension: "jpg"
      }
    },
    {
      id: 1009718,
      name: "Wolverine",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
        extension: "jpg"
      }
    },
    {
      id: 1009268,
      name: "Deadpool",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
        extension: "jpg"
      }
    },
    {
      id: 1009378,
      name: "Jessica Jones",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/00/5390e41260345",
        extension: "jpg"
      }
    }
  ],
  characterDetails: {},
  comics: [
    {
      id: 1590,
      title: "Official Handbook...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a",
        extension: "jpg"
      }
    },
    {
      id: 15878,
      title: "Hedge Knight II ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bc49463dad62",
        extension: "jpg"
      }
    },
    {
      id: 428,
      title: "Ant-Man (2003) #4",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890",
        extension: "jpg"
      }
    },
    {
      id: 3627,
      title: "Storm (2006)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7",
        extension: "jpg"
      }
    },
    {
      id: 2088,
      title: "Official Handbook ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56",
        extension: "jpg"
      }
    },
    {
      id: 17486,
      title: "X-Men: Phoenix ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c3645d0d29e3",
        extension: "jpg"
      }
    },
    {
      id: 1689,
      title: "Official Handbook ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9",
        extension: "jpg"
      }
    },
    {
      id: 323, 
      title: "Ant-Man (2003) #2",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0",
        extension: "jpg"
      }
    },
    {
      id: 20956,
      title: "Penance: Relentless (2008)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bb860a46f58d",
        extension: "jpg"
      }
    },
    {
      id: 1994,
      title: "Official Handbook ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb",
        extension: "jpg"
      }
    },
    {
      id: 384,
      title: "Gun Theory (2003) #3",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
        extension: "jpg"
      }
    },
    {
      id: 1886,
      title: "Official Handbook ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
        extension: "jpg"
      }
    },
    {
      id: 291,
      title: "Ant-Man (2003) #1",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e",
        extension: "jpg"
      }
    },
    {
      id: 331,
      title: "Gun Theory (2003) #4",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
        extension: "jpg"
      }
    },
    {
      id: 15808,
      title: "Ultimate Spider-Man (2000)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/4bc4947ea8f4d",
        extension: "jpg"
      }
    },
    {
      id: 376,
      title: "Ant-Man (2003) #3",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7",
        extension: "jpg"
      }
    },
    {
      id: 1749,
      title: "Official Handbook of ...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4",
        extension: "jpg"
      }
    },
    {
      id: 38002,
      title: "X-Men: Fall Of T...",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/e/c0/4cbcd33563abd",
        extension: "jpg"
      }
    }
  ],
  comicDetails: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTER:
      return {
        ...state,
        characterDetails: {
          id: action.payload.data.results[0].id,
          name: action.payload.data.results[0].name,
          description: action.payload.data.results[0].description,
          thumbnail: action.payload.data.results[0].thumbnail.path,
        },
      };
    case actions.GET_COMIC_DETAILS:
      return {
        ...state,
        comicDetails: {
          id: action.payload.data.results[0].id,
          title: action.payload.data.results[0].title,
          pageCount: action.payload.data.results[0].pageCount,
          description: action.payload.data.results[0].textObjects[0].text,
          image: action.payload.data.results[0].thumbnail.path,
        },
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
