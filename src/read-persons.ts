import { Person } from './model/person';

export async function readPersons(srv: any): Promise<Person[]> {
  // Create a query object - restrict persons before fetching appointments
  // let query = srv.read('Person');
  // query = query.where({ hlevel: { '>': 1 } });
  // Execute the query
  // return query;

  return srv.read('Person');
}
