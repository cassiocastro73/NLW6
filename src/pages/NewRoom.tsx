import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export default function NewRoom(){
    return(
        <div id= "page-auth">
            <aside>
                <img src= {illustrationImg} alt= "Ilustração simbolizando perguntas e repostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input type="text"
                                placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                        <p>
                            Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
}