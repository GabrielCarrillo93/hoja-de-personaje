import { useContext } from 'react'
import './Vida.css'
import { themeContext } from '../../ThemeContext'
import { Icon } from '@iconify/react/dist/iconify.js'

const Vida = () => {
    const [tema] = useContext(themeContext)
    return (
        <section className={`vida ${tema}`}>
            <div className='vidabox'>
                <h3>Iniciativa</h3>
                <div className={`vidainput ${tema}`}>
                    <input type="text" name="iniciativa" id="iniciativa" />
                </div>
            </div>
            <div className='vidabox'>
                <h3>Velocidad</h3>
                <div className={`vidainput ${tema}`}>
                    <input type="number" name="velocidad" id="velocidad" />
                </div>
            </div>
            <div className='vidabox'>
                <h3>AC</h3>
                <div className={`vidainput ${tema}`}><input type="text" name="ac" id="ac" /></div>
            </div>
            <div className='vidabox'>
                <h3>HP</h3>
                <div className={`vidainput ${tema}`}>
                    <input type="text" name="current" id="current" /><span>/</span>
                    <input type="text" name="total" id="total" />
                </div>
            </div>
            <div className='vidabox'>
                <h3>Dados de golpe</h3>
                <div className={`vidainput ${tema}`}>
                    <input type="text" name="hitdice" id="hitdice" />
                </div>
            </div>
            <div className='vidabox'>
                <h3>Salvación</h3>
                <div className={`vidainput columna ${tema}`}>
                    <div className='salvacion '>
                        <label htmlFor="success"><Icon className={`icon ${tema}`} icon="game-icons:angel-outfit" style={{fontSize: "28px"}}/></label>
                        <input type="checkbox" name="success" id="success_1" /><input type="checkbox" name="success" id="success_2" /><input type="checkbox" name="success" id="success_3" />
                    </div>
                    <div className='salvacion '>
                    <label htmlFor="success"><Icon className={`icon ${tema}`} icon="game-icons:grim-reaper" style={{fontSize: "28px"}}/></label>
                        <input type="checkbox" name="fail" id="fail_1" /><input type="checkbox" name="fail" id="fail_2" /><input type="checkbox" name="fail" id="fail_3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vida