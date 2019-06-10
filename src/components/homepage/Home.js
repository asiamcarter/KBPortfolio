import React from "react";
import "./Home.css";
export default class Home extends React.Component {
  // Get the modal
  test = () => {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };
  };
  render() {
    return (
      <>
        <img
          id="myImg"
          src="https://www.w3schools.com/howto/img_snow.jpg"
          alt="Snow"
          onClick={this.test}
          // style="width:100%;max-width:300px"
        />

        {/* <!-- The Modal --> */}
        <div id="myModal" className="modal">
          {/* <!-- The Close Button --> */}
          <span className="close">&times;</span>

          {/* <!-- Modal Content (The Image) --> */}
          <img className="modal-content" id="img01" />

          {/* <!-- Modal Caption (Image Text) --> */}
          <div id="caption">Test Test</div>
        </div>
        {/* {this.test()} */}
      </>
    );
  }
}
