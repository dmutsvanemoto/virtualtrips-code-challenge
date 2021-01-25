import { FC } from 'react';
import {SearchBoxPropType} from './SearchBoxPropType'


export const SearchBox: FC<SearchBoxPropType> = ({ labelText, onChange }) => {
    return (<div data-testid="SearchBoxContainer">
        <label htmlFor="SearchBox" data-testid="SearchBox-label">{labelText}</label>
        <input id="SearchBox" data-testid="SearchBox-input" type="text" onChange={onChange} />
      </div>);
}