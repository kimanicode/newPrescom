import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import AcmeLogo from "../assets/logo.svg";
import { Link , useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const handleClick =() =>{
    setIsMenuOpen(false)
  }
  const handleGetStartedClick = () => {
    // Navigate to the page where users can request a consultation 
    navigate('/consultation');
    handleClick()
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  
  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'Pricing', route: '/pricing' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Contact Us', route: '/contact-us' }
    
  ];

  return (
    <div className="px-4">
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="p-0">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand className="p-0 m-0">
            <img src={AcmeLogo} alt="Acme Logo" className="h-10 p-0 m-0" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex items-center gap-4 p-0 m-0" justify="start">
          <NavbarBrand className="p-0 m-0">
            <img src={AcmeLogo} alt="Acme Logo" className="h-10 sm:h-20 p-0 m-0" />
          </NavbarBrand>
          <NavbarItem className="p-0 m-0">
            <Link to="/" className="text-gray-800 p-0 m-0">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className="p-0 m-0">
            <Link to="/about-us" className="text-gray-800 p-0 m-0">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem className="p-0 m-0">
            <Link to="/services" className="text-gray-800 p-0 m-0" aria-current="page">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem className="p-0 m-0">
            <Link to="/projects" className="text-gray-800 p-0 m-0">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="p-0 m-0">
          <NavbarItem className="p-0 m-0">
            <Button as={Link} color="secondary" to="#" variant="flat" className="p-0 m-0">
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="p-10 ">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="p-0 m-0">
              <Link className="w-full p-0 m-0" 
                to={item.route}
                size="lg"
                onClick={handleClick}
                >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
