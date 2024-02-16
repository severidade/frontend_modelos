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
        Modelo de Componentes | Uso de Props | Primeiros passos com Typescript
      </p>
    </header>
  );
}

export default Header;
