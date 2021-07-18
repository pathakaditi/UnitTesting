// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Start/i);
//    expect(linkElement).toBeInTheDocument();
// });
describe('Render App Component',()=>{
  it('App',()=>{
    shallow(<App/>);
  })
})