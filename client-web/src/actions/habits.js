import store from "store"
import { sleepPromise } from "common/Utils"
import { MOCK_API_LATENCY } from "common/Config"

export const fetchHabits = () => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/fetchHabits", {
      method: 'POST',
    }))
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.success) {
        store.dispatch({
          type: "FETCH_HABITS",
          payload: responseJson.habits,
        })
      }
    })
    .catch(({ message }) => console.log(message))
}

export const createHabit = name => {
  sleepPromise(MOCK_API_LATENCY)
    .then(() => fetch("http://localhost:2379/createHabit", {
      method: 'POST',
      // TODO: escape special charactors like ? and &
      body: "name=" + name
    }))
    .then(response => response.json())
    .then(responseJson => {
      console.log("responseJson", responseJson)
      if (responseJson.success) {
        store.dispatch({
          type: "CREATE_HABIT",
          payload: {
            id: responseJson.id,
            name: name,
          },
        })
      }
    })
    .catch(({message}) => console.log(message))
}

export const deleteHabit = id => {
  fetch("http://localhost:2379/deleteHabit", {
    method: 'POST',
    body: "id=" + id
  })
  .then(response => response.json())
  .then(responseJson => {
    if (responseJson.success) {
      store.dispatch({
        type: "DELETE_HABIT",
        payload: id,
      })
    }
  })
  .catch(({message}) => console.log(message))
}
