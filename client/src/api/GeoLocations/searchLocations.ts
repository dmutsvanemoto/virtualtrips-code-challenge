import axios, {AxiosResponse} from 'axios';
import GeoLocation from '../../../../interfaces/GeoLocation';

export const searchLocations = async (name: string): Promise<AxiosResponse<GeoLocation[]>> =>
    axios.get<GeoLocation[]>(`http://localhost:3000/locations`, { params: { q: name }});