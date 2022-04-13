import { useContext } from 'react'
import LanguageContext from './LanguageContext'

const Footer = () => {
    const langCtx = useContext(LanguageContext)
    const onSelectLanguage = (event) => {
        langCtx.setLanguage(event.target.value)
    }

    return (
        <div className="footer">
            <select value={langCtx.language} onChange={onSelectLanguage}>
                <option>vi</option>
                <option>en</option>
            </select>
        </div>
    )
}

export default Footer;