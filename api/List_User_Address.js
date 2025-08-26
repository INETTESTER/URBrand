import http from 'k6/http';

// ฟังก์ชันตาม path สุดท้าย: "list_user_address"
export function List_User_Address() {
    const url = 'https://pentest-ngc.one.th/api/backend/api/erp/list_user_address';

    const payload = JSON.stringify({}); // ไม่มี data เลยส่งเป็น object ว่าง

    const params = {
        headers: {
            'accept': '*/*',
            'accept-language': 'th,en-US;q=0.9,en;q=0.8',
            'api-key': '7f91a017cb8d40e3b591bc24d29be5fd-f8c0ab7d27b14d5e9dc30ee460a187ef',
            'api-secret': 'b90e40cc6744f8797ec87ad0a7a03da-ec7f93c9242545b9a66e8c225cfdfe74d4c3f8499fd74d4d8991a7df60c32072',
            'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4ZDA4ZGViNGNjY2RlMWY5ZDFhNTQ0OGYyMmY4ODUwZGJmNzYxZDFhNjE3NmVkOGQ5NDZkNjliYjgxMmJiZWRhNWE1MmYxMGYwNmM2Mzc2In0.eyJhdWQiOiI5OTEiLCJqdGkiOiJjOGQwOGRlYjRjY2NkZTFmOWQxYTU0NDhmMjJmODg1MGRiZjc2MWQxYTYxNzZlZDhkOTQ2ZDY5YmI4MTJiYmVkYTVhNTJmMTBmMDZjNjM3NiIsImlhdCI6MTc1NDc1Mjg1MiwibmJmIjoxNzU0NzUyODUyLCJleHAiOjE3ODYyODg4NTIsInN1YiI6IjE1NzQwMzk4MTAiLCJzY29wZXMiOltdfQ.ggDbheuq_Vs14cITp_g7QDIxYgpErqNzoOcXN4PL2tN9JEy1xaR6KPugRz7hdsKbKF504VQkiM5KjIG4pqKBgOt61oIrIpQPCCbQT-0odfD0m19By9Y6QaaaqLQP2Nf3ClL3ksvFE_VsnHCNEL9cB5XiFkU4YdH8NoHOsOWvyw0THWCnpRwpuG8Nqxhwawz6Rn_UX-8j6fX3vwIlcZMz_V1ikncenLquDEFgQpl2A-IassTXmG35j1khoRR2sMmu6xthK-JPeZM09Vzo-MIxWtR-JZ6s7whNnM6lqE_piYLO_D1Ar_o0ynPHUZTeRhwzwp9lroadpWI00fcHkQWufz0reTU76QQh6t4adqI21Ur-aGQysH9Gi7fZeDHuVYjsMhoMDtqLSVOOs7xPeVRxmUQpZtJEb3WbKlLXknUtU6kckZvUSBgGgkuyPXqtGKgNuWQNOI-cX_7VwN_sQ1BMktHwFTCDA1AG_fzCQRDonTLeRzb1NPAK5qpZ3aAQ_iPdvDd-Y2x-CcC7te6jdQXyZa-jXNIwbEu4gPYBs7qSvnYbgqHmYRxXcBhk8lLUvXJSmlSgSBNyHFmtJskP_ghr8ZiUsOEq83SwgmMQjxo8nx6H3NNyfEcrOcUTfiOmfhNj4UQsKRPmTpC9r0-BWkidxTCo5GGmH4BH254ODisqc_0',
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

    //console.log(res.body); // log response body

    return res;
}
