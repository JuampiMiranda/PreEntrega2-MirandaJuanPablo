const productos = [
    { nombre: "Magneto", precio: 52500, id: "1", img: "../img/magneto.jpg", idCat: "2" },
    { nombre: "Lipoláser", precio: 75600, id: "2", img: "../img/lipolaser.jpg", idCat: "2" },
    { nombre: "Ultrasonido", precio: 95000, id: "3", img: "../img/ultrasonido.jpg", idCat: "3" },
    { nombre: "HIFU", precio: 78500, id: "4", img: "../img/HIFU.jpeg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

//Creamos una función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}


//Creamos una función que retorne toda una categoría de productos: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}





