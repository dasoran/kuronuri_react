import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      templateData: [
        "試合を終えて家路へ向かうサッカー部員達",
        "黒塗りの高級車",
        "後輩",
        "三浦",
        "車の主、暴力団員谷岡"
      ]
    };
  }

  handleChange() {
    this.setState({templateData: [
      this.refs.value1.value,
      this.refs.value2.value,
      this.refs.value3.value,
      this.refs.value4.value,
      this.refs.value5.value
    ]});
  }

  render() {
    return (
      <div className="App">
        <h3>置き換え部分入力</h3>
        <div className="itemPair">
          <span>誰が</span>
          <input
            onChange={this.handleChange}
            ref="value1"
            defaultValue={this.state.templateData[0]} />
        </div>
        <div className="itemPair">
          <span>何に</span>
          <input
            onChange={this.handleChange}
            ref="value2"
            defaultValue={this.state.templateData[1]} />
        </div>
        <div className="itemPair">
          <span>誰をかばって</span>
          <input
            onChange={this.handleChange}
            ref="value3"
            defaultValue={this.state.templateData[2]} />
        </div>
        <div className="itemPair">
          <span>誰がかばった</span>
          <input
            onChange={this.handleChange}
            ref="value4"
            defaultValue={this.state.templateData[3]} />
        </div>
        <div className="itemPair">
          <span>車のオーナー</span>
          <input
            onChange={this.handleChange}
            ref="value5"
            defaultValue={this.state.templateData[4]} />
        </div>
        <Kitsunemimi templateData={this.state.templateData} />
        <Nekomimi templateData={this.state.templateData} />
      </div>
    );
  }
}

class Kitsunemimi extends Component {
  render() {
    return (
      <div className="Kitsunemimi">
        <h3>結果</h3>
        <div className="result">
          <p>{this.props.templateData[0]}。</p>
          <p>疲れからか、不幸にも{this.props.templateData[1]}に追突してしまう。{this.props.templateData[2]}をかばいすべての責任を負った{this.props.templateData[3]}に対し、</p>
          <p>{this.props.templateData[4]}に言い渡された示談の条件とは・・・。</p>
        </div>
      </div>
    );
  }
}

class Nekomimi extends Component {
  render() {
    return (
      <div className="Nakomimi">
        <a href={`https://twitter.com/intent/tweet?text=${this.props.templateData[0]}。疲れからか、不幸にも${this.props.templateData[1]}に追突してしまう。${this.props.templateData[2]}をかばいすべての責任を負った${this.props.templateData[3]}に対し、${this.props.templateData[4]}に言い渡された示談の条件とは・・・。`}>tweetする</a>
      </div>
    );
  }
}

export default App;
