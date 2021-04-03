import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div 
        className={styles.hero}
        style={{
          backgroundImage: `url('/sign.jpg')`
        }}
      >
        <div className={styles.welcome}>
          <h1>Welcome</h1>
          <p>Acorn to Oak is a Sacramento-based nursery and preschool designed for children ages 3 months to 5 years. We are in the process of designing and renovating a two-story building in the heart of Midtown. Our designs include small classrooms, a nature-focused yard, a stunning indoor play courtyard, and brand new state-of-the-art facilities.</p>
          <p>Fill out the form below to be kept in the loop about our progress and be notified when our waitlist opens to the public. </p>
          <p>Our projected opening date is June 1st, 2021.</p>
          <a className={styles.button} href="/contact">Submit Your Email</a>
        </div>
      </div>
    </div>
  )
}
