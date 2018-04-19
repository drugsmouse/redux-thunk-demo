import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render shallow', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App user={true}/>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
});

it('should fully render component', () => {
  const component = renderer.create(
    <App user={false}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('should test nested object', () => {

  function getObject () {
    return {
      name: 'Jack',
      position: {
        title: 'D3',
        salary: '10 00000 $'
      },
      years: '5'
    }
  }
  const actualResult = getObject();


  expect(actualResult).toMatchSnapshot()
})
