import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { ContainerAboutUs, ContainerFlex } from './style';
import { AiOutlineHeart } from "react-icons/ai";
import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { AiOutlineThunderbolt } from "react-icons/ai"

export const AboutUs = () => {
    return(<>
        <Header />
        <ContainerAboutUs>
            <section>
                <h2 className="title-page">Conheça nossa razão de existir</h2>

                <ContainerFlex>
                    <AiOutlineThunderbolt size="42px" color="#41b57d"/>
                    <h2>Nossa Missão</h2>
                    <p>Tornar o emprego acessivel e inclusivopara a maioria das pessoas pcds</p>
                </ContainerFlex>

                <ContainerFlex>
                    <BsEmojiHeartEyesFill size="42px" color="#41b57d"/>
                    <h2>Nossa Visão</h2>
                    <p>A nossa visão é ser o maior e melhor site de 
                        cadastro de currículos PcD da América Latina, fornecendo aos usuários 
                        mais opções e acessibilidade na hora de utilizar a plataforma.</p>
                </ContainerFlex>

                <ContainerFlex>
                    <AiOutlineHeart size="42px" color="#41b57d"/>
                    <h2>Nossos Valores</h2>
                    <p>Facilidade, privacidade, 
                        autonomia e respeito com os usuários e parceiros</p>
                </ContainerFlex>
            </section>
        </ContainerAboutUs>
        <Footer />
    </>)
};