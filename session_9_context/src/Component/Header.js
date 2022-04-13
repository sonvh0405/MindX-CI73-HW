import { useContext } from 'react';
import UserContext from "./UserContext";
import "./Header.css"
import LanguageContext from './LanguageContext';

const Header = () => {
    const userctx = useContext(UserContext);

    const langCtx = useContext(LanguageContext);

    return (
        <div className='header'>
            <div>MindX</div>
            {userctx.loginstatus === false ? (langCtx.language === "vi" ? <div className='login-btn'>Đăng nhập</div> : <div className='login-btn'>Login</div>) : <div className='login-btn'>{userctx.username}</div>}
        </div>
    )
}

export default Header;