import './index.css'

function App() {

  return (
    <main>
      <div className="card">
        <img src="/src/assets/image-product-mobile.jpg" alt="perfume bottle" />
        <div className="container">
          <h3>Perfume</h3>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <h2>$149.99</h2>
          <p className='price-markdown'>$169.99</p>
          <button><span><image src="./assets/icon-cart.svg" alt="shopping cart" /></span>Add to Cart</button>
        </div>
      </div>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://three-js-portfolio-phi.vercel.app/" target='_blank'>Felicia Nicole Haggard</a>.
      </footer>
    </main>
  )
}

export default App
