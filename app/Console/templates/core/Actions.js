import { API } from '../constants'
import { getFetchApi, createActions, updateActions, deleteActions } from '../../utils/callActions'
import { ${name}Loading } from '../loading/loadingActions'
import { ${name_upper} } from './${name}ActionTypes'

export const fetch${name_pascal} = () => (getFetchApi(API.${name_upper}, ${name_upper}.FETCH, ${name}Loading))
export const create${name_pascal} = (data) => (createActions(${name_upper}.CREATE, data, ${name}Loading))
export const update${name_pascal} = (data) => (updateActions(${name_upper}.UPDATE, data, ${name}Loading))
export const delete${name_pascal} = (key) => (deleteActions(${name_upper}.DELETE, key, ${name}Loading))
