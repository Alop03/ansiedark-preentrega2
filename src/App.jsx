import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

// Compone la navegación y el contenido principal del e-commerce.
function App() {
    return (
        <>
            <Navbar />

            <main className="contenido-principal">
                <ItemListContainer
                    greeting="Tu selección mensual empieza acá."
                />
            </main>
        </>
    )
}

export default App
