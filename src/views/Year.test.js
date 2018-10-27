import React from 'react';
import Year from './Year';
import renderer from 'react-test-renderer';

test('Year renders without crashing', () => {
  const component = renderer.create(
    <Year date={new Date()} events={[]}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
