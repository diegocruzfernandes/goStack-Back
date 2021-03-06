import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import './styles.css';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowDownLeft />
          Voltar para Home
        </Link>
      </header>
      <form>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name"/>
          </div>

          <div className="field-group">

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email"/>
            </div>

            <div className="field">
              <label htmlFor="Whatsapp">Whatsapp</label>
              <input type="text" name="Whatsapp" id="Whatsapp"/>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereços</h2>
            <span>Selecione o endereços no mapa</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>  

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
          
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/img/oleo.svg" alt="" />
              <span>Óleo de cozinha</span>
            </li>


          </ul>
        </fieldset>

      </form>
    </div>
  )
}

export default CreatePoint;