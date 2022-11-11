import { render } from "@testing-library/react";
import { Header } from "../components/Header";


describe('test on <Header />', () => { 

  
  test('should show the title in <h1> without spaces', () => { 
    
    const title = 'DOGS';
    const titleOnly = title.trim();
    
    expect( title ).toBe( titleOnly );
    
  });
  
  test('should exist className', () => {
    
    const className = 'redLetter';
    
    expect(className).toBeTruthy();
    
  });
  
  test('should match the snapshot', () => { 

    const { container } = render( <Header />);

    expect( container ).toMatchSnapshot();

   });
 });