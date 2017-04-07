import { TASK_LOADING } from '../constants'

export const taskLoading = (bool) => ({
    type: TASK_LOADING,
    loading: bool
})
