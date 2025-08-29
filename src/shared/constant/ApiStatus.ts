import { IApiStatusObj } from './ApiStatusInterface';

const commonStatus = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Server Error',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  OK: {
    status: 200,
    message: 'Action Completed',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Access Denied',
  },
};

export const UserApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'User not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'User Name or Password is not correct!',
  },
};

export const PlanApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'Plan not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Plan data is invalid!',
  },
};

export const BodyTrackApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'BodyTrack not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'BodyTrack data is invalid!',
  },
};

export const ExerciseApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'Exercise not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Exercise data is invalid!',
  },
};

export const SetApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'Set not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Set data is invalid!',
  },
};

export const SessionApiStatus: IApiStatusObj = {
  ...commonStatus,
  NOT_FOUND: {
    status: 404,
    message: 'Session not Found',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Session data is invalid!',
  },
};
