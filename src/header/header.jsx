import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import '../header/header.css';

const Header = () => {
    return (
        <div className="header">
          <div className='Logo'>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <p className='companyName'>
                    YONATAN
                </p>
          </div>
          <div className='navigations'>
                <a href="#" className='navigationText'>Home</a>
                <a href="#" className='navigationText'>Cars</a>
                <a href="#" className='navigationText'>About</a>
                <a href="#" className='navigationText'>Services</a>
                <a href="#" className='navigationText'>Contact</a>
          </div>
        </div>
      );
}
 
export default Header;