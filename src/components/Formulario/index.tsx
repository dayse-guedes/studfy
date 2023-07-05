import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
           Adicione um novo estudo
          </label>
          <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que gostaria de estudar"
          required
          />
        </div>
        <div className={style.inputContainer}>
        <label htmlFor="tempo">
         Tempo
        </label>
          <input
          type="time"
          step= "1"
          name="tempo"
          id="tempo"
          min= "00:00:00"
          max= "01:30:00"
          required
          />
        </div>
        <Botao
        texto= "Adicionar"
        />
      </form>
    );
  }
}
export default Formulario;