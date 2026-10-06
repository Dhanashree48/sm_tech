'use client';

import Link from 'next/link';
import { useState } from 'react';
import { headerMenu } from './CpHeader_mockdata';

export default function CpHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={'header'}>
      <div className={'container'}>

        {/* Logo */}
        <Link href="/" className={'logo'}>
          <span>MY</span>
          <strong>COMPANY</strong>
        </Link>

        {/* Desktop Navigation */}
        <nav className={'navigation'}>
          <ul>
            {headerMenu.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}