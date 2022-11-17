import { v1 } from "uuid"

import { DataType } from "../store"

function postReducer(action: any, state: DataType) {
    if (action.type === 'ADD_NEW_POST') {
        state.postData.push({id: v1(), userText: action.text})
      }
}

export default postReducer