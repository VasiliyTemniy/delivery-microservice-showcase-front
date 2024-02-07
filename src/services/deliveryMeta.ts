import { apiBaseUrl } from './apiBaseUrl';
import axios, { type AxiosResponse } from 'axios';


const calculateDeliveryMeta = async (): Promise<AxiosResponse<JSON>> => {

  return await axios.get<JSON>(
    // Hardcoded params will be deleted ASAP
    `${apiBaseUrl}/delivery-meta?meta-calculation-type=only_estimated_time&from-address=Россия,Анапа,Ленина,136&to-address=Россия,Анапа,Ленина,10&use-external-time-estimation=true&delivery-vehicle-type=bicycle`,
  );
};


export default {
  calculateDeliveryMeta,
};