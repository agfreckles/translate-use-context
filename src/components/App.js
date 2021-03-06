import React from "react";
import LanguageContext from "./contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = (lang) => {
    this.setState({ language: lang });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language :
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
