export function getRegistrationsRequest() {
  return {
    type: '@meetup/GET_REGISTRATIONS_REQUEST',
  };
}

export function getRegistrationsSuccess(registrations) {
  return {
    type: '@meetup/GET_REGISTRATIONS_SUCCESS',
    payload: { registrations },
  };
}

export function getRegistrationsFailure() {
  return {
    type: '@meetup/GET_REGISTRATIONS_FAILURE',
  };
}

export function meetupRegisterRequest(meetingId) {
  return {
    type: '@meetup/MEETUP_REGISTER_REQUEST',
    meetingId,
  };
}

export function meetupRegisterSuccess(meetingId) {
  return {
    type: '@meetup/MEETUP_REGISTER_SUCCESS',
    payload: meetingId,
  };
}

export function meetupRegisterFailure() {
  return {
    type: '@meetup/MEETUP_REGISTER_FAILURE',
  };
}


export function cancelRegisterRequest(id) {
  return {
    type: '@meetup/CANCEL_REGISTER_REQUEST',
    id,
  };
}

export function cancelRegisterSuccess(registration) {
  return {
    type: '@meetup/CANCEL_REGISTER_SUCCESS',
    payload: registration
  };
}

export function cancelRegisterFailure() {
  return {
    type: '@meetup/CANCEL_REGISTER_FAILURE',
  };
}


export function listMeetupRequest(data) {
  return {
    type: '@meetup/LIST_MEETUP_REQUEST',
    payload: data,
  };
}

export function listMeetupSuccess(meetups) {
  return {
    type: '@meetup/LIST_MEETUP_SUCCESS',
    payload: { meetups }
  };
}

export function listMeetupFailure() {
  return {
    type: '@meetup/LIST_MEETUP_FAILURE',
  };
}
