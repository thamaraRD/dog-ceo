import { render } from "@testing-library/react";
import { GetBreedList } from "../components/GetBridList";



describe('test on <GetBreedList />', () => { 

  
  test('should match the snapshot', () => { 
    
    const { container } = render( <GetBreedList /> );
    
    expect(container).toMatchSnapshot();
    
  });
  
 

 });