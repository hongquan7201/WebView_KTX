const Notification = (api, type, detail) => {
    api[type]({
        message: 'Thông báo',
        description: detail,
    });
};
export default Notification