function Intro() {
  return (
    <section>
      <div>
        <h1>Один клик и работа в кармане</h1>
        <div className="intro__search">
          <div className="intro__search-content">
            <input type="text" placeholder="Должность или компания" />
            <input type="text" placeholder="Город, Страна" />
          </div>
          <button>Поиск</button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
