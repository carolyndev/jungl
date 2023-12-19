import axios from "axios";
import * as api from './api.service';

export const getPlants = async (params = {}) => {
	return await axios.get(api.plants(), {params});
};

