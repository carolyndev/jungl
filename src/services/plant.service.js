import axios from "axios";
import * as api from './api.service'

export const getPlants = async () => {
	return await axios.get(api.plants())
};

