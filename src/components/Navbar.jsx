import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem,  Button } from "@nextui-org/react";
import AcmeLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Projects",
    "Services",
  ];

  return (
    <div className="px-4">
        <Navbar  isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
          <img src={AcmeLogo} alt="Acme Logo" className="h-10" />
          {/* <p className="font-bold text-white">Prescom</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex "  justify="start">
        
          <div className="">
            <img src={AcmeLogo} alt="Acme Logo"  className="h-20" />
          </div>
          
         <div className=" flex gap-4">
         <NavbarItem>
           
           <Link color="foreground" to="/">
             Home
           </Link>
         </NavbarItem>
        <NavbarItem>
           
          <Link color="foreground" to="about-us">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="services" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="projects">
            Projects
          </Link>
        </NavbarItem>
         </div>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              // color={
              //   index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              // }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>


    </div>
  );
}
