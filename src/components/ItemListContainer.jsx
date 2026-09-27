import "./ItemListContainer.css"

// Recibe el mensaje principal mediante props y reserva el espacio del catálogo.
function ItemListContainer({ greeting }) {
    return (
        <section
            id="catalogo"
            className="catalogo"
            aria-labelledby="titulo-catalogo"
        >
            <div className="catalogo__contenido">
                <p className="catalogo__etiqueta">
                    Suscripción mensual de joyas
                </p>

                <h1
                    id="titulo-catalogo"
                    className="catalogo__titulo"
                >
                    {greeting}
                </h1>

                <p className="catalogo__descripcion">
                    Una selección diferente cada mes para combinar,
                    mezclar y hacer propia.
                </p>

                <span className="catalogo__detalle">
                    Catálogo en construcción
                </span>
            </div>
        </section>
    )
}

export default ItemListContainer
