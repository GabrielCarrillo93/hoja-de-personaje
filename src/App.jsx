import { useEffect, useState } from 'react'
import './App.css'
import { themeContext } from './ThemeContext'
import Header from './components/Header/Header'
import Info from './components/Info/Info'

function App() {
    const [tema, setTema] = useState("claro")

    useEffect(() => {
        const body = document.getElementById("root");
        body.className = tema
    }, [tema])
    

    return (
        <>
            <themeContext.Provider value={[tema, setTema]}>
                <Header/>
                <main>
                    <Info />
                </main>
            </themeContext.Provider>
        </>
    )
}

export default App
