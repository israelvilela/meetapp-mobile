import produce from 'immer';

const INITIAL_STATE = {
  user: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  });
}
