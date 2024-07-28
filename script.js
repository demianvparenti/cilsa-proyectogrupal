document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');
    console.log(productoId);

    //si hay un id en la url, carga el producto
    if (productoId) {
        cargarProducto(productoId);
    } else { //si no, carga todos los productos
        cargarProductos();
    }


});

//funcion para cargar un producto específico por id
function cargarProducto(productoId) {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta', response.statusText);
            }
            return response.json();
        })
        .then(productos => {
            const id = Number(productoId);
            const producto = productos.find(p => p.id === id);

            if (!producto) {
                console.error('Producto no encontrado');
                return
            }

            mostrarProducto(producto);
        })
        .catch(error => console.error('Error al cargar los productos: ', error));
}

let productosOriginales = [];

//funcion para cargar todos los productos
function cargarProductos() {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta', response.statusText);
            }
            return response.json();
        })
        .then(productos => {
            productosOriginales = productos;
            mostrarProductos(productosOriginales);
        })
        .catch(error => console.error("Error al cargar los productos: ", error));
}


//Función para mostrar un producto en el DOM(item.html)
function mostrarProducto(producto) {
    const productosContainer = document.getElementById('producto-container');
    productosContainer.innerHTML = '';

    const productoElement = document.createElement('div');
    productoElement.classList.add('div');

    productoElement.innerHTML = `
            <div class="row text-start w-100">
                <div class="col-6">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid mx-auto d-block">
                </div>
                <div class="col-6">
                    <div class="row">
                        <h2 class="p-3">${producto.nombre}</h2>
                        <p id="producto-descripcion">${producto.descripcion}</p>
                    </div>
                    <div class="row ">
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: ${producto.stock} unidades</p>
                    </div>
                </div>
            </div>
    `;
    productosContainer.appendChild(productoElement);
}

//funcion para mostrar todos los productos en el DOM
function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('col-12', 'col-md-6', 'mb-4');

        productoElement.innerHTML = `
            <div class="card-item h-100 text-white">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top producto-imagen-pequena">
                <div class="card-body">
                    <a href="item.html?id=${producto.id}">
                        <h5 class="card-title producto-nombre pt-3">${producto.nombre}</h5>
                    </a>
                    <p class="card-text producto-precio py-2">$${producto.precio.toFixed(2)}</p>
                    <p class="card-text producto-stock">Stock: ${producto.stock}</p>
                </div>
            </div>
        `;

        productosContainer.appendChild(productoElement);
    });

    agregarEventosCategorias();
}

//funcion para agregar eventos a las categorias de filtrados
function agregarEventosCategorias() {
    const categoriaLinks = document.querySelectorAll('.list-group-item');

    categoriaLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let categoria = event.target.getAttribute('data-categoria');
            let productosFiltrados = productosOriginales.filter(producto => producto.categoria === categoria);
            mostrarProductos(productosFiltrados);
        });
    });
}

