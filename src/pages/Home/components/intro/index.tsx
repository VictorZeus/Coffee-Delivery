import { IntroContainer, IntroContent } from "./styles";
import introImg from "../../../../assets/Imagem-Intro.png"

export function Intro() {
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        
                    </section>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}