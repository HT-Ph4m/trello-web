import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

// call board api
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)

  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)

  return response.data
}

// call column api
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)

  return response.data
}
export const fetchColumnDetailsAPI = async (columnId) => {
  const response = await axios.get(`${API_ROOT}/v1/columns/${columnId}`)

  return response.data
}

// call card api
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)

  return response.data
}
export const fetchCardDetailsAPI = async (cardId) => {
  const response = await axios.get(`${API_ROOT}/v1/cards/${cardId}`)

  return response.data
}
