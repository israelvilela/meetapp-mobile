import produce from 'immer';

const INITIAL_STATE = {
  registrations: [],
  meetups: []
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/GET_REGISTRATIONS_SUCCESS': {
        draft.registrations = action.payload.registrations;
        break;
      }
      case '@meetup/LIST_MEETUP_SUCCESS': {
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@meetup/MEETUP_REGISTER_SUCCESS': {
        const meetupIndex = draft.meetups.findIndex(p => p.id === action.payload);
        if (meetupIndex >= 0) {
          draft.meetups.splice(meetupIndex, 1);
        }
        break;
      }
      case '@meetup/CANCEL_REGISTER_SUCCESS': {
        const registrationIndex = draft.registrations.findIndex(p => p.id === action.payload.id);

        if (registrationIndex >= 0) {
          draft.registrations.splice(registrationIndex, 1);
        }
        break;
      }
      case '@user/SIGN_OUT': {
        draft.registrations = [];
        break;
      }
      default:
    }
  });
}
