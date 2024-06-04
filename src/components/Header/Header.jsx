import { useContext } from "react"
import { themeContext } from "../../ThemeContext"
import { Icon } from "@iconify/react/dist/iconify.js"
import './Header.css'

const Header = () => {
    const [tema, setTema] = useContext(themeContext)
    return (
        <header className={tema}>
            <h1>Hoja de personaje</h1>
            <Icon 
                className={`icono ${tema}`}
                icon={tema === "claro" ? "material-symbols:dark-mode" : "material-symbols:light-mode" }
                style={{ fontSize: '32px' }}
                onClick={() => {
                    setTema(tema === "claro" ? "oscuro" : "claro")
                }}/> 
        </header>
    )
}

export default Header