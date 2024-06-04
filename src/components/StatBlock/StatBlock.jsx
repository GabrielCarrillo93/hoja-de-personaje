import { useContext } from 'react'
import StatBox from '../StatBox/StatBox'
import './StatBlock.css'
import { themeContext } from '../../ThemeContext'

const StatBlock = () => {
    const [tema] = useContext(themeContext)

    return (
        <section className={`statblock ${tema}`}>
            <StatBox nombre={"FUE"}/>
            <StatBox nombre={"DES"}/>
            <StatBox nombre={"CON"}/>
            <StatBox nombre={"INT"}/>
            <StatBox nombre={"SAB"}/>
            <StatBox nombre={"CAR"}/>
        </section>
    )
}

export default StatBlock