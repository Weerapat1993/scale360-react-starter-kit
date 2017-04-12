import { API, TASK } from '../constants'
import { getFetchApi, payloadActions } from '../../utils/callActions'
import { taskLoading } from '../loading/loadingActions'

// SUCCESS
export const fetchTaskSuccess = (payload, type) => ({ payload, type })
export const createTaskSuccess = (payload, type) => ({ payload, type })
export const updateTaskSuccess = (payload, type) => ({ payload, type })
export const deleteTaskSuccess = (payload, type) => ({ payload, type })

// REQUEST
export const fetchTask = () => (getFetchApi(API.TASK, TASK.FETCH, fetchTaskSuccess, taskLoading))
export const createTask = (payload) => (payloadActions(TASK.CREATE, createTaskSuccess, payload, taskLoading))
export const updateTask = (payload) => (payloadActions(TASK.UPDATE, updateTaskSuccess, payload, taskLoading))
export const deleteTask = (payload) => (payloadActions(TASK.DELETE, deleteTaskSuccess, payload, taskLoading))
