import { ScullyRoute } from "@scullyio/ng-lib";

function filterPostRoutes(folder: string) {
    return (route: ScullyRoute) => {
        let path = route.route.split('/');
        return path.length > 2 && path[1] == folder;
      }
}

export {filterPostRoutes};