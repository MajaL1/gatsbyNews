import React, { Component } from 'react'
import { Link, graphql, Image, StaticQuery, useStaticQuery } from "gatsby"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"

let currentNews;
let news2019;
let news2018;
let news2017;
//let stickyNews;

class News extends Component {
  
  constructor (props) {
    

    super(props)
    currentNews = props.news2019;
    news2019 = props.news2019;
    news2018 = props.news2018;
    news2017 = props.news2017;
    //stickyNews = props.stickyNews;

    this.setState(currentNews)

    console.log("\n\n 111 news2019:  ", news2019);
    console.log("\n\n 111 news2018:  ", news2018);
    console.log("\n\n 111 news2017:  ", news2017);
    
    
    
    this.onChange = this.onChange.bind(this)
  }

  myCallback = (selectedYear) => {
    console.log("selected:: ", selectedYear);
  }

  onChange (option) {
    console.log('55 You selected ', option.label)
    //this.setState({option})
    console.log("\n\n 222 news2019:  ", news2019);
    console.log("\n\n 222 news2018:  ", news2018);
    console.log("\n\n 222 news2017:  ", news2017);

    this.setState({
      [currentNews]: currentNews
    });

    
    /** todo : switch cselected option * */

    switch(option.label) {
      case '2019':
        currentNews = news2019
        console.log("selected :2019");
        break
      case '2018':
        currentNews = news2018
        console.log("selected :2018");
        break
      case '2017':
        currentNews = news2017
        console.log("selected :2017");
        break
    }
    console.log("currentNews: ", currentNews);
    this.setState({
      [currentNews]: currentNews
    });
    // update state for component
  
  }

  render() { 
    
    return(
    
      <div style={{ marginBottom: `1.45rem` }}>
        <DropdownMenu onChange={this.onChange}/>
        <h5 className="item-title">Zadnje novice</h5>

        {currentNews.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <div key={node.fields.slug}>
              <article
                className="news-item content-article"
                key={node.fields.slug}
              >
                <section className="content-section">
                  <header className="news-item-header">
                    <small className="news-item-date">
                      <FaCalendarAlt />
                      {" Objavljeno: "}
                      {node.frontmatter.date}

                      {" v "}
                      {category}
                    </small>
                    <h5>
                      <Link
                        className="news-item-title"
                        style={{ boxShadow: `none` }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h5>
                    <p className="news-item-intro">{node.frontmatter.intro}</p>
                    <hr />
                    <Link className="news-item-link" to={node.fields.slug}>
                      {"Preberi celotni prispevek >> "}
                    </Link>
                  </header>
                </section>
              </article>
            </div>
          )
        })}
      </div>
  )
}
}

export default News

