import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  listMeetupSuccess,
  listMeetupFailure,
  getRegistrationsRequest,
  getRegistrationsSuccess,
  getRegistrationsFailure,
  meetupRegisterSuccess,
  meetupRegisterFailure,
  cancelRegisterSuccess,
  cancelRegisterFailure,
} from './actions';


export function* listMeetups({ payload }) {
  try {
    const { params } = payload;
    const response = yield call(api.get, `meetings/all?date=${params.date}&page=${params.page}`);
    if (response.data) {
      yield put(listMeetupSuccess(response.data));
    }
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(listMeetupFailure());
  }
}

export function* getRegistrations() {
  try {
    const response = yield call(api.get, 'registrations');
    if (response.data) {
      yield put(getRegistrationsSuccess(response.data));
    }
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(getRegistrationsFailure());
  }
}

export function* meetupRegister({ meetingId }) {
  try {
    const response = yield call(api.post, 'registrations', {meetingId});
    if (response.data) {
      Alert.alert('Sucesso', 'Inscrição realizada.');
      yield put(meetupRegisterSuccess(meetingId));
      yield put(getRegistrationsRequest());
    }
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(meetupRegisterFailure());
  }
}

export function* cancelRegister({ id }) {
  try {
    const response = yield call(api.delete, `registrations/${id}`);
    if (response.data) {
      Alert.alert('Sucesso', 'Inscrição cancelada.');
      yield put(cancelRegisterSuccess(response.data));
    }
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(cancelRegisterFailure());
  }
}

export default all([
  takeLatest('@meetup/GET_REGISTRATIONS_REQUEST', getRegistrations),
  takeLatest('@meetup/LIST_MEETUP_REQUEST', listMeetups),
  takeLatest('@meetup/MEETUP_REGISTER_REQUEST', meetupRegister),
  takeLatest('@meetup/CANCEL_REGISTER_REQUEST', cancelRegister),
]);
