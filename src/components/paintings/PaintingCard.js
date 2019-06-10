import React, { Component } from "react";

export default class PaintingCard extends Component {
  state = {
    slideIndex: 1
  };

  plusSlides = n => {
    this.setState({
      slideIndex: +n
    });
  };

  currentSlide = n => {
    this.setState({
      slideIndex: n
    });
  };

  showSlides = n => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.setState({ slideIndex: 1 });
    }
    if (n < 1) {
      this.setState({ slideIndex: slides.length });
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  };
  render() {
    console.log(this.props);
    return (
      //   <div class="slideshow-container">
      //     <div class="mySlides fade">
      //       <div class="numbertext">1 / 3</div>
      //       <img src={this.props.painting.ImageURl} alt="painting" width="100%" />
      //       <div class="text">Caption Text</div>
      //     </div>
      //     <a className="prev" onClick={this.plusSlides(-1)}>
      //       &#10094;
      //     </a>
      //     <a className="next" onClick={this.plusSlides(1)}>
      //       &#10095;
      //     </a>
      //   </div>
      <></>
    );
  }
}
