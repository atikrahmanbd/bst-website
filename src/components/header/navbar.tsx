"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassContainer } from "@/components/ui/glass-container";
import { ThemeSwitch } from "@/components/theme-switch";
import { HoverBorderGradientButton } from "@/components/ui/buttons";

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
    const element = menuRefs.current[label];
    if (element) {
      const rect = element.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom - 1,
        left: rect.left,
        width: 700,
      });
    }
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "Domains",
      href: "/domains",
      hasDropdown: false,
    },
    {
      label: "Web Hosting",
      href: "/web-hosting",
      hasDropdown: false,
    },
    {
      label: "More Services",
      href: "/services",
      hasDropdown: true,
      dropdownSections: [
        {
          title: "Web Design",
          items: [
            {
              label: "Custom UI/UX Design",
              href: "/services/web-design/ui-ux",
              description: "Modern, User-Focused Interface Design",
            },
            {
              label: "WordPress Development",
              href: "/services/web-design/wordpress",
              description: "Powerful CMS-Based Websites",
            },
            {
              label: "Shopify E-Commerce",
              href: "/services/web-design/shopify",
              description: "Complete Online Store Solutions",
            },
          ],
        },
        {
          title: "Software & Apps",
          items: [
            {
              label: "Software",
              href: "/services/software-development",
              description: "Custom Software Solutions Tailored For You",
            },
            {
              label: "Mobile App",
              href: "/services/mobile-apps",
              description: "Native And Cross-Platform Mobile Apps",
            },
          ],
        },
        {
          title: "IT & Marketing",
          items: [
            {
              label: "IT & Custom Solutions",
              href: "/services/it-solutions",
              description: "Cloud Infrastructure And Database Management",
            },
            {
              label: "SEO & Marketing",
              href: "/services/seo-marketing",
              description: "Boost Your Online Presence Strategically",
            },
          ],
        },
      ],
      dropdownFooter: {
        label: "View All Services",
        href: "/services",
      },
    },
    {
      label: "About Us",
      href: "/about-us",
      hasDropdown: false,
    },
    // {
    //   label: "Contact Us",
    //   href: "/contact-us",
    //   hasDropdown: false,
    // },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/bst-logo-for-light.svg"
            alt="B.S.T."
            width={100}
            height={25}
            className="h-6 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logos/bst-logo-for-dark.svg"
            alt="B.S.T."
            width={100}
            height={25}
            className="hidden h-6 w-auto dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <div
              key={item.label}
              ref={(el) => {
                if (item.hasDropdown) {
                  menuRefs.current[item.label] = el;
                }
              }}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && handleMouseEnter(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button
                  className={`flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground cursor-pointer ${
                    pathname?.startsWith(item.href)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`rounded-sm px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground cursor-pointer ${
                    pathname === item.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <Link href="/login" className="hidden md:block">
            <HoverBorderGradientButton
              shape="pill"
              size="sm"
              className="px-5 py-1.75 text-[0.8125rem]"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </HoverBorderGradientButton>
          </Link>
        </div>
      </div>

      {/* Portal For Dropdown Menu */}
      {mounted &&
        activeDropdown &&
        dropdownPosition &&
        createPortal(
          <AnimatePresence>
            {menuItems.map(
              (item) =>
                item.hasDropdown &&
                activeDropdown === item.label && (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed z-50 pt-[15px]"
                    style={{
                      top: `${dropdownPosition.top}px`,
                      left: `${dropdownPosition.left}px`,
                      width: `${dropdownPosition.width}px`,
                    }}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Caret Arrow Pointing Up */}
                    <div className="absolute top-[8px] left-10 w-4 h-4 bg-background border-l border-t border-border rotate-45 transform"></div>
                    <GlassContainer>
                      <div className="grid grid-cols-3 pb-4 divide-x divide-border">
                        {item.dropdownSections?.map((section) => (
                          <div
                            key={section.title}
                            className="px-4 first:pl-0 last:pr-0"
                          >
                            <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">
                              {section.title}
                            </h3>
                            <div className="space-y-1">
                              {section.items.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className="block rounded-md px-3 py-2 transition-colors hover:bg-muted cursor-pointer"
                                >
                                  <div className="text-sm font-medium text-foreground">
                                    {dropdownItem.label}
                                  </div>
                                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                    {dropdownItem.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {item.dropdownFooter && (
                        <div className="border-t border-border bg-muted/30 px-2 py-3 -mx-4 -mb-4">
                          <Link
                            href={item.dropdownFooter.href}
                            className="flex items-center justify-between text-sm font-medium text-foreground transition-colors hover:text-primary px-2"
                          >
                            <span>{item.dropdownFooter.label}</span>
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </Link>
                        </div>
                      )}
                    </GlassContainer>
                  </motion.div>
                )
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
