import http from "k6/http";

export function Urbrand_Homepage2() {
    const url = "https://loadtest2-urbrand.one.th/";

    const params = {
        timeout: "1m", // กำหนด timeout เป็น 1 นาที
    };

    const res = http.get(url, params);
    return res;
}
