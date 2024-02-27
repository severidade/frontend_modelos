type HeaderProps = {
  title: string;
};

function Header({ title } : HeaderProps) {
  return (
    <header>
      <h1 className="app_title">
        {' '}
        { title }
        {' '}
      </h1>
      <p className="app_sub_title">
        Componentes React | Uso de Props | Typescript
      </p>
    </header>
  );
}

export default Header;
