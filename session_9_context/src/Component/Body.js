import { useContext } from 'react';
import UserContext from "./UserContext";
import "./Body.css"
import LanguageContext from './LanguageContext';

const Body = () => {
    const userctx = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        userctx.username === "" ? userctx.setLoginStatus(false) : userctx.setLoginStatus(true);
    }

    const handleInputChange = (event) => {
        userctx.setUsername(event.target.value)
    }

    const langCtx = useContext(LanguageContext);

    return (
        <div className='body'>
            {userctx.loginstatus === false ?
                <form className='form' onSubmit={handleSubmit}>
                    {langCtx.language === "vi" ? <div className="lable-form">ĐĂNG NHẬP</div> : <div className="lable-form">LOGIN</div>}
                    <input className="input" type="text" value={userctx.username} onChange={handleInputChange} placeholder={langCtx.language === "vi" ? "Tên đăng nhập..." : "Username..."} required />
                    <br />
                    {langCtx.language === "vi" ? <button className="submit-btn" type="submit">ĐĂNG NHẬP</button> : <button className="submit-btn" type="submit">CONFIRM</button>}

                </form> :
                langCtx.language === "vi" ? <div>Chào mừng!</div> : <div>Welcome!</div>
            }
        </div>
    )
}

export default Body;