import RequestApi from "../utils/RequestApi";

export const GetAllRoom = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: "phong",
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
export const GetRoom = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `phong/search/idSinhVien?idSinhVien=${id}`,
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
export const GetAllSinhVienInRoom = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `phong/getAllSinhVien?idSinhVien=${id}`,
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
export const AddSinhVienService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: "phong/addSinhVien",
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};