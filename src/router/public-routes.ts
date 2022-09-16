import {
  HOME,
  HOME_PATH,
  LOGIN,
  LOGIN_PATH,
  ABOUT,
  ABOUT_PATH,
} from "./constants";

export type Route = {
  name: string;
  path: string;
};

export const PUBLIC_ROUTES: Route[] = [
  {
    name: HOME,
    path: HOME_PATH,
  },
  {
    name: LOGIN,
    path: LOGIN_PATH,
  },
  {
    name: ABOUT,
    path: ABOUT_PATH,
  },
];
