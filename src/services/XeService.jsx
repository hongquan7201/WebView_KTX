import RequestApi from "../utils/RequestApi";
export const GetXeSinhVien = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `xe/search?idSinhVien=${id}`,
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
export const GetAllLoaiXe = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `loaixe`,
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
export const EditXeService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "put",
            url: "xe/edit",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const AddXeService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: "xe/add",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
