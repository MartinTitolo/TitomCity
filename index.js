const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id:1,
        nombre:"Ryzen 5 5500",
        precio:43500,
        Img: 
        "https://www.gamerloot.mx/wp-content/uploads/2022/07/AMD-RYZEN-5-5500.webp"

    },  
    {
        id: 2,
        nombre: "Ryzen 5 5600",
        precio: 50000,
        Img: 
        "https://www.thesite.com.ar/wp-content/uploads/2021/10/R55600G_Mesa-de-trabajo-1.png"

    },  
    {
        id: 3,
        nombre: "Ryzen 7 5700",
        precio: 75000,
        Img: 
        "https://www.thesite.com.ar/wp-content/uploads/2021/10/R75700G_Mesa-de-trabajo-1.png"

    },  
    {
        id: 4,
        nombre: "Ryzen 9 5900x",
        precio: 138000,
        Img: 
        "https://www.invidcomputers.com/images/0000000000413124022790413124--1-.jpg"

    },  
    {
        id: 5,
        nombre: "I5 10400f",
        precio: 38000,
        Img: 
        "https://logg.api.cygnus.market/static/logg/Global/Procesador%20Intel%20Core%20i5-10400F%204.3GHz%2012MB%20Comet%20Lake%20LGA1200%20c/%20Cooler/45ed97aa76874f349dd777aace7795d8.webp"

    },  
    {
        id: 6,
        nombre: "i7 12700k",
        precio: 116800,
        Img: 
        "https://binauralcomputer.com.mx/image/cache/catalog/journal3/catalogo_productos/Procesadores/intel/12400f_1-1000x1000.png"

    },  
    {
        id: 7,
        nombre: "I9 12900k",
        precio: 118000,
        Img: 
        "https://www.atacadogames.com/imagem/processadores-intel/processador-intel-core-i9-12900f-1700-16c-24t/2/125735.jpg?pfdrid_c=true"

    },  
    {
        id: 8,
        nombre: "RX 6500 XT",
        precio: 75000,
        Img: 
        "https://www.tryhardware.com.ar/wp-content/uploads/2022/08/Placa-de-Video-Asus-Radeon-RX-6500-XT-4GB-GDDR6-TUF-Gaming-OC.png"

    },  
    {
        id: 9,
        nombre: "RX 6600 XT",
        precio: 102000,
        Img: 
        "https://www.venex.com.ar/products_images/1662060254_challenger.png"

    },  
    {
        id: 10,
        nombre: "RTX 2060 12gb",
        precio: 122000,
        Img: 
        "https://images.evga.com/products/gallery/png/12G-P4-2261-KR_XL_1.png"

    },  
    {
        id: 11,
        nombre: "RTX 3070 TI",
        precio: 190000,
        Img: 
        "https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/VGA87.png"

    },  
    {
        id: 12,
        nombre: "RTX 4090",
        precio: 1250000,
        Img: 
        "https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/181_15-10-2022-11-10-09-vga152.png"

    },  
    {
        id: 13,
        nombre: "Teclado Red Dragon Draconic White",
        precio: 13000,
        Img: 
        "https://cdn.shopify.com/s/files/1/2695/9506/products/K530PRO_3_1024x1024@2x.png?v=1649318531"

    },  
    {
        id: 14,
        nombre: "Teclado Red Dragon Draconic Black",
        precio: 13000,
        Img: 
        "https://cdn.shopify.com/s/files/1/2695/9506/products/K530_RGB_2_1024x1024@2x.png?v=1579515230"

    },  
    {
        id: 15,
        nombre: "Auriculares Red Dragon Zeuz H510",
        precio: 19000,
        Img: 
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/574/495/products/redragon-auricular-h510-rgb-zeus-x-61-27a8b08d25eded653f16402189539798-1024-1024.png"

    },  
    {
        id: 16,
        nombre: "Auriculares Logitech G733",
        precio: 22000,
        Img: 
        "https://resource.logitech.com/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-1.png"

    },  
    {
        id: 17,
        nombre: "Mouse Logitech G Pro",
        precio: 20000,
        Img: 
        "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9537098.png"

    },  
    {
        id: 18,
        nombre: "Mouse Logitech G203",
        precio: 6000,
        Img: 
        "https://pcprojectstore.com.ar/wp-content/uploads/2022/04/mouse-logitech-g203-lilac-1.png"

    },  
    {
        id:19,
        nombre:"Monitor Samsung 24' Curvo 144hz",
        precio:57000,
        Img: 
        "https://xtremegames.com.ar/wp-content/uploads/2022/03/latin-odyssey-g5-g55t-lc27g55tqwlxzp-frontblack-310956597-2.webp"

    },  
];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add('card');
    content.innerHTML = `
        <img src="${product.Img}">
        <h3>${product.nombre}</h3>
        <p class="price">$${product.precio.toLocaleString("en-US")}</p>
        <button id="comprar${product.id}" class="comprar">COMPRAR</button>
    `;

    shopContent.append(content);

    let buttonComprar = document.getElementById(`comprar${product.id}`);
    buttonComprar.addEventListener('click', () => comprarProducto(product));
});


function comprarProducto(product) {
    let productoEncontrado = carrito.find(prod => prod.id === product.id);

    if(!productoEncontrado) {
        carrito.push({
            ...product,
            cantidad: 1
        })
    } else {
        productoEncontrado.cantidad++;
    }

    console.log(carrito);
}

function borrarProducto(product) {
    carrito = carrito.filter(prod => prod.id !== product.id);
}

verCarrito.addEventListener("click", () => {

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalContainer.style.display = "flex"

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carrito.className = "modal-content"
        carrito.innerHTML = `
        <img src="${product.Img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;

        modalContainer.append(carritoContent);
     });

     const total = carrito.reduce((acc, el) => acc + el.precio, 0);

     const totalBuying = document.createElement("div")
     totalBuying.className = "total-content"
     totalBuying.innerHTML = `total a pagar: ${total} $`;
     modalContainer.append(totalBuying);
});
