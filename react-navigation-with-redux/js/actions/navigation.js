import { BACK, TOGGLE_DRAWER } from './types';

export function back() {
  return { type: BACK };
}

export function toggleDrawer() {
  return { type: TOGGLE_DRAWER };
}
