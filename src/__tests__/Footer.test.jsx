import { render } from "@testing-library/react";
import { Footer } from "../components/Footer";


describe('test on <Footer />', () => { 

  
  test('should show text in the footer', () => { 
    
    const footer = 'Hecho por: Thamara Ramos';
    const footerEqual = 'Hecho por: Thamara Ramos'
    
    expect( footer ).toStrictEqual(footerEqual);
    
  });
  
  test('should exist className', () => {
    
    const className = 'fixed-bottom footer';
    const classNameEqual = 'fixed-bottom footer'
    
    expect(className).toEqual(classNameEqual);
    
  });
  
  test('should match the snapshot ', () => { 

    const { container } = render( <Footer />);

    expect( container ).toMatchSnapshot();

   });
 });