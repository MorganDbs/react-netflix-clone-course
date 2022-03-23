import { createSlice } from '@reduxjs/toolkit'

const userOne = {
    id: 1,
    name: 'Flavien',
    picture: 'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png',
    isLogged: false,
    watchList: [],
}

const userTwo = {
    id: 2,
    name: 'Geralt',
    picture: 'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFJSe2el5rVnCVz5d1R8pnqYzBiXwEM7ooxTNY1LCrf6HzWO0RCORDzTO9IlOqpmCYCKIVyjPX5xMFw-RLz9WpqYvEg.png',
    isLogged: false,
    watchList: [],
}

interface UserList {
  list: any[],
  connectedUser: any
  managedUser: any
}

const initialState: UserList = {
  list: [userOne, userTwo],
  connectedUser: userOne,
  managedUser: userOne,
}

const changeUserConnectedReducer = (state: UserList, action: any) => {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === action.payload.id) {
        state.list[i].isLogged = true
        state.connectedUser = state.list[i]
      }
      else {
        state.list[i].isLogged = false
      }
    }
}

const addMovieReducer = (state: UserList, action: any) => {
    for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === state.connectedUser.id) {
            state.list[i].watchList = [...state.list[i].watchList, action.payload]
        }
    }
}

const deleteMovieReducer = (state: UserList, action: any) => {
    for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === state.connectedUser.id) {
            state.list[i].watchList = state.list[i].watchList.filter((movie: { payload: any }) => movie.payload.id !== action.payload.payload.id)
        }
    }
}

const setManagedUserReducer = (state: UserList, action: any) => {
    state.managedUser = action.payload
}


const addUserReducer = (state: UserList, action: any) => {
  state.list = [...state.list, action.payload]
}

const updateUserReducer = (state: UserList, action: any) => {

  for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === state.managedUser.id) {
          state.list[i] = action.payload
      }
  }
}

const deleteUserReducer = (state: UserList, action: any) => {  
  for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === action.payload.id) {
          state.list.splice(i, 1)
      }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => addUserReducer(state, action),
    deleteUser: (state, action) => deleteUserReducer(state, action),
    changeUserConnected: (state, action) => changeUserConnectedReducer(state, action),
    addMovie: (state, action) => addMovieReducer(state, action),
    deleteMovie: (state, action) => deleteMovieReducer(state, action),
    setManagedUser: (state, action) => setManagedUserReducer(state, action),
    updateUser: (state, action) => updateUserReducer(state, action),
  },
})

export const { addUser, deleteUser, changeUserConnected, addMovie, deleteMovie, setManagedUser, updateUser } = userSlice.actions

export default userSlice.reducer