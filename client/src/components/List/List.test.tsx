import React from 'react';
import { render, screen } from '@testing-library/react';
import GeoLocation from '../../../../interfaces/GeoLocation';

import {List} from './List';

const items_data: GeoLocation[] = [
    { geonameid: 123, name: "City A", longitude: 23.412, latitude: 45.123 },
    { geonameid: 456, name: "City B", longitude: 23.412, latitude: 45.123 },
    { geonameid: 789, name: "City C", longitude: 23.412, latitude: 45.123 },
    { geonameid: 101, name: "City D", longitude: 23.412, latitude: 45.123 }
  ];

describe('List', () => {
    test('should render list items', () => {
        
        render(<List items={items_data} />)
        
        var items = screen.getAllByTestId("ListItem");

        expect(items).toHaveLength(items_data.length);
        items.forEach( item => expect(item).toBeInTheDocument());
    });
})
