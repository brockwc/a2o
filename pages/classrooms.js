import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../styles/Classrooms.module.scss'

export default function Classrooms() {
  return (
    <section>
      <Container>
        <Row>
          <Col><h1>Classrooms</h1></Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.classroomCard + ' bg-olive'}>
              <Image src="/acorns.jpg" />
              <h2 className="">Acorns</h2>
              <p className="age">(6 weeks - 12 months)</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt aliquam eum officiis incidunt dolorum, eaque fugiat vero, deleniti optio modi possimus! Animi, beatae. Perspiciatis asperiores consectetur tenetur pariatur vitae.</p>
            </div>
          </Col>
          <Col>
            <div className={styles.classroomCard + ' bg-light-orange'}>
              <Image src="/sprouts.jpg" />
              <h2 className="">Sprouts</h2>
              <p className="age">(1 - 2 years)</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit suscipit repellendus cum officia beatae assumenda maiores, sapiente molestias ab. Quos eaque ut molestias vel dolor nisi, quas cupiditate ipsum unde.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.classroomCard + ' bg-light-gray'}>
              <Image src="/saplings.jpg" />
              <h2 className="">Saplings</h2>
              <p className="age">(2 - 3 years)</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim maxime, ea hic velit recusandae magni omnis nisi aliquam minima, quam perferendis esse amet! Totam placeat aliquam quod. Magnam, enim?</p>
            </div>
          </Col>
          <Col>
            <div className={styles.classroomCard + ' bg-light-olive'}>
              <Image src="/oaks.jpg" />
              <h2 className="">Oaks</h2>
              <p className="age">(3 years - high school)</p>
              <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quidem ratione mollitia eligendi exercitationem eaque rerum fugit eius aperiam ipsum, hic excepturi dignissimos, obcaecati repellat blanditiis, expedita sed. Fugiat, velit?</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
