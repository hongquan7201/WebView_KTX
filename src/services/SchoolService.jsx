import RequestApi from "../utils/RequestApi";

export const GetAllSchool = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: "truong",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
