import { ShoppingCart } from "phosphor-react"
import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText, TitleText } from "../../../../components/Typography"
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"

export function CoffeeCard() {
    return(
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1675036800&Signature=Lflf94esIQWRwn-9NXUlEuZdcvsCFGl7jbuvUGlHie3X9dTNhTFlyzfSeF2dWsYW8voVh2wHiFpg2FfsunMk0liShCb2wmHPj4004Uvvmj~6xV~oV9XyMnRM~D5JawlsF~ihOsQaegoQRLNLGd~rXRt~2nmIzuk~bSQiOFUNYHrg7PbMboHr~U9r5yJrj3A8aZFaiRcBZn~Rtkp27dA0esLP32fPclZ0GW3HqyI2udsxdNf7g5IRV~~5tjVFgnzzU6KC4wg0MlKVJV~ld3Ms~XXvQ7~j74jI9UtLLUm7h7ImJRCr12C9YSTRrVYbx9HgCmNFN5RDtMK~AIJyHfhl8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        
        <Tags>
            <span>Tradicional</span>
            <span>Com leite</span>
        </Tags>

        <Name>Expresso Tradicional</Name>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>

        <CardFooter>
            <div>
                <RegularText size="s">R$</RegularText>
                <TitleText size="m" color="text" as="strong"> 9,90</TitleText>
            </div>

            <AddCartWrapper>
                <QuantityInput />

                <button>
                    <ShoppingCart weight="fill" size={22}/>
                </button>

            </AddCartWrapper>
        </CardFooter>
        </CoffeeCardContainer>
    )
}