import React, { Component } from "react";
import { firestore, auth } from "../firebase";
import { collectIdsAndDocs } from "../utils";

import Authentication from "./Authentication";
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
    user: null,
  };

  unsubscribeFromFireStoren = null;
  unsubscribeFromAuth = null;

  async componentDidMount() {
    this.unsubscribeFromFireStore = firestore
      .collection("posts")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map(collectIdsAndDocs);

        this.setState({ posts });
      });

    this.unsubscribeFromFireStore = auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  async componentWillUnmount() {
    this.unsubscribeFromFireStore();
    this.unsubscribeFromFireStore();
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
