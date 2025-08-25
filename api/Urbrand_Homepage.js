import http from "k6/http";

export function Urbrand_Homepage() {
    const url = "https://loadtest-urbrand.one.th";

    const params = {
        timeout: "2m", // กำหนด timeout เป็น 2 นาที
    };

    const res = http.get(url, params);
    return res;
}
