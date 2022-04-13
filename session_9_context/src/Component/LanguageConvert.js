const LanguageConvert = (language, key) => {
    const viet = {
        login: "Đăng nhập",
        formlable: "ĐĂNG NHẬP",
        inputlable: "Tên tài khoản...",
        submitlable: "XÁC NHẬN",
        welcometext: "Chào mừng"
    }

    const eng = {
        login: "Login",
        formlable: "LOGIN",
        inputlable: "Username...",
        submitlable: "SUBMIT",
        welcometext: "Welcome!"
    }

    return (
        <div>
            {language === "vi" ? <div>{viet.key}</div> : <div>{eng.key}</div>}
        </div>
    )
}

export default LanguageConvert;