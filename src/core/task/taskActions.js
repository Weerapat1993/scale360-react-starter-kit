import { API, TASK } from '../constants'
import { getFetchApi, createActions, updateActions, deleteActions } from '../../utils/callActions'
import { taskLoading } from '../loading/loadingActions'

export const fetchTask = () => (getFetchApi(API.TASK, TASK.FETCH, taskLoading))
export const createTask = (data) => (createActions(TASK.CREATE, data, taskLoading))
export const updateTask = (data) => (updateActions(TASK.UPDATE, data, taskLoading))
export const deleteTask = (key) => (deleteActions(TASK.DELETE, key, taskLoading))
