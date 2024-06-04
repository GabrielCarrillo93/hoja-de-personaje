import { useContext } from 'react'
import './StatBox.css'
import { themeContext } from '../../ThemeContext'

// eslint-disable-next-line react/prop-types
const StatBox = ({nombre}) => {
    const [tema] = useContext(themeContext)
    
    return (
        <div className={`statbox ${tema}`}>
            <h3>{nombre}</h3>
            <div className={`mod ${tema}`}>
                <input type="text" />
                <div className={`base ${tema}`}>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default StatBox