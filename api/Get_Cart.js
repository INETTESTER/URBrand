import http from 'k6/http';

export function Get_Cart() {
  const url = 'https://pentest-ngc.one.th/api/backend/api/erp/get_cart';

  const payload = JSON.stringify({
    "seller_shop_id": "3446",
    "role_user": "ext_buyer",
    "pay_type": "general",
    "product_to_calculate": [
      {
        "product_id": 337298,
        "vat_type": 0,
        "product_attribute_id": "-1",
        "attribute_priority_1": "",
        "attribute_priority_2": "",
        "quantity": 1,
        "revenue_default": 15490,
        "revenue_vat": 15490,
        "vat_revenue": 0,
        "an_id": null,
        "vat_default": "yes"
      }
    ],
    "type_shipping": "online",
    "address": [
      {
        "detail": "บ้านเลขที่ 10 ชั้นที่ - อาคาร - หมู่บ้าน - หมู่ที่ - ซอย อนามัยงามเจริญ 25 แยก 2-7 ถนน -",
        "id": 23905,
        "first_name": "INET",
        "last_name": "ทดสอบ",
        "email": "aekbadin.ch@inet.co.th",
        "note_address": "",
        "phone": "0985979990",
        "province": "กรุงเทพมหานคร",
        "district": "บางขุนเทียน",
        "sub_district": "ท่าข้าม",
        "zip_code": "10150",
        "house_no": "10",
        "room_no": "-",
        "floor": "-",
        "building_name": "-",
        "moo_ban": "-",
        "moo_no": "-",
        "soi": "อนามัยงามเจริญ 25",
        "yaek": "2-7",
        "street": "-",
        "phone_ext": "",
        "status": "Y"
      }
    ],
    "all_can_size_product": {
      "width": 0,
      "length": 0,
      "height": 0,
      "weight": 0
    },
    "invoice_id": "",
    "required_invoice": "no",
    "company_id": -1,
    "company_position": -1,
    "com_perm_id": -1,
    "shipping_data": null,
    "point": ""
  });

  const headers = {
    'accept': 'application/json',
    'accept-language': 'th,en-US;q=0.9,en;q=0.8',
    'api-key': '7f91a017cb8d40e3b591bc24d29be5fd-f8c0ab7d27b14d5e9dc30ee460a187ef',
    'api-secret': 'b90e40cc6744f8797ec87ad0a7a03da-ec7f93c9242545b9a66e8c225cfdfe74d4c3f8499fd74d4d8991a7df60c32072',
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4ZDA4ZGViNGNjY2RlMWY5ZDFhNTQ0OGYyMmY4ODUwZGJmNzYxZDFhNjE3NmVkOGQ5NDZkNjliYjgxMmJiZWRhNWE1MmYxMGYwNmM2Mzc2In0.eyJhdWQiOiI5OTEiLCJqdGkiOiJjOGQwOGRlYjRjY2NkZTFmOWQxYTU0NDhmMjJmODg1MGRiZjc2MWQxYTYxNzZlZDhkOTQ2ZDY5YmI4MTJiYmVkYTVhNTJmMTBmMDZjNjM3NiIsImlhdCI6MTc1NDc1Mjg1MiwibmJmIjoxNzU0NzUyODUyLCJleHAiOjE3ODYyODg4NTIsInN1YiI6IjE1NzQwMzk4MTAiLCJzY29wZXMiOltdfQ.ggDbheuq_Vs14cITp_g7QDIxYgpErqNzoOcXN4PL2tN9JEy1xaR6KPugRz7hdsKbKF504VQkiM5KjIG4pqKBgOt61oIrIpQPCCbQT-0odfD0m19By9Y6QaaaqLQP2Nf3ClL3ksvFE_VsnHCNEL9cB5XiFkU4YdH8NoHOsOWvyw0THWCnpRwpuG8Nqxhwawz6Rn_UX-8j6fX3vwIlcZMz_V1ikncenLquDEFgQpl2A-IassTXmG35j1khoRR2sMmu6xthK-JPeZM09Vzo-MIxWtR-JZ6s7whNnM6lqE_piYLO_D1Ar_o0ynPHUZTeRhwzwp9lroadpWI00fcHkQWufz0reTU76QQh6t4adqI21Ur-aGQysH9Gi7fZeDHuVYjsMhoMDtqLSVOOs7xPeVRxmUQpZtJEb3WbKlLXknUtU6kckZvUSBgGgkuyPXqtGKgNuWQNOI-cX_7VwN_sQ1BMktHwFTCDA1AG_fzCQRDonTLeRzb1NPAK5qpZ3aAQ_iPdvDd-Y2x-CcC7te6jdQXyZa-jXNIwbEu4gPYBs7qSvnYbgqHmYRxXcBhk8lLUvXJSmlSgSBNyHFmtJskP_ghr8ZiUsOEq83SwgmMQjxo8nx6H3NNyfEcrOcUTfiOmfhNj4UQsKRPmTpC9r0-BWkidxTCo5GGmH4BH254ODisqc_0',
    'content-type': 'application/json',
    'origin': 'https://homemaxmassage.com',
    'referer': 'https://homemaxmassage.com/',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36',
    'Cookie': 'laravel_session=Xj2toaB0m8tVZw2gOoBpxYZYiWrlmreIMW0VFJ0K'
  };

  let response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
