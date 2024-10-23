import React from 'react'
import Nav from './src/Nav'

const links = [
  { href: '#', text: 'Termos de uso' },
  { href: '#', text: 'Politica de privacidade' },
  { href: '#', text: 'Fale conosco' },
]

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footerNav'>
        <Nav links={links} />
      </div>
      <div className='footerCopy'>
        <p>
          &copy; <span id="current-year"></span> Smart Wallet. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
