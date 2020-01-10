import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"

const About = () => (
  <Layout>
    <article>
      <header>
        <h5 className="item-title">O nas</h5>
      </header>

      <section className="content-section">
        PGD Štangarske Poljane je društvo I. kategorije, ki deluje na zahodnem delu občine Šmartno pri Litiji, kot sestavni del gasilske regije Ljubljana III. V GZ Šmartno pri Litiji je poleg operativnih še 7 društev I. kategorije in osrednje društvo III. kategorije.
      </section>
      <br />
      <p className="content-section section-title">Na našem območju pokrivamo naselja:</p>
      <br />

      <section className="content-section">

        <div class="section-row">
          <div class="section-column">
            <p>Vir: statistični urad RS 2019	</p>
            <p>Dragovšek</p>
          </div>
          <div class="section-column">
            <p>Površina [km2]</p>
            <p>1.75</p>
          </div>
          <div class="section-column">
            <p>prebivalci s stalnim naslovom [2019]</p>
            <p>66</p>
          </div>
        </div>

        <div class="section-grid">
          <div class="section-row">
            <div class="section-column">
              <p>Column 3</p>
              <p>Some text..</p>
            </div>
            <div class="section-column">
              <p>Column 4</p>
              <p>Some text..</p>
            </div>
            <div class="section-column">
              <p>Column 5</p>
              <p>Some text..</p>
            </div>
          </div>
          <div class="section-row">
            <div class="section-column">
              <p>Column 3</p>
              <p>Some text..</p>
            </div>
            <div class="section-column">
              <p>Column 4</p>
              <p>Some text..</p>
            </div>
            <div class="section-column">
              <p>Column 2</p>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        Naše operativno območje je podeželsko, hribovito in v večjem delu poraščeno z gozdom. Kako razgiban je teren pove podatek o najnižji nadmorski višini 275 m in najvišjem vrhu 716 m. Sestavljajo ga razložena naselja in osamljene kmetije do katerih vodijo ozke makedamske poti. Slabo je tudi vodovodno omrežje, saj imata samo 2 naselji javno vodovodno omrežje z ustreznimi hidrati. Ustrezno hidrantno omrežje ima poleg le še eno naselje z zasebnim vodovodnim omrežjem. Težava je, da ravno naselja, ki so na robu našega požarnega območja in so najbolj oddaljena od ustreznih vodnih virov, nimajo hidrantnega omrežja. Požarna žaščita je tako prepuščena iznajdljivosti prebivalcev. Žal v primeru večjega požara na takih območjih, celotna GZ nima dovolj gasilnih sredstev za obvladovanje.
      </section>
      <br />
      <section className="content-section">
        Kot društvo I. kategorije 15 operativno opremljenih in usposobljenih gasilcev razpolaga z manjšim gasilskim vozilom z vodo GVV-1. Izobraževanje in usposabljanje naših članov poteka v organizaciji Gasilske zveze Slovenije in Gasilske zveze Šmartno pri Litiji.
      </section>
      <br />
      <section className="content-section">
        Operativci se večinoma spopadamo s požari dimnikov, stanovanjskih in gospodarskih poslopij, delavnic in naravnimi nesrečami kot so povodnje, vetrolomi in žled. Velikokrat pa posredujemo tudi ob podrtem drevju na cesto.
        </section>
      <br />
      <section className="content-section">
        Mejimo na PGD Prežganje (GZ Ljubljana), PGD Metnaj (GZ Ivančna Gorica), PGD Vintarjevec in PGD Zavrstnik (GZ Šmartno pri Litiji) ter PGD Jevnica in PGD Litija (GZ Litija).
      </section>
      <br />
      <section className="content-section">
        Kljub pomanjkanju sredstev se borimo naprej, ker nas ženeta dobrota in sočutje do sočloveka.
       </section>
    </article>
    <hr />
  </Layout>
)

export default About
