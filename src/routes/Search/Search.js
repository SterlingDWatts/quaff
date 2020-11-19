import React, { Component } from "react";
import { ExploreSquare } from "../../components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/pro-regular-svg-icons";
import SearchList from "./search-list";
import "./Search.css";

class Search extends Component {
  state = {
    search: {
      value: "",
      touched: false,
    },
    searchTerms: [],
    ascending: true,
  };

  componentDidMount() {
    const sortedTerms = SearchList.sort((a, b) => {
      if (a.term < b.term) {
        return -1;
      } else if (a.term > b.term) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      searchTerms: sortedTerms,
    });
  }

  renderTerms = () => {
    const filteredTerms = this.state.searchTerms.filter((term) => {
      const lowerCaseTerm = term.term.toLowerCase();
      const lowerCaseSearch = this.state.search.value.toLowerCase();
      return lowerCaseTerm.includes(lowerCaseSearch);
    });
    const terms = filteredTerms.map((term, idx) => {
      return (
        <div className="Search--term" key={idx}>
          <div>{term.term}</div>
        </div>
      );
    });
    return terms;
  };

  handleChangeSearch = (search) => {
    this.setState({
      search: {
        value: search,
        touched: true,
      },
    });
  };

  handleChangeSortOrder = () => {
    this.setState({
      searchTerms: this.state.searchTerms.reverse(),
      ascending: !this.state.ascending,
    });
  };

  handleClearSearch = () => {
    this.setState({
      search: {
        value: "",
      },
    });
  };

  render() {
    return (
      <div className="Search">
        <ExploreSquare>
          <div className="Search__searchbar_container">
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => this.handleChangeSearch(e.target.value)}
              value={this.state.search.value}
            />
            <button type="button" onClick={(e) => this.handleChangeSortOrder()}>
              A
              <FontAwesomeIcon
                icon={this.state.ascending ? faArrowRight : faArrowLeft}
              />
              Z
            </button>
            <FontAwesomeIcon icon={faSearch} />
            <button type="button" className="Search--clear-button">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={(e) => this.handleClearSearch()}
              />
            </button>
          </div>
          {this.renderTerms()}
        </ExploreSquare>
      </div>
    );
  }
}

export default Search;
