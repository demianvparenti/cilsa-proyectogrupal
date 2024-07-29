document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');
    const categoria = urlParams.get('categoria');

    if (productoId) {
        cargarProducto(productoId);
    } else {
        cargarProductos(categoria);
    }

    agregarEventosCategorias();
});

function cargarProducto(productoId) {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta: ' + response.statusText);
            }
            return response.json();
        })
        .then(productos => {
            const id = Number(productoId);
            const producto = productos.find(p => p.id === id);

            if (!producto) {
                console.error('Producto no encontrado');
                return;
            }

            mostrarProducto(producto);
        })
        .catch(error => console.error('Error al cargar el producto: ', error));
}

let productosOriginales = [];

function cargarProductos(categoria) {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta: ' + response.statusText);
            }
            return response.json();
        })
        .then(productos => {
            productosOriginales = productos;
            if (categoria === 'todos') {
                mostrarProductos(productosOriginales);
                actualizarTitulo('todos');
            } else {
                let productosFiltrados = productosOriginales.filter(producto => producto.categoria === categoria);
                mostrarProductos(productosFiltrados);
                actualizarTitulo(categoria);
            }
        })
        .catch(error => console.error("Error al cargar los productos: ", error));
}

function mostrarProducto(producto) {
    const productosContainer = document.getElementById('producto-container');
    if (!productosContainer) {
        console.error('Contenedor de producto no encontrado');
        return;
    }
    productosContainer.innerHTML = '';

    const productoElement = document.createElement('div');
    productoElement.classList.add('producto-item');

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
                <div class="row">
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    <p>Stock: ${producto.stock} unidades</p>
                </div>
            </div>
        </div>
    `;
    productosContainer.appendChild(productoElement);
}

function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');
    if (!productosContainer) {
        console.error('Contenedor de productos no encontrado');
        return;
    }
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
}


function agregarEventosCategorias() {
    const categoriaLinks = document.querySelectorAll('.list-group-item, .navbar-link');

    categoriaLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let categoria = event.target.getAttribute('data-categoria');
            if (categoria === 'todos') {
                mostrarProductos(productosOriginales);
                actualizarTitulo('todos');
            } else {
                let productosFiltrados = productosOriginales.filter(producto => producto.categoria === categoria);
                mostrarProductos(productosFiltrados);
                actualizarTitulo(categoria);
            }
        });
    });
}

function actualizarTitulo(categoria) {
    const tituloElemento = document.getElementById('title-products');
    
    if (tituloElemento) {
        let textoTitulo = 'Productos';
        
        switch (categoria) {
            case 'componentes':
                textoTitulo = 'Arma tu PC';
                break;
            case 'pc-armadas':
                textoTitulo = 'PCs Armadas';
                break;
            case 'accesorios':
                textoTitulo = 'Accesorios';
                break;
            case 'todos':
                textoTitulo = 'Todos los productos';
                break;
            default:
                textoTitulo = 'Productos';
                break;
        }
        
        tituloElemento.textContent = textoTitulo;
    } else {
        console.error('Elemento del título no encontrado');
    }




// Formulario Contacto
const form = document.getElementById('contactForm');
form.addEventListener('submit', handleSubmit);

const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
const successModal = new bootstrap.Modal(document.getElementById('successModal'));

const phoneInput = document.getElementById('phone');
            phoneInput.addEventListener('input', (event) => {
                event.target.value = event.target.value.replace(/[^0-9+\-\s()]/g, '');
            });

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessages = [];
    document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');

    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        errorMessages.push('El nombre es obligatorio.');
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('name-error').style.display = 'block';
        errorMessages.push('El nombre debe tener al menos 3 caracteres.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').style.display = 'block';
        errorMessages.push('El email es obligatorio.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        errorMessages.push('El email no es válido.');
        isValid = false;
    }

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phone) {
        document.getElementById('phone-error').style.display = 'block';
        errorMessages.push('El teléfono es obligatorio.');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').style.display = 'block';
        errorMessages.push('El teléfono contiene caracteres no válidos.');
        isValid = false;
    }

    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        errorMessages.push('El mensaje es obligatorio.');
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').style.display = 'block';
        errorMessages.push('El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
    }

    if (isValid) {
        showModal('successModal', 'Formulario enviado correctamente. ¡Gracias por contactarnos!');
    } else {
        showModal('errorModal', errorMessages.join('<br>'));
    }
}

function showModal(modalId, message) {
    const modalBody = document.getElementById(modalId + 'Body');
    modalBody.innerHTML = message;
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
    }
}
