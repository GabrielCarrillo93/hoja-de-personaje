import { useContext } from 'react'
import './Info.css'
import { themeContext } from '../../ThemeContext'

const Info = () => {
    const tema = useContext(themeContext);
    return (
        <section className={`info ${tema[0]}`}>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="nombre">nombre</label>
                <input type="text" name="nombre" id="nombre"/>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="raza">raza</label>
                <select name="raza" id="raza">
                    <option value="" selected disabled>raza</option>
                </select>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="clase">clase</label>
                <select name="clase" id="clase">
                <option value="" selected disabled>clase</option>
                </select>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="nivel">nivel</label>
                <input type="number" name="nivel" id="nivel" min="1" max="20"/>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="trasfondo">trasfondo</label><select name="trasfondo" id="trasfondo">
                <option value="" selected disabled>trasfondo</option>
                </select>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="alineamiento">alineamiento</label>
                <select name="alineamiento" id="alineamiento">
                <option value="" selected disabled>alineamiento</option>
                    <option value="lawfulgood">lawfulgood</option>
                    <option value="neutralgood">neutralgood</option>
                    <option value="chaoticgood">chaoticgood</option>
                    <option value="lawfulneutral">lawfulneutral</option>
                    <option value="neutral">neutral</option>
                    <option value="chaoticneutral">chaoticneutral</option>
                    <option value="lawfulevil">lawfulevil</option>
                    <option value="neutralevil">neutralevil</option>
                    <option value="chaoticevil">chaoticevil</option>
                </select>
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="experiencia">experiencia</label>
                <input type="number" name="experiencia" id="experiencia" />
            </div>
            <div className={`infobox ${tema[0]}`}>
                <label htmlFor="jugador">jugador</label>
                <input type="text" name="jugador" id="jugador" />
            </div>
        </section>
    )
}
export default Info