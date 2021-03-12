import React from 'react';
import '../styles/components/formu.css'
import phone from './phone.png'

// import { Container } from './styles';

const Formu: React.FC = () => {
  return (
    <>
      {/* IMAGEM IPHONE */}
      <section className="images">
        <img src={phone} alt="celular"/>
      </section>
      {/* ---------IMAGEM IPHONE--------- */}

      <h1>Create Account</h1>
      <main>
        
        {/* CADASTRO */}
        <h1>Register</h1>
        <form action="">
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" id="email" name="email" placeholder="example@email.com"/>
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" name="password" placeholder="Password"/>
          </label>
          <input type="submit" value="Sign Up"/>
        </form>
        {/* ---------CADASTRO--------- */}
        

        {/* REDES SOCIAIS */}

        <div className="alternative">
          <span>OR</span>
        </div>

        <div className="social-media">
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        {/* ---------REDES SOCIAIS--------- */}

        

      </main>

      

    </>
  );
}

export default Formu;