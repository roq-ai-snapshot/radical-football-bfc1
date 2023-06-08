const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  parents: 'parent',
  'parent-players': 'parent_player',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
