import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {

  render() {

    const {name, image} = this.props.anime;

    return (
      <>
        <div className="anime-card">
          <img src={image} alt="anime-name" />
          <p>{name}</p>
        </div>
      </>
    );
  }
}

export default AnimeCard;
