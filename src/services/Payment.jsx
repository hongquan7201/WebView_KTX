import RequestApi from "../utils/RequestApi";
export const GetAllHoaDon = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `hoadon/hoadons?idUser=${id}`,
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
export const GetAllBienLai = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `bienlai/bienlais?idUser=${id}`,
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
export const AddBienLaiService = async (data, token) => {
    console.log(data);
    try {
        const respone = await RequestApi({
            method: "post",
            url: "bienlai/add",
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
export const GetThongKe = async (id, token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `thongke/room?id=${id}`,
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
