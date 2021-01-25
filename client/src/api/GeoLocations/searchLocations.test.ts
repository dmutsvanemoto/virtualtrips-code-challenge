import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GeoLocation from '../../../../interfaces/GeoLocation';

import {searchLocations} from './searchLocations';

var mock = new MockAdapter(axios);

const items_data: GeoLocation[] = [
    { geonameid: 123, name: "City A", longitude: 23.412, latitude: 45.123 },
    { geonameid: 456, name: "City B", longitude: 23.412, latitude: 45.123 },
    { geonameid: 789, name: "City C", longitude: 23.412, latitude: 45.123 },
    { geonameid: 101, name: "City D", longitude: 23.412, latitude: 45.123 }
  ];

describe('SearchLocations', () => {
    test('should return empty array with 200 when q is less than 2', async () => {
        mock.onGet("/api/locations", { params: { q: "a" }}).reply(200, []);

        var response = await searchLocations("a");

        expect(response.data).toHaveLength(0);
    });

    test('should return locations with 200 when q is more than 2', async () => {
        mock.onGet("/api/locations", { params: { q: "city" }}).reply(200, items_data);

        var response = await searchLocations("city");

        expect(response.data).toHaveLength(4);
    });
        
    afterEach(()=>{
        mock.reset();
    })
})
