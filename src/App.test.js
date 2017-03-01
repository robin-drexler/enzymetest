import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
// import App from './App';

const App = ({children}) => (
  <div className="app">
    {children}
  </div>
);

const Outer = ({children}) => (
  <div className="outer">
    {children}
  </div>
);

const Inner = ({children}) => {
  const some = Math.random();
  return (
  <div className="inner">
    {some}
    {children}
  </div>
)};

const stuffToRender = (
  <App>
    <Outer>
      <Inner>
        First
        <Inner>second</Inner>
      </Inner>
    </Outer>
  </App>
);

it('renders without crashing', () => {
  const shallowed = shallow(stuffToRender);
  const mounted = mount(stuffToRender);
  console.log(shallowed.find(Inner).length);
  console.log(mounted.find(Inner).length);

    // console.log(shallowed.html());


  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});
