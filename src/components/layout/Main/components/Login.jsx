import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import PropTypes from "prop-types";
import { notification } from "antd";
import { IsLogin } from "../../../../utils/Validate";
import {
    ForgotPasswordService,
    LoginService,
} from "../../../../services/UserService";
import Notification from "../../../../utils/Notification";
const Login = () => {
    const { onShowRegister, onSetUser, onSetToken } = useContext(UserContext);
    const [forgot, setForgot] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [save, setSave] = useState();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const onSubmit = () => {
        const isData = IsLogin(user);
        if (isData.status === 1) {
            const handle = async () => {
                const result = await LoginService(user);
                if (result.status === 200) {
                    if (save) {
                        sessionStorage.setItem(
                            "token",
                            JSON.stringify(result.token)
                        );
                    }
                    onSetToken(result.token);
                    onSetUser(result.data[0]);
                } else {
                    Notification(api, "error", result.message);
                }
            };
            handle();
        } else {
            Notification(api, "error", isData.message);
        }
    };
    const onForgot = () => {
        const email = user.email;
        if (email) {
            const handle = async () => {
                const result = await ForgotPasswordService(email);
                console.log(result);
                Notification(
                    api,
                    result.status === 200 ? "success" : "error",
                    result.message
                );
            };
            handle();
        } else {
            Notification(api, "error", "Vui lòng nhập email!");
        }
    };
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setUser({ ...user, [name]: value });
    };
    return (
        <>
            {contextHolder}
            <div className="form-box login">
                {!forgot ? <h2>Đăng Nhập</h2> : <h2>Quên mật khẩu</h2>}
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail" />
                    </span>
                    <input type="text" name="email" onChange={handleChange} />
                    <label>Email</label>
                </div>
                {!forgot ? (
                    <>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed" />
                            </span>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />
                            <label htmlFor>Mật khẩu</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input
                                    onChange={(e) => setSave(e.target.checked)}
                                    type="checkbox"
                                />
                                Ghi lại
                            </label>
                            <a onClick={() => setForgot(true)}>
                                Quên mật khẩu?
                            </a>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {!forgot ? (
                    <>
                        <button onClick={onSubmit} className="btn">
                            Đăng nhập
                        </button>
                        <div className="login-register">
                            <p>
                                Bạn có muốn tạo tài khoản mới không?
                                <button
                                    onClick={() => onShowRegister()}
                                    className="register-link"
                                    style={{ color: "blue" }}
                                >
                                    Đăng ký
                                </button>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <button onClick={onForgot} className="btn">
                            Lấy mật khẩu mới
                        </button>
                        <div className="login-register">
                            <p>
                                Bạn có muốn đăng nhập không?
                                <button
                                    onClick={() => setForgot(false)}
                                    className="register-link"
                                    style={{ color: "blue" }}
                                >
                                    Đăng nhập
                                </button>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default Login;
Login.propTypes = {
    setUser: PropTypes.func.isRequired,
};
