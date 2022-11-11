import { getBreed } from "../../helpers/getAllOfBreeds";

describe('test on getAllOfBreed', () => { 

  test('should return the breed list', async () => { 

      const breedList = await getBreed();

      expect(breedList.length).toBeGreaterThanOrEqual(98);
      
    });
    
    test('should the API have the HTTP protocol', () => { 
      
      const baseUrl = 'https://dog.ceo/api/';
      
      expect(baseUrl.includes('https://')).toBe(true);

    });

 });