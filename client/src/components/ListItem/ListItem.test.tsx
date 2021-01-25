import React from 'react';
import { render, screen } from '@testing-library/react';
import GeoLocation from '../../../../interfaces/GeoLocation';

import {ListItem} from './ListItem';

const items_data: GeoLocation[] = [
    { geonameid: 123, name: "City A", longitude: 23.412, latitude: 45.123 },
    { geonameid: 456, name: "City B", longitude: 23.412, latitude: 45.123 },
    { geonameid: 789, name: "City C", longitude: 23.412, latitude: 45.123 },
    { geonameid: 101, name: "City D", longitude: 23.412, latitude: 45.123 }
  ];

const item_data: GeoLocation = { geonameid: 123, name: "City A", longitude: 23.412, latitude: 45.123 };

describe('ListItem', () => {
    test('should render TownName', () => {
        
        render(<ListItem {...item_data} />)
        
        var item = screen.getByTestId("TownName");

        expect(item).toBeInTheDocument();
    });

    test('should render Latitude', () => {
        
        render(<ListItem {...item_data} />)
        
        var item = screen.getByTestId("Latitude");

        expect(item).toBeInTheDocument();
    });

    test('should render Longitude', () => {
        
        render(<ListItem {...item_data} />)
        
        var item = screen.getByTestId("Longitude");

        expect(item).toBeInTheDocument();
    });
})
