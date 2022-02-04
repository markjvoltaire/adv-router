import { render, screen } from '@testing-library/react';
import Character from './Character';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route } from 'react-router-dom';

const character = {
  char_id: 4,
  name: 'MockWalter White Jr.',
  birthday: '07-08-1993',
  occupation: ['Teenager'],
  img: 'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
  status: 'Alive',
  nickname: 'Flynn',
  appearance: [1, 2, 3, 4, 5],
  portrayed: 'RJ Mitte',
  category: 'Breaking Bad',
  better_call_saul_appearance: [],
};

const server = setupServer(
  rest.get('https://www.breakingbadapi.com/api/characters/4', (req, res, ctx) => {
    return res(ctx.json([character]));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('test if Walter White is being render from Character component', async () => {
  render(
    <MemoryRouter initialEntries={['/Characters/4']}>
      <Route path="/Characters/:char_id">
        <Character />
      </Route>
    </MemoryRouter>
  );
  const walter = await screen.findByRole('heading', {
    name: /walter white jr\./i,
  });
  screen.debug();
  expect(walter).toBeInTheDocument();
});
