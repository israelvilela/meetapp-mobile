import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Erro ao atualizar perfil');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
