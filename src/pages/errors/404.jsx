import { Button, Result } from "antd";
const Page404 = () => (
    <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
        extra={<Button type="primary">Quay lại trang chủ</Button>}
    />
);
export default Page404;
