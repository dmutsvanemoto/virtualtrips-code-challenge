import {ListItemPropType} from './ListItemPropType';

export const ListItem: React.FC<ListItemPropType> = ({geonameid, name, latitude: lat, longitude: long }) => {
  return (<div data-testid="ListItem">
    <span data-testid="TownName">{name}</span>
    <span data-testid="Latitude">{lat}</span>
    <span data-testid="Longitude">{long}</span>
  </div>);
}

export default ListItem;