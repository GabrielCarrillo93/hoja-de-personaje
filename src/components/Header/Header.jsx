import { useContext } from "react"
import { themeContext } from "../../ThemeContext"
import { Icon } from "@iconify/react/dist/iconify.js"
import './Header.css'

const Header = () => {
    const tema = useContext(themeContext)
    return (
        <header className={tema[0]}>
            <h1>Hoja de personaje</h1>
            <Icon 
                className={`icono ${tema[0]}`}
                icon={tema[0] === "claro" ? "material-symbols:dark-mode" : "material-symbols:light-mode" }
                style={{ fontSize: '32px' }}
                onClick={() => {
                    tema[1](tema[0] === "claro" ? "oscuro" : "claro")
                }}/> 
        </header>
    )
}
export default Header