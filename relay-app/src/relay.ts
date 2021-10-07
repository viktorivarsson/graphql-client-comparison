import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export async function fetchGraphQL(text: string, variables: object) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

async function fetchRelay(params: any, variables: any) {
  console.debug(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`,
  );
  return fetchGraphQL(params.text, variables);
}

export const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
