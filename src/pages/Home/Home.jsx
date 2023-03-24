import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Home</h1>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quidem mollitia architecto nostrum. Quasi beatae, omnis mollitia porro numquam
        officia praesentium asperiores laboriosam rem. Expedita similique quam, fugiat quibusdam repellendus praesentium incidunt veritatis dolorem quis dolor
        aliquam ex tempora cumque aspernatur blanditiis porro. Deserunt debitis labore unde sunt, omnis eveniet esse. Nobis illo corrupti repudiandae aut repellat
        tempora suscipit optio natus sapiente soluta nam asperiores, sunt hic tenetur non aliquam nostrum laborum ab! Deleniti, beatae dolores sit necessitatibus
        repellat explicabo iure numquam suscipit earum quasi hic error iste corporis quos distinctio recusandae! Porro ducimus accusantium temporibus hic, vitae
        blanditiis nesciunt!
      </p>
    </div>
  );
}
