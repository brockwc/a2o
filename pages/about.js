import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <>
      <section 
        className='hero'
        style={{
          backgroundImage: `url('/house1.jpg')`,
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Mission</h1>
              <p>Acorn to Oak Nursery and Preschool strives to create a welcoming and accepting community for children that inspires a persistent love of learning, enriches the imagination, and brings nature into the rhythm of daily life.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about">
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
              <p>Acorn to Oak is a Sacramento-based nursery and preschool designed for children ages 3 months to 5 years. Our philosophy draws inspiration from the beauty and nature of Waldorf, the emergent curriculum of Reggio Emilia, and the child-focused learning of Montessori.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button>Submit Your Email</button>
              <button>Classrooms</button>
            </Col>
          </Row>
          <Row>
            <Col>
                <Image 
                  src="/founders.png" 
                />
                <h2>Directors</h2>
                <p>Francesca and Isobel are sisters who grew up in the Sacramento area and have always had a special place in their hearts for the community. Both Isobel and Francesca share a passion for early childhood education and are fully qualified as infant and preschool teachers as well as directors. They are also working towards a masters degree in Human Development with an emphasis on Early Childhood Education to add to their multiple other degrees.</p>
                <p>Growing up, they watched their mother and her business partner run multiple child care centers across Northern California, providing them with the opportunity to experience high-quality child care first-hand. As Sacramento experiences a severe shortage of high-quality child care, Francesca and Isobel are excited to use their experience to create a new space for the children of this community, including their own.</p>
            </Col>
            <Col>
              <Image src="/sue.png" />
              <Image src="/shelly.png" />
              <h2>Board</h2>
              <p>Sue Leto Cole and Shelly Bokman are experts in the Child Development field. They both have their bachelor's and master’s degrees in Child Development. Together, they have owned and operated a number of child care centers in Northern California for over 30 years.</p>
              <p>Their first center was established in 1984 as the first center specializing in infant care in the Bay Area. Together, they continue to operate a well-known center in the Bay Area called Early Horizons. Additionally, Sue and Shelly started Sacramento Parent Magazine, a monthly resource for families living in the greater Sacramento area. Shelly founded and runs Blossom Place, a home for at-risk young women and children.</p>
              <p>Sue and Shelly are thrilled to be a part of the Acorn to Oak team, and plan to use their years of experience to make Acorn to Oak the best place for children to learn and grow.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Image src="/secret_garden.jpg" />
            </Col>
            <Col>
              <Image src="/shed.jpg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
