class ProductManager {
    #products

    constructor () {
        this.#products = []
    }

    addProduct(product) {

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
            return 'Todos los campos son obligatorios.'
        }

        const found = this.#products.find(item => item.code === product.code)

        if (found) {
            return 'El código ya existe.'
        }

        const productToAdd = {id: this.#generateId(), ...product}
        this.#products.push(productToAdd)
        return productToAdd

    }

    #generateId() {
        if (this.#products.length === 0) {
            return 1 
        }
        return this.#products[this.#products.length-1].id + 1
    }

    getProducts() {
        return this.#products
    }

    getProductById(id) {
        const found = this.#products.find(item => item.id === id)

        if (!found) {
            return 'Id no encontrado.'
        }

        return found
    }
}

module.exports = ProductManager