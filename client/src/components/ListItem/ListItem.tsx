import {ListItemPropType} from './ListItemPropType';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocationCityIcon from '@material-ui/icons/LocationCity';

export const ListItem: React.FC<ListItemPropType> = ({geonameid, name, latitude: lat, longitude: long }) => {
  return (<MaterialListItem data-testid="ListItem">
    <ListItemAvatar>
      <Avatar>
        <LocationCityIcon />
      </Avatar>
    </ListItemAvatar>
    
    <MaterialListItemText data-testid="TownName" primary={name} secondary={
      <>{<b>lat: </b>}<span data-testid="Latitude">{lat}</span> {<b>long: </b>}<span data-testid="Longitude">{long}</span></>
    }/>
    
  </MaterialListItem>);
}

export default ListItem;