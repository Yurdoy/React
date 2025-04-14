import React from 'react';
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <h1 className={cls.title}>My Note App</h1>
    </header>
  );
};

export default Header;