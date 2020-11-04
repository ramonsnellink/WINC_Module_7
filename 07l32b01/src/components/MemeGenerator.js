import React from "react";

class MemeGenerator extends React.Component {
  state = {
    allMemeImgs: [],
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      this.setState({ allMemeImgs: json.data.memes });
      console.log(this.state.allMemeImgs);

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */

  handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
    this.setState({ randomImage: this.state.allMemeImgs[randomNumber].url });
  };

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
