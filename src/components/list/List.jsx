import "./list.scss";
import ListItem from "../listItem/ListItem";

function List() {
  return (
    <div className="list">
      <span className="listTitle">Naše Igre</span>
      <div className="container">
        <ListItem
          name="Lucky 6"
          game="Tiket je dobitan ukoliko igrač POGODI SVIH 6 brojeva. Kvota zavisi od toga koja je po redu izvučena ŠESTA kuglica sa odabranim brojem."
          image="slika1"
        />
        <ListItem
          name="Trke Pasa"
          game="Tiket je dobitan ukoliko igrač POGODI POBEDNIKA TRKE. Kvota zavisi od toga koji je pas po redu u tabeli po šansi. Bolji pas => manja kvota."
          image="slika2"
        />
        <ListItem
          name="Uskoro"
          game="Priprema se i nova zanimljiva igra koja će vam se sigurno svideti. Njen izlazak bi trebalo da se desi veoma uskoro."
          image="slika3"
        />
      </div>
    </div>
  );
}

export default List;
