import RequestApi from "../utils/RequestApi";

export const ChangePassword = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "put",
            url: "user/changepass",
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
export const LoginService = async (data) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: "sinhvien/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const RegisterService = async (data) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: "sinhvien/register",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
export const EditUserService = async (data, token) => {
    try {
        const respone = await RequestApi({
            method: "put",
            url: "user/edit",
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
export const GetUserService = async (token) => {
    try {
        const respone = await RequestApi({
            method: "get",
            url: `user/token?token=${token}`,
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
export const ForgotPasswordService = async (email) => {
    try {
        const respone = await RequestApi({
            method: "post",
            url: `user/reset`,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(email),
        });
        return respone.data;
    } catch (e) {
        return e;
    }
};
