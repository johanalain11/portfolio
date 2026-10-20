"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  NavbarLogo, 
  NavbarButton, 
  MobileNavHeader, 
  MobileNavToggle, 
  MobileNavMenu 
} from "@/components/ui/resizable-navbar";
import LocaleSwitcher from '@/components/LocaleSwitcher';

const NavbarComponent = () => {
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: t('about'),
      link: "#about",
    },
    {
      name: t('skills'),
      link: "#skills",
    },
    {
      name: t('experiences'),
      link: "#experiences",
    },
    {
      name: t('projects'),
      link: "#projects",
    },
    {
      name: t('contact'),
      link: "#contact",
    },
  ];

  return (
    <Navbar className="absolute fixed top-3 md:top-10">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-2">
          <NavbarButton href="#contact" variant="primary">
            {t('contactButton')}
          </NavbarButton>
          <LocaleSwitcher />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <LocaleSwitcher />
            <NavbarButton
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-50"
            >
              {t('contactButton')}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;