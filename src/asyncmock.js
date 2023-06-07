const productos = [
    { nombre: "Magneto", precio: 52500, id: "1", stock:2, img: "../img/magneto.jpg", idCat: "2" },
    { nombre: "Lipoláser", precio: 75600, id: "2", stock:5, img: "../img/lipolaser.jpg", idCat: "2" },
    { nombre: "Ultrasonido", precio: 95000, id: "3", stock:3, img: "../img/ultrasonido.jpg", idCat: "3" },
    { nombre: "HIFU", precio: 78500, id: "4", stock:4, img: "../img/HIFU.jpeg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}





