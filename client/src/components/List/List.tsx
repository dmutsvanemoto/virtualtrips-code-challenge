import {ListPropType} from './ListPropType';
import ListItem from '../ListItem';

import { makeStyles } from '@material-ui/core/styles';
import MaterialList from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export const List: React.FC<ListPropType> = ({ items }) => {
    const classes = useStyles();
    
    return (<MaterialList data-testid="List" className={classes.root}>
        {items.map(item => <ListItem key={item.geonameid} {...item}/>)}
    </MaterialList>);
}

export default List;