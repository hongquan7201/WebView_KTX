import RequestApi from "../utils/RequestApi";
export const GetAllQuanHe = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `quanhe`,
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