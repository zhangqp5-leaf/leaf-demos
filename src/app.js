import { matchRoutes } from 'umi';
 
export function onRouteChange({ clientRoutes, location }) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = `${route.title || ''} -- demos`;
  }
}