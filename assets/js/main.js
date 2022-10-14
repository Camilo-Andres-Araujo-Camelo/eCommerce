const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
]


const loadComponent = () => {
  const loader = document.getElementById( "loader" )
  setTimeout (() => {
    loader.classList.add( "hide" )
  }, 1000)
}


// Dark mode
const themeIcon = document.getElementById( "theme-btn" )
const logoAcademlo = document.getElementById( "logo-academlo" )

themeIcon.addEventListener( "click", ()=> {
  document.body.classList.toggle("dark")

  if(themeIcon.classList.contains( "bx-moon" )){
    themeIcon.classList.replace( "bx-moon", "bx-sun")
    logoAcademlo.classList.add( "logo-academlo-dark" )
  } else {
    themeIcon.classList.replace( "bx-sun", "bx-moon")
    logoAcademlo.classList.remove( "logo-academlo-dark" )
  }
} )

// menu hamburguersa

const navMenu = document.getElementById( "menu" ) 

const menuIcon = document.getElementById( "menu-btn" )

const homeAnchor = document.getElementById( "home" )

const closeMenu = document.getElementById( "close-menu" )

const carrito = document.getElementById( "carrito" )

const cartIcon = document.getElementById( "cart-icon" )

const closeCart = document.getElementById( "close-cart" )

// Home para cerrar el menu en mobile
homeAnchor.addEventListener( "click", ()=> {
  navMenu.classList.replace("nav-menu-visible", "nav-menu")
})

//Abrir menu hamburguesa en mobile
menuIcon.addEventListener( "click", () => {
    navMenu.classList.replace("nav-menu", "nav-menu-visible")
})

// Cerrar menu hamburguesa en mobile
closeMenu.addEventListener( "click", ()=> {
    navMenu.classList.replace("nav-menu-visible", "nav-menu")
})

// Carrito
// Abrir carrito
cartIcon.addEventListener( "click", ()=> {
    carrito.classList.replace("carrito", "carrito-visible")
})

// Cerrar carrito
closeCart.addEventListener( "click", ()=> {
    carrito.classList.replace("carrito-visible", "carrito")
})


// inicio Funcionalidad caja ropa

const showProducts = ()=> {
  const cajaRopa = document.getElementById("caja-ropa")

  let fragment = ``

  items.forEach((product) => {
    fragment += `          
      <div class="container-prenda prenda-uno" id="${product.id}">
        <img src= ${product.image} alt="prenda" class="prenda-img">
        
          <div class="prenda-information">
            <span class="prenda-precio">
              $${product.price}.00
            </span>
            <span class="prenda-stock">
              Stock:${product.quantity}
            </span>
            <span class="prenda-type">
              ${product.name}
            </span>
          </div>

          <i class='bx bx-plus bx-md plus-ropa btn-sum'></i>

      </div>`
  })

  
  cajaRopa.innerHTML = fragment

 cartFunctionality()

}
// final Funcionalidad caja ropa

// inicio carrito caja ropa


function cartFunctionality() {

  const btnsPlus = document.querySelectorAll(".btn-sum")
  const cart = []

  btnsPlus.forEach( btn => {
    btn.addEventListener( "click", e => {
      const id = parseInt(e.target.parentElement.id)
      const selectedProduct = items.find( item => item.id === id)
      
      let index = cart.indexOf(selectedProduct)

      if( index !== -1) {
        if( cart[index].cantidad >= cart[index].quantity ){
          alert("No hay stock")
        }else {
          cart[index].cantidad++
        }
    
      } else {
        selectedProduct.cantidad = 1
        cart.push(selectedProduct)
      }
      
      console.log(cart);
      showProductsInCart(cart)

    })
  })
}

function showProductsInCart(cart) {

  const productsInCart = document.getElementById("productsInCart")
  console.log(productsInCart);

  const itemsInCart = document.getElementById("itemsInCart")
  const precioTotal = document.getElementById("precioTotal")

  const cartCounter = document.getElementById("cart-counter")

  let fragmentInCart = ``
  let contadorItemsInCart = 0
  let totalCompra = 0

  cart.forEach((product) =>{

    fragmentInCart += `
    <div class="cart-item">

        <img class="cart-item-img" src=${product.image} width="80px" alt="cart-item-img">

        <div class="cart-item-information">
            <span class="cart-item-type">${product.name}</span>
            <span class="cart-item-stock">${product.quantity}</span>
            <span class="cart-item-price">$${product.price}.00</span>
            <span class="cart-item-subtotal-text">Subtotal:</span>
            <span class="cart-item-subtotal-price">$24:00</span>
            <i class='bx bx-trash bx-xs'></i>
            <div class="cart-item-unidades">
                <i class='bx bx-minus'></i>
                <span class="unidades">${product.cantidad} units</span>
                <i class='bx bx-plus plus-cart btn-sum'></i>
            </div>
        </div>

    </div>`
    contadorItemsInCart += product.cantidad
    totalCompra += product.price * product.cantidad
  })

  productsInCart.innerHTML = fragmentInCart
  itemsInCart.innerHTML = `${contadorItemsInCart} items`
  precioTotal.innerHTML = `$${totalCompra}.00`
  cartCounter.innerHTML = contadorItemsInCart

}

// final Funcionalidad caja ropa















// final Funcionalidad caja ropa

document.addEventListener( "DOMContentLoaded", ()=> {
  loadComponent()
  showProducts()
}) // cargue de página completa