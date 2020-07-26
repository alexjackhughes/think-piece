import React, { Component } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";

import Posts from "./Posts";

class Application extends Component {
  state = {
    posts: [
      // {
      //   id: "1",
      //   title: "A Very Hot Take",
      //   content:
      //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
      //   user: {
      //     uid: "123",
      //     displayName: "Bill Murray",
      //     email: "billmurray@mailinator.com",
      //     photoURL: "https://www.fillmurray.com/300/300",
      //   },
      //   stars: 1,
      //   comments: 47,
      // },
    ],
  };

  async componentDidMount() {
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);

      this.setState({ posts });
    });
  }

  async componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
