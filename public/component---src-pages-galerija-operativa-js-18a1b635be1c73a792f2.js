(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QbI4:function(e,a,i){"use strict";i.r(a);var t=i("dI71"),h=i("q1tI"),m=i.n(h),s=i("Bl7J"),g=i("/xAQ"),r=function(e){function a(a){var i;(i=e.call(this,a)||this).state={images:"",thumbs:""};var t=[],h=[];return i.props.data.galerijaOperativaImages.edges.forEach((function(e){var a;(a=e.node.frontmatter).image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")||t.push(a.image1),a.image1.childImageSharp.fixed.height>1&&a.image1.childImageSharp.fixed.width>1&&h.push(a.image1),a.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")||t.push(a.image2),a.image2.childImageSharp.fixed.height>1&&a.image2.childImageSharp.fixed.width>1&&h.push(a.image2),a.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")||t.push(a.image3),a.image3.childImageSharp.fixed.height>1&&a.image3.childImageSharp.fixed.width>1&&h.push(a.image3),a.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")||t.push(a.image4),a.image4.childImageSharp.fixed.height>1&&a.image4.childImageSharp.fixed.width>1&&h.push(a.image4),a.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")||t.push(a.image5),a.image5.childImageSharp.fixed.height>1&&a.image5.childImageSharp.fixed.width>1&&h.push(a.image5)})),i.state={images:t,thumbs:h},i}return Object(t.a)(a,e),a.prototype.render=function(){return void 0===this.state.images||null==this.state.images||0===this.state.images.length?m.a.createElement(s.a,null,m.a.createElement("h5",{className:"item-title"},"Galerija operativa"),m.a.createElement("div",null,"Ni slik")):m.a.createElement(s.a,null,m.a.createElement("h5",{className:"item-title"},"Galerija operativa"),m.a.createElement("div",{className:"gallery-content"},m.a.createElement(g.a,{images:this.state.images,thumbs:this.state.thumbs})))},a}(h.Component);a.default=r}}]);
//# sourceMappingURL=component---src-pages-galerija-operativa-js-18a1b635be1c73a792f2.js.map