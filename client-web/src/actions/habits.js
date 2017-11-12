import store from "../store"
import { sleepPromise } from "../common/Utils"
import { MOCK_API_LATENCY } from "../common/Config"

export const fetchHabits = () => {
  store.dispatch(dispatch => {
    sleepPromise(MOCK_API_LATENCY)
      .then(() => fetch("http://localhost:2379/fetchHabits", {
        method: 'POST',
      }))
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          dispatch({
            type: "FETCH_HABITS",
            payload: responseJson.habits,
          })
        }
      })
      .catch(({ message }) => console.log(message))
  })
}

export const createHabit = (name) => {
  store.dispatch(dispatch => {
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
          dispatch({
            type: "CREATE_HABIT",
            payload: {
              id: responseJson.id,
              name: name,
            },
          })
        }
      })
      .catch(({message}) => console.log(message))
  })
}

// const updateHabit = ({vin, information}) => {
//   store.dispatch(dispatch => {
//     fetch("http://localhost:2379/updateHabit", {
//       method: 'POST',
//       body: "vin=" + vin +
//         "&mileage=" + information.mileage +
//         "&make=" + information.make +
//         "&model=" + information.model
//     })
//     .then(response => response.json())
//     .then(responseJson => {
//       console.log("responseJson", responseJson)
//       if (responseJson.success) {
//         dispatch({
//           type: "UPDATE_HABIT",
//           payload: {
//             vin,
//             information,
//           }
//         })
//       }
//     })
//     .catch(({message}) => console.log(message))
//   })
// }

// const deleteHabit = ({vin}) => {
//   store.dispatch(dispatch => {
//     fetch("http://localhost:2379/deleteHabit", {
//       method: 'POST',
//       body: "vin=" + vin
//     })
//     .then(response => response.json())
//     .then(responseJson => {
//       console.log("responseJson", responseJson)
//       if (responseJson.success) {
//         dispatch({
//           type: "DELETE_HABIT",
//           payload: vin,
//         })
//       }
//     })
//     .catch(({message}) => console.log(message))
//   })
// }

// export {
//   fetchHabits,
//   addHabit,
//   updateHabit,
//   deleteHabit,
// }
