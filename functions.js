import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import { getProductes } from "./tiendabicicletas.js";

createApp({
    data() {
        return {
            bicis: [],
            tiendastatus: 'portada',
            carritoProductos: [], // Cambio de nombre aquí
            nombre: '',
            email: '',
        }
    },
    methods: {
        cambiarDiv(id) {
            this.tiendastatus = id;
        },
        mostrar(id) {
            return (this.tiendastatus === id); // Modifiqué el operador == a === para una comparación más estricta
        },
        agregarAlCarrito(product) {
            const carritoItem = this.carritoProductos.find(item => item.id === product.id);

            if (carritoItem) {
                carritoItem.cantidad++;
            } else {
                this.carritoProductos.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: 1
                });
            }
        },
        calcularTotal(index = 0, total = 0) {
            if (index < this.carritoProductos.length) { // Cambio de nombre aquí
                const item = this.carritoProductos[index]; // Cambio de nombre aquí
                total += item.precio * item.cantidad;
                return this.calcularTotal(index + 1, total);
            }
            return total;
        },
        eliminarDelCarrito(product) {
            const index = this.carritoProductos.findIndex(item => item.id === product.id); // Cambio de nombre aquí
            if (index !== -1) {
                if (this.carritoProductos[index].cantidad > 1) { // Cambio de nombre aquí
                    this.carritoProductos[index].cantidad--;
                } else {
                    this.carritoProductos.splice(index, 1);
                }
            }
        },
        guardarlocalstorage() {
            localStorage.setItem('nombre', this.nombre);
            localStorage.setItem('email', this.email);
        },
        cargarlocalstorage() {
            this.nombre = localStorage.getItem('nombre');
            this.email = localStorage.getItem('email');
        },
        borrarlocalstorage() {
            localStorage.removeItem('nombre');
            localStorage.removeItem('email');
        }
    },
    created() {
        if (localStorage.getItem('nombre') && localStorage.getItem('email')) {
            this.cargarlocalstorage();
        }
    },
    mounted() {
        getProductes().then(data => {
            this.bicis = data;
        });
    }
}).mount('#app')
