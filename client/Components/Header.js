import Image from 'next/image'

import wb from './src/img/wb.jpg'
import info from './src/img/info.png'
import home from './src/img/home.png'
import virus from './src/img/virus.png'
import eye from './src/img/eye.png'
import deer from './src/img/deer.png'


function Header() {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <Image src={wb} alt="#" />
          <p className="chimera"> Химера </p>
        </div>
        <ul className='navbar'>
          <li><Image src={info} alt="#" /></li>
          <li><Image src={home} alt="#" /></li>
          <li><Image src={virus} alt="#" /></li>
          <li><Image src={eye} alt="#" /></li>
          <li></li>
          <li></li>
        </ul>
      </nav>

      <div>
        <div className="block">
          <div className="paralm"></div>
          <h1>Истоки</h1>
          <h3>Языки программирования</h3>
          <div className="greeting">
            <p>Добро пожаловать на тропу познания.</p>
            <p>Приятного путешествия!</p>
          </div>
        </div>

        <div className="deer">
          <Image src={deer} alt="#" />
        </div>
      </div>
    </div>
  )
}

export default Header
