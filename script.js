document.addEventListener("DOMContentLoaded", () => {
    let productos = [];

    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta', response.statusText);
            }
            return response.json();
        }).then(data => {
            productos = data;
            console.log(productos);
            mostrarProductos(productos);
        }).catch(error => console.error("Error al cargar los productos: ", error));

    const productosContainer = document.getElementById('productos-container');
    const categoriaLinks = document.querySelectorAll('.list-group-item');

    categoriaLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const categoria = event.target.getAttribute('data-categoria');
            const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
            mostrarProductos(productosFiltrados);
        });
    });

    function mostrarProductos(productos) {
        productosContainer.innerHTML = '';

        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('col-12', 'col-md-6', 'mb-4');

            productoElement.innerHTML = `
                    <div class="card-item h-100 text-white">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top producto-imagen-pequena">
                        <div class="card-body">
                            <a href="producto.html?id=${producto.id}" >
                                <h5 class="card-title producto-nombre pt-3">${producto.nombre}</h5>
                            </a>
                            <p class="card-text producto-precio py-2">$${producto.precio.toFixed(2)}</p>
                            <p class="card-text producto-stock">Stock: ${producto.stock}</p>
                        </div>
                    </div>
                `;

            productosContainer.appendChild(productoElement);
        });
    }
});