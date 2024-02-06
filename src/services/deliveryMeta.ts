import { apiBaseUrl } from './apiBaseUrl';
import axios from 'axios';


const calculateDeliveryMeta = async (): Promise<JSON> => {

  const { data: response } = await axios.get<JSON>(
    `${apiBaseUrl}/delivery-meta`,
    {
      params:[
        // Hardcoded params will be deleted ASAP
        { "meta-calculation-type": "only_estimated_time" },
        { "from-address": "Россия,Анапа,Ленина,136" },
        { "to-address": "Россия,Анапа,Ленина,10" },
        { "use-external-time-estimation": "true" },
        { "delivery-vehicle-type": "bicycle" }
      ]
    }
  );

  return response;
};


export default {
  calculateDeliveryMeta,
};