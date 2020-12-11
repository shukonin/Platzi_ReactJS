import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Badges.css";
import BadgesList from "../Components/BadgesList";
import PageLoading from "../Components/PageLoading";
import PageError from "../Components/PageError";
import confLogo from "../Images/badge-header.svg";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="conf-logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges_container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
