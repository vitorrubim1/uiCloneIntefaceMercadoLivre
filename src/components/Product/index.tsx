import * as React from "react";

import tShirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        {/*parte branca*/}
        <Column>
          {" "}
          {/*coluna da esquerda*/}
          <Gallery>
            <img src={tShirtImage} alt="Foto de uma camiseta" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          {" "}
          {/*coluna da direita*/}
          {/* <ProductAction /> */}
          {/* <SellerInfo /> informações do vendedor */}
          {/*seção de garantia*/}
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida pelo vendedor</p>
        <p className="description">
          Receba o produto que está esperando ou devolveremos o seu dinheiro.
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição do produto</h2>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolorem
      quae! Enim at nulla dolor hic nesciunt consequuntur atque laudantium,
      voluptatibus expedita officiis adipisci aut velit deserunt voluptates sed
      minus.
      <br />
      <br />
      Itens inclusos: <br />
      - Sei lá mano <br />
      - Sei lá mano <br />
      - Sei lá mano <br />
      - Sei lá mano <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora
      voluptas, hic quam ipsa libero tempore repellendus distinctio dicta
      eligendi cupiditate numquam cum. Quisquam, error? Consequuntur placeat
      quos eius excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Error tempora voluptas, hic quam ipsa libero tempore repellendus
      distinctio dicta eligendi cupiditate numquam cum. Quisquam, error?
      Consequuntur placeat quos eius exceptur hic quam ipsa libero tempore repellendus
      distinctio dicta eligendi cupiditate numquam cum. Quisquam, error?
      Consequuntur placeat quos eius excepturi!
    </p>
  </Description>
);

export default Product;
