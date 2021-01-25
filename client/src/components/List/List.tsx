import {ListPropType} from './ListPropType';
import ListItem from '../ListItem';

export const List: React.FC<ListPropType> = ({ items }) => {
    return (<div data-testid="List">
        {items.map(item => <ListItem key={item.geonameid} {...item}/>)}
    </div>);
}

export default List;