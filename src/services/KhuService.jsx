import RequestApi from "../utils/RequestApi";
export const GetAllKhuGiuXe = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `khu/khugiuxe`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};