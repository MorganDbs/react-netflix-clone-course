import { createSlice } from '@reduxjs/toolkit'

// const picture = [
//   'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFEHx5mAAQUNHxAsuV6Yy65b9Zm6xhMgfuytCCGJoUmcbmVAOGMI1s3Bomk0rTD4A7cM4WmoF9s0gzYVLGf6_E9zEpQ.png',
//   'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png',
//   'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM65BrEcA69FfK3v0XwQ3Rr61x9fXX1u6K5k9Ql_5cX2F2jZEx8cL7cYb_N40Yc-x2gsd3I59EZFnOaAc61CrwzCMQ.png',
//   'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png',
// ]

const userOne = {
    id: 1,
    name: 'Flavien',
    email: 'fl@gmail.com',
    password: '123456',
    picture: 'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png',
    isLogged: false,
    watchList: [],
}

const userTwo = {
    id: 2,
    name: 'John',
    email: 'fl@gmail.com',
    password: '123456',
    picture: 'https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM65BrEcA69FfK3v0XwQ3Rr61x9fXX1u6K5k9Ql_5cX2F2jZEx8cL7cYb_N40Yc-x2gsd3I59EZFnOaAc61CrwzCMQ.png',
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