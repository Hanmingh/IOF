import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/IOFLogo_wb.jpg",
    alt: "IOF",
    title: "IOF",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Our Service", url: "/services" },
    { title: "Contact Us", url: "/contact" },
    { title: "Career", url: "/career" },
  ],
}: NavbarProps) => {
  return (
    <section className="sticky top-0 z-40 border-b border-[#a62a1e] bg-[#cc3525] text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Desktop Menu */}
        <nav className="hidden h-16 items-center lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: Logo only */}
          <div className="flex items-center justify-center">
            <Link to={logo.url} className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}${logo.src.replace(/^\//,'')}`} className="max-h-17 rounded border-2 border-[#cc3525]" alt={logo.alt} />
            </Link>
          </div>
          {/* Center: Navigation */}
          <div className="flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="justify-center">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Right: Spacer for symmetry */}
          <div className="flex items-center justify-center" />
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}${logo.src.replace(/^\//,'')}`}
                className="max-h-8 rounded border-2 border-[#a62a1e]"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-white/40 text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 hover:border-white/60">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img
                        src={`${import.meta.env.BASE_URL}${logo.src.replace(/^\//,'')}`}
                        className="max-h-8 rounded border-2 border-[#a62a1e]"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-2">
                  {menu.map((item) => {
                    const isInternal = item.url.startsWith("/")
                    return isInternal ? (
                      <NavLink key={item.title} to={item.url} className="text-base font-medium text-foreground/90 hover:underline">
                        {item.title}
                      </NavLink>
                    ) : (
                      <a key={item.title} href={item.url} className="text-base font-medium text-foreground/90 hover:underline">
                        {item.title}
                      </a>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  const isInternal = item.url.startsWith("/");
  return (
    <NavigationMenuItem key={item.title}>
      {isInternal ? (
        <NavLink
          to={item.url}
          className={({ isActive }) =>
            `group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-[14px] md:text-sm font-medium transition-colors text-white/90 hover:text-white ${isActive ? 'text-white underline underline-offset-8 decoration-white/80' : ''}`
          }
        >
          {item.title}
        </NavLink>
      ) : (
        <NavigationMenuLink
          href={item.url}
          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-[14px] md:text-sm font-medium transition-colors text-white/90 hover:text-white"
        >
          {item.title}
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
};

// Mobile simple list (no submenus)

export { Navbar };