import Footer from "@/components/Footer";
import "./globals.css";
import Dashboard from "@/components/Dashboard";
import Profile from "@/components/Profile";
import Sales from "@/components/Sales";
import { Fragment } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 78
  },
  {
    id: 2,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 72
  },
  {
    id: 3,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 64
  },
  {
    id: 4,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 32
  },
  {
    id: 5,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 51
  },
  {
    id: 6,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    score: 44
  },
]

const Home = () => {
  return (
    <Fragment>
      <main className="container">
        <Dashboard />
        <Sales userData={DUMMY_DATA} />
        <Profile userData={DUMMY_DATA} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
