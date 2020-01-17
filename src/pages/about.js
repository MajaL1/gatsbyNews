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
        PGD Štangarske Poljane je društvo I. kategorije, ki deluje na zahodnem
        delu občine Šmartno pri Litiji, kot sestavni del gasilske regije
        Ljubljana III. V GZ Šmartno pri Litiji je poleg operativnih še 7 društev
        I. kategorije in osrednje društvo III. kategorije.
      </section>
      <br />
      <p className="content-section section-title">
        Na našem območju pokrivamo naselja:
      </p>
      <br />

      <section className="content-section section-table">
        <div>
          <table>
            <tr>
              <th className="item-title">Vir: statistični urad RS 2019</th>
              <th className="item-title">Površina [km2]</th>
              <th className="item-title">
                prebivalci s stalnim naslovom [2019]
              </th>
            </tr>
            <tr>
              <td>Dragovšek</td>
              <td>1,75</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Gozd - Reka</td>
              <td>7,7</td>
              <td>144</td>
            </tr>
            <tr>
              <td>Jastrebnik</td>
              <td>1,63</td>
              <td>39</td>
            </tr>
            <tr>
              <td>Koške Poljane</td>
              <td>1,72</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Mala Štanga</td>
              <td>1,81</td>
              <td>32</td>
            </tr>
            <tr>
              <td>Račica</td>
              <td>2,37</td>
              <td>57</td>
            </tr>
            <tr>
              <td>Ščit</td>
              <td>2,78</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Štangarske Poljane</td>
              <td>0,89</td>
              <td>76</td>
            </tr>
            <tr>
              <td>Velika Štanga</td>
              <td>2,87</td>
              <td>117</td>
            </tr>
            <tr>
              <td>Volčja Jama</td>
              <td>2,9</td>
              <td>101</td>
            </tr>
            <tr>
              <td>
                <strong>Skupaj </strong>
              </td>
              <td>
                <strong>26,42</strong>
              </td>
              <td>
                <strong>668</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Kar predstavlja</strong>
              </td>
              <td>
                <strong>28%</strong>
              </td>
              <td>
                <strong>12%</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Celotna občina Šmartno pri Litiji</strong>
              </td>
              <td>
                <strong>94,97</strong>
              </td>
              <td>
                <strong>5.603</strong>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <br />
      <br />
      <section className="content-section">
        Naše operativno območje je podeželsko, hribovito in v večjem delu
        poraščeno z gozdom. Kako razgiban je teren pove podatek o najnižji
        nadmorski višini 275 m in najvišjem vrhu 716 m. Sestavljajo ga razložena
        naselja in osamljene kmetije do katerih vodijo ozke makedamske poti.
        Slabo je tudi vodovodno omrežje, saj imata samo 2 naselji javno
        vodovodno omrežje z ustreznimi hidrati. Ustrezno hidrantno omrežje ima
        poleg le še eno naselje z zasebnim vodovodnim omrežjem. Težava je, da
        ravno naselja, ki so na robu našega požarnega območja in so najbolj
        oddaljena od ustreznih vodnih virov, nimajo hidrantnega omrežja. Požarna
        žaščita je tako prepuščena iznajdljivosti prebivalcev. Žal v primeru
        večjega požara na takih območjih, celotna GZ nima dovolj gasilnih
        sredstev za obvladovanje.
      </section>
      <br />
      <section className="content-section">
        Kot društvo I. kategorije 15 operativno opremljenih in usposobljenih
        gasilcev razpolaga z manjšim gasilskim vozilom z vodo GVV-1.
        Izobraževanje in usposabljanje naših članov poteka v organizaciji
        Gasilske zveze Slovenije in Gasilske zveze Šmartno pri Litiji.
      </section>
      <br />
      <section className="content-section">
        Operativci se večinoma spopadamo s požari dimnikov, stanovanjskih in
        gospodarskih poslopij, delavnic in naravnimi nesrečami kot so povodnje,
        vetrolomi in žled. Velikokrat pa posredujemo tudi ob podrtem drevju na
        cesto.
      </section>
      <br />
      <section className="content-section">
        Mejimo na PGD Prežganje (GZ Ljubljana), PGD Metnaj (GZ Ivančna Gorica),
        PGD Vintarjevec in PGD Zavrstnik (GZ Šmartno pri Litiji) ter PGD Jevnica
        in PGD Litija (GZ Litija).
      </section>
      <br />
      <section className="content-section">
        Kljub pomanjkanju sredstev se borimo naprej, ker nas ženeta dobrota in
        sočutje do sočloveka.
      </section>
    </article>
    <hr />
  </Layout>
)

export default About
