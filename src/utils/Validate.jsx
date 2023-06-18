export const IsPhone = (value) => {
    const regex = new RegExp("^[0-9-+]{9,15}$");
    return regex.test(value);
};
export const IsEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};
export const IsPassword = (value) => {
    const regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return regex.test(value);
};
export const IsCard = (value) => {
    return /^\d{12}/.test(value);
};
export const IsConfirmPassword = (value_1, value_2) => {
    return value_1 === value_2;
};
export const IsLogin = (values) => {
    if (!IsEmail(values.email)) {
        return {
            status: 0,
            message: "Nhập email không đúng định dạng!",
        };
    }
    if (!values.password) {
        return {
            status: 0,
            message: "Vui lòng nhập mật khẩu!",
        };
    }
    return {
        status: 1,
        message: "Ok",
    };
};
export const IsRegister = (values) => {
    if (!values.email) {
        return {
            status: 0,
            message: "Vui lòng nhập email!",
        };
    }
    if (!IsEmail(values.email)) {
        return {
            status: 0,
            message: "Nhập email không đúng định dạng!",
        };
    }
    if (!values.password) {
        return {
            status: 0,
            message: "Vui lòng nhập mật khẩu!",
        };
    }
    if (!IsPassword(values.password)) {
        return {
            status: 0,
            message:
                "Mật khẩu phải lớn hơn 8 ký tự, chứa ít nhất một chữ cái viết thường, một chữ cái viết hoa, một chữ số và một ký tự đặc biệt!",
        };
    }
    if (!values.password_repeat) {
        return {
            status: 0,
            message: "Vui lòng xác nhận mật khẩu!",
        };
    }
    if (!IsConfirmPassword(values.password, values.password_repeat)) {
        return {
            status: 0,
            message: "Xác nhận mật khậu không khớp với mật khẩu!",
        };
    }
    if (!values.condition) {
        return {
            status: 0,
            message: "Vui lòng đồng ý với các điều khoản của chúng tôi!",
        };
    }
    return {
        status: 1,
        message: "Ok",
    };
};
