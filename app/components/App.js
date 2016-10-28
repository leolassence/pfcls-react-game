import React from 'react';
import Cards from './Cards';
import SetUpGameRules from './setup-game/SetUpGameRules';
import WinningPlayer from './WinningPlayer';
import GameInfosBar from './GameInfosBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'playing',
      game: {
        time: 0,
        tourInterval: 3,
        winningScore: 3,
      },
      players: {
        firstPlayer: {
          name: 'Sheldon',
          score: 0,
        },
        secondPlayer: {
          name: 'Leonard',
          score: 0,
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(players) {
    this.setState({
      status: 'playing',
      players: {
        firstPlayer: {
          name: players.firstPlayerName,
        },
        secondPlayer: {
          name: players.secondPlayerName,
        },
      },
    });
  }

  render() {
    switch (this.state.status) {
      case 'setup':
        return (
          <SetUpGameRules
            handler={this.handleSubmit}
            players={this.state.players}
          />
        );
        break;
      case 'playing':
        return (
          <div>
            <GameInfosBar
              players={this.state.players}
              game={this.state.game}
            />
            <Cards />
          </div>
        );
        break;
      case 'winner':
        return (
          <div>
            <WinningPlayer />
          </div>
        );
        break;
      default:
        return <SetUpGameRules handler={this.handleSubmit} players={this.state.players} />;
    }
  }
};

export default App;
