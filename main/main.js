//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';


import { Urbrand_Homepage } from '../api/Urbrand_Homepage.js';
import { Urbrand_Homepage2 } from '../api/Urbrand_Homepage2.js';
import { Filter_Specific_Product } from '../api/Filter_Specific_Product.js';
import { Filter_All_Product } from '../api/Filter_All_Product.js';
import { Product_Detail } from '../api/Product_Detail.js';
import { Search_Bar } from '../api/Search_Bar.js';
import { List_User_Address } from '../api/List_User_Address.js';
import { Detail_Cart } from '../api/Detail_Cart.js';
import { Get_Cart } from '../api/Get_Cart.js';
import { List_Category } from '../api/List_Category.js';
import { Order_List } from '../api/Order_List.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  response = Urbrand_Homepage()
  //response = Urbrand_Homepage2()

  //============ NGC ========================
  // response = Filter_Specific_Product()
  // response = Filter_All_Product()
  // response = Product_Detail()
  // response = Search_Bar()
  // response = List_User_Address()
  // response = Detail_Cart()
  // response = Get_Cart()
  // response = List_Category()
  // response = Order_List()


  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };