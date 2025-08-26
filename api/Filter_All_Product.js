import http from 'k6/http';

// ฟังก์ชันตาม path สุดท้าย: "filter"
export function Filter_All_Product() {
    const url = 'https://pentest-ngc.one.th/api/backend_2/partner/search/product/filter';

    const payload = JSON.stringify({
        role_user: "ext_buyer",
        company_id: "-1",
        limit: 20,
        page: 1,
        category: "",   // เปลี่ยนตาม cURL ล่าสุด
        seller_shop_id: "3446",
        orderBy: "",
        status_product: "",
        promotion_buy_get_free: {
            minimumBuy: 0,
            totalFree: 0
        }
    });

    const params = {
        headers: {
            'accept': 'application/json',
            'accept-language': 'th,en-US;q=0.9,en;q=0.8',
            'api-key': '7f91a017cb8d40e3b591bc24d29be5fd-f8c0ab7d27b14d5e9dc30ee460a187ef',
            'api-secret': 'b90e40cc6744f8797ec87ad0a7a03da-ec7f93c9242545b9a66e8c225cfdfe74d4c3f8499fd74d4d8991a7df60c32072',
            'authorization': 'Bearer undefined',
            'content-type': 'application/json',
            'origin': 'https://homemaxmassage.com',
            'priority': 'u=1, i',
            'referer': 'https://homemaxmassage.com/',
            'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36',
            'Cookie': 'laravel_session=Xj2toaB0m8tVZw2gOoBpxYZYiWrlmreIMW0VFJ0K'
        },
    };

    let res = http.post(url, payload, params);

    //console.log(res.body);  // log response body

    return res;
}
