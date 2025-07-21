"use client";

import { useState, useEffect, useCallback } from "react";

// Offset to trigger the active state slightly before the section top hits the viewport top
const OFFSET = 150;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let newActiveSection = "";

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const sectionTop = element.offsetTop;
        if (scrollY >= sectionTop - OFFSET) {
          newActiveSection = id;
        }
      }
    });

     // If scrolled to the very bottom, force the last section to be active
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 2) {
      newActiveSection = sectionIds[sectionIds.length - 1];
    }
    
    setActiveSection(newActiveSection);
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}

