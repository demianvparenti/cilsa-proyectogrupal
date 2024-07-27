class Producto{
    constructor(nombre, descripcion, stock, precio, imagen){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let descripcion1 = "Cuenta con Tecnología True Wireless.\nAlcance inalámbrico de 30 m.\nModo manos libres incluido.\nCon cancelación de ruido.\nMicrófono flexible incorporado.\nResistentes al agua.\nLargo de cable: 1.2m.\nTamaño del altavoz: 28mm"
let descripcion2 = "80 PLUS Gold certified.\nFully modular design.\n120mm Smart Hydraulic Bearing (HYB) Fan.\nMain Japanese capacitors.\nPowerful single +12V rail.\nOVP/OPP/SCP/UVP/OCP/OTP protection.\nCompact size";
let descripcion3 = "Complaciendo a los gamers con lo que realmente necesitan, B450 GAMING PLUS MAX está equipada con Core Boost, Turbo M.2, DDR4 Boost y conector USB 3.2 Gen2.\nSoporta procesadores Desktop 1ra, 2da y  3ra Gen AMD Ryzen™ / Ryzen™ con gráficos Radeon™ Vega y 2da Gen AMD Ryzen™ con gráficos Radeon™ / Athlon™ con gráficos Radeon™ Vega para Socket AM4."
descripcion3 += "\nSoporta memoria DDR4 hasta 4133(OC) MHz.\nJuego ultrarrápido: TURBO M.2, AMD Turbo USB 3.2 GEN2, tecnología StoreMI.\nCore Boost: Con distribución premium y diseño energético totalmente digital, soporta más núcleos y ofrece mejor desempeño."
descripcion3 += "\nDDR4 Boost: Tecnología avanzada que envía señales de datos puras para el mejor desempeño y estabilidad en juegos.\nAudio Boost: Gratifica tus oídos con el sonido con calidad de estudio para la experiencia de juego más inmersiva."
descripcion3 += "\nBotón Flash BIOS : Permite usar simplemente una llave USB para flashear cualquier BIOS en segundos, sin instalar CPU, memoria ni tarjeta gráfica"
let descripcion4 = "Micro AMD Ryzen 7 5700G 3.8GH.\nVideo AMD Radeon Vega integrado.\nMother A520M-K.\nDisco Solido SSD 960GB.\nRAM: 32GB DDR4.\nGabinete Gamer RGB.\nFuente 650W 80 Plus.\nAdaptador de WiFi."
let descripcion5 = "Disco SSD Patriot Burst Elite 120gb 2.5.\nMotherboard Asus Prime J4005i-c Con Procesador Celeron Dual Core Ddr4.\nMemoria Ram Pny Udim 8GB Ddr4 3200 Cl16.\nGabinete Kit Compucase 2206 C/Fuente 500w Teclado Mouse y Parlantes."
let descripcion6 = "Boxed Processor.\nMemoria DDR4.\n2 canales de memoria.\nArriba de 3200MHz velocidad de memoria.\nPCIe 4.0.\nNúcleos de CPU: 6.\nHilos: 12.\nFrecuencia base: 3.6GHz.\nFrecuencia máxima: 4.2GHz.\nCaché L3: 32MB.\nTDP: 65W.\nDesbloqueado: Sí.\nCMOS: TSMC 7nm FinFET.\nSocket: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz: 7nm.\nPaquete: AM4.\nVersión de PCI Express: PCIe 4.0.\nSolución térmica: Wraith Stealth.\nTamaño de matriz:"
let descripcion7 = "Teclado y mouse con cable.\nTECLADO:\nDiseño resistente a derrames.\nContiene teclado numérico.\nTecla cilíndrica.\nMedidas: 450mm ancho, 155mm alto y 23.5mm profundidad. "
descripcion7 += "\nMOUSE:\nUtiliza cable.\nSensor óptico y rueda de desplazamiento.\nResolución de 1000dpi."

const productos = [
    new Producto("Auriculares Jabra EVOLVE 20 MS", descripcion1, 10, 95000, "./../assets/img/auriculares.jpg"),
    new Producto("Fuente de alimentación Gigabyte P850GM", descripcion2, 10, 120000, "./../assets/img/gigabyte.jpg"),
    new Producto("Motherboard MSI Gaming Plus Max B450", descripcion3, 10, 140000, "./../assets/img/msi.jpg"),
    new Producto("PC Armada Gamer", descripcion4, 5, 1099999, "./../assets/img/pcarmadagamer.webp"),
    new Producto("PC Armada de Hogar y Oficina", descripcion5, 5, 550000, "./../assets/img/pcarmadaofi.png"),
    new Producto("Microprocesador AMD Ryzen 5 3600", descripcion6, 10, 170000, "./../assets/img/ryzen.jpg"),
    new Producto("Combo Teclado y Mouse Logitech K120", descripcion7, 10, 13000, "./../assets/img/teclado_k120.jpg")
];


document.addEventListener("DOMContentLoaded", () =>{
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(producto =>{
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');

        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen-pequena">
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-precio">$${producto.precio.toFixed(2)}</p>
            <p class="producto-stock">Stock: ${producto.stock}</p>
        `;

        productosContainer.appendChild(productoElement);
    })
});