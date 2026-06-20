import './App.css'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '2.5rem', color: '#08060d' }}>
        About Me and IGEM
      </h1>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        I am Aadya Mishra and I am a rising junior at duPont Manual High School.
        A few things I like to do are play piano, basketball, code, and paint. I also
        like teaching others and volunteering at places.
      </p>

      <section style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc' }}>
        <h2 style={{ color: '#08060d' }}>
          Why I joined IGEM
        </h2>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#a1a1a1' }}>
          I didn't know about IGEM last year. This year, my carpool started talking about this club
          and their conversation got me interested in this. I want to gain a better understanding
          on topics biology related and want to improve my coding skills while participating in this competiton,
          therefore I joined!!
        </p>
      </section>

    </div>
  )
}

export default App