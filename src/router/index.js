import { writable } from 'svelte/store';
import routes from './routes.js';

const { subscribe, set } = writable({ path: '/', component: routes['/'] });

const router = {
  pageChanged: subscribe,
  navigate: (path) => {
    set({ path, component: routes[path] })
  },
  reset: () => set({ path: '/', component: routes['/'] })
};

export default router;
export const init = () => {
  router.navigate(window.location.pathname);
  if (!window.history.state) {
    window.history.replaceState( { path: window.location.pathname }, '', window.location.href);
  }
};
