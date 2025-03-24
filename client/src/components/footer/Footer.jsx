export default function Footer(){
  return(
    <footer className="footer text-muted">
    <div className="container">
      <div className="footer-top">
        <div className="footer-section">
          <h4>За нас</h4>
          <p>
            Това е платформа за обучение, предоставяща курсове по различни езици. 
            Нашата цел е да ви помогнем да постигнете своите образователни цели.
          </p>
        </div>

        <div className="footer-section">
          <h4>Бързи връзки</h4>
          <ul>
            <li><a href="/">Начало</a></li>
            <li><a href="/courses">Курсове</a></li>
            <li><a href="/contact">Контакт</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Контакти</h4>
          <p>Адрес: ул. Витоша 123, София, България</p>
          <p>Email: <a href="mailto:danailovvpetar@gmail.com">danailovvpetar@gmail.com</a></p>
          <p>Телефон: <a href="tel:+359877182829">+359 877 182 829</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 - Петър Данаилов. Всички права запазени.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/peter.danailov.14/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}