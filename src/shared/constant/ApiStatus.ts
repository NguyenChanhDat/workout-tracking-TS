import { IApiStatusObj } from './ApiStatusInterface';

export const UserApiStatus: IApiStatusObj = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Server Error',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  NOT_FOUND: {
    status: 404,
    message: 'User not Found',
  },
  OK: {
    status: 200,
    message: 'Action Completed',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'User Name or Password is not correct!',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Access Denied',
  },
};

export const PlanApiStatus: IApiStatusObj = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Server Error',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  NOT_FOUND: {
    status: 404,
    message: 'Plan not Found',
  },
  OK: {
    status: 200,
    message: 'Action Completed',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Plan data is invalid!',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Access Denied',
  },
};

export const BodyTrackApiStatus: IApiStatusObj = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Server Error',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  NOT_FOUND: {
    status: 404,
    message: 'BodyTrack not Found',
  },
  OK: {
    status: 200,
    message: 'Action Completed',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'BodyTrack data is invalid!',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Access Denied',
  },
};
