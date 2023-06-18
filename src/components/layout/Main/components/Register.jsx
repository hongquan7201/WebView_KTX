import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { notification } from "antd";
import { IsRegister } from "../../../../utils/Validate";
import { RegisterService } from "../../../../services/UserService";
import Notification from "../../../../utils/Notification";
const Register = () => {
    const { onShowRegister, onSetUser, onSetToken } = useContext(UserContext);
    const [user, setUser] = useState({});
    const [api, contextHolder] = notification.useNotification();
    const handleChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setUser({ ...user, [name]: value });
    };
    const onClick = () => {
        const isData = IsRegister(user);
        if (isData.status === 1) {
            const data = {
                email: user.email,
                password: user.password,
            };
            const handle = async () => {
                const result = await RegisterService(data);
                if (result.status === 200) {
                    sessionStorage.setItem(
                        "token",
                        JSON.stringify(result.token)
                    );
                    onSetToken(result.token);
                    onSetUser(result.data);
                } else {
                    Notification(api, "error", result.message);
                }
            };
            handle();
        } else {
            Notification(api, "error", isData.message);
        }
    };
    return (
        <>
            {contextHolder}
            <div className="form-box register">
                <h2>Đăng Ký</h2>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail" />
                    </span>
                    <input name="email" onChange={handleChange} type="text" />
                    <label htmlFor>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed" />
                    </span>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                    />
                    <label htmlFor>Mật khẩu</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed" />
                    </span>
                    <input
                        name="password_repeat"
                        onChange={handleChange}
                        type="password"
                    />
                    <label htmlFor>Nhập lại mật khẩu</label>
                </div>
                <div className="remember-forgot">
                    <label htmlFor>
                        <input
                            name="condition"
                            onChange={handleChange}
                            type="checkbox"
                        />
                        Tôi đồng ý với các điều khoản
                    </label>
                </div>
                <button onClick={() => onClick()} className="btn">
                    Đăng ký
                </button>
                <div className="login-register">
                    <p>
                        Bạn đã có tài khoản?
                        <button
                            onClick={() => onShowRegister()}
                            className="login-link"
                            style={{ color: "blue" }}
                        >
                            Đăng nhập
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Register;
