import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import { Github, Instagram, Youtube, Linkedin, Moon, Sun } from "lucide-react";
import "./style.css";
import foto from "./img/cabeludo.png";

export function Home() {
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <div className="Card">
        <img className="foto" src={foto} alt="Zacarias" />
        <p>@bruno</p>

        <div className="Buttons">
          <div className="toggle-container" onClick={toggleTheme}>
            <div
              className={`toggle-switch ${theme === "dark" ? "dark" : "light"}`}
            >
              {theme === "dark" ? (
                <Moon size={20} color="black" />
              ) : (
                <Sun size={20} color="black" />
              )}
            </div>
          </div>
          <button>Inscreva-se no NLW</button>
          <button>Baixe meu E-BOOK</button>
          <button>Veja meu portifólio</button>
          <button>Conheça o Exploer</button>
        </div>

        <div className="Social">
          <Github />
          <Instagram />
          <Youtube />
          <Linkedin />
        </div>
      </div>
    </>
  );
}
