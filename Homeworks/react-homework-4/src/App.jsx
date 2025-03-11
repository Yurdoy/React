import { useState } from "react";
import "./App.css";
import CityCard from "./components/CityCard";
import CitySelector from "./components/CitySelector";

const cities = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/9662754/pub_64526c19c6897452ab27e3be_64527937d9b05c0fc36cfb2e/scale_1200",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },

  {
    name: "Киото",
    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl:
      "https://wallpapers.com/images/hd/kyoto-fuji-san-view-dxo42w3pchmqmdrn.jpg",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },

  {
    name: "Осака",
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Osaka_Castle_03bs3200.jpg",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },

  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl: "https://voyagejapan.com/files/core/18_image.jpg",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },

  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl:
      "https://tourjapan.ru/upload/iblock/44e/44e6e2522df70cb80f85c3cf79fb55d1.jpg",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <>
      <CitySelector cities={cities} onSelectCity={setSelectedCity} />
      <CityCard city={selectedCity} />
    </>
  );
}

export default App;
