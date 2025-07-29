"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Home, User, Settings, Mail, Info, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Navigation Menu Components
interface NavigationMenuProps {
  className?: string
  children: React.ReactNode
}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
    </nav>
  )
)
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      {...props}
    />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props} />
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
    </button>
  )
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"

// Main Navigation Component
interface MenuItem {
  title: string
  url: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

interface NavigationProps {
  logo?: {
    url: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    login: { text: string; url: string }
    signup: { text: string; url: string }
  }
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({
  logo = { url: "#", title: "AI SaaS" },
  menu = [
    { title: "Home", url: "#hero", icon: <Home className="w-4 h-4" /> },
    { title: "Features", url: "#features", icon: <Settings className="w-4 h-4" /> },
    { title: "Pricing", url: "#pricing", icon: <User className="w-4 h-4" /> },
    { title: "Contact", url: "#contact", icon: <Mail className="w-4 h-4" /> }
  ],
  auth = {
    login: { text: "Sign In", url: "#" },
    signup: { text: "Get Started", url: "#" }
  },
  className
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: 0,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)"
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={logo.url} className="text-xl font-bold text-foreground">
                {logo.title}
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.items ? (
                        <div className="relative">
                          <NavigationMenuTrigger
                            onMouseEnter={() => setOpenDropdown(item.title)}
                            onMouseLeave={() => setOpenDropdown(null)}
                            className="flex items-center space-x-2"
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </NavigationMenuTrigger>
                          <AnimatePresence>
                            {openDropdown === item.title && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg"
                                onMouseEnter={() => setOpenDropdown(item.title)}
                                onMouseLeave={() => setOpenDropdown(null)}
                              >
                                {item.items.map((subItem) => (
                                  <NavigationMenuLink
                                    key={subItem.title}
                                    href={subItem.url}
                                    onClick={(e) => handleSmoothScroll(e, subItem.url)}
                                    className="block px-4 py-2 text-sm hover:bg-accent"
                                  >
                                    {subItem.title}
                                  </NavigationMenuLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div
                          onMouseEnter={() => setHoveredItem(item.title)}
                          onMouseLeave={() => setHoveredItem(null)}
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <NavigationMenuLink
                            href={item.url}
                            onClick={(e) => handleSmoothScroll(e, item.url)}
                            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </NavigationMenuLink>
                          {hoveredItem === item.title && (
                            <motion.div
                              layoutId="navbar-hover"
                              className="absolute inset-0 bg-accent rounded-md -z-10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </motion.div>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <a href={auth.login.url}>{auth.login.text}</a>
              </Button>
              <Button variant="hero" size="sm">
                <a href={auth.signup.url}>{auth.signup.text}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-semibold">{logo.title}</span>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="p-4 space-y-4">
                {menu.map((item) => (
                  <div key={item.title}>
                    <a
                      href={item.url}
                      onClick={(e) => handleSmoothScroll(e, item.url)}
                      className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </a>
                    {item.items && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.url}
                            onClick={(e) => handleSmoothScroll(e, subItem.url)}
                            className="block p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button variant="outline" className="w-full">
                    <a href={auth.login.url}>{auth.login.text}</a>
                  </Button>
                  <Button variant="hero" className="w-full">
                    <a href={auth.signup.url}>{auth.signup.text}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation