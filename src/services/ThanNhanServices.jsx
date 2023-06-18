import RequestApi from "../utils/RequestApi";
export const GetThanNhanSinhVien = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `thannhan/search?idSinhVien=${id}`,
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
export const EditThanNhanService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "put",
            url: "thannhan/edit",
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
export const AddThanNhanService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: "thannhan/add",
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