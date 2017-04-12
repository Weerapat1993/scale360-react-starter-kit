import { API } from '../constants'
import { getFetchApi, createActions, updateActions, deleteActions } from '../../utils/callActions'
import { ${name}Loading } from '../loading/loadingActions'
import { ${name_upper} } from './${name}ActionTypes'

// SUCCESS
export const fetch${name_pascal}Success = (payload, type) => ({ payload, type })
export const create${name_pascal}Success = (payload, type) => ({ payload, type })
export const update${name_pascal}Success = (payload, type) => ({ payload, type })
export const delete${name_pascal}Success = (payload, type) => ({ payload, type })

// REQUEST
export const fetch${name_pascal} = () => (getFetchApi(API.${name_upper}, ${name_upper}.FETCH, fetch${name_pascal}Success, ${name}Loading))
export const create${name_pascal} = (payload) => (payloadActions(${name_upper}.CREATE, create${name_pascal}Success, payload, ${name}Loading))
export const update${name_pascal} = (payload) => (payloadActions(${name_upper}.UPDATE, update${name_pascal}Success, payload, ${name}Loading))
export const delete${name_pascal} = (payload) => (payloadActions(${name_upper}.DELETE, delete${name_pascal}Success, payload, ${name}Loading))
