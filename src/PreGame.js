import { Game } from './Game'
import { GameRules } from './GameRules'
const React = require('react');

export class PreGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPlayers: 1,
            namesSubmitted: false,
            playerNames: []
        };
        this.addPlayer = this.addPlayer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addPlayer(e) {
        this.setState({ numPlayers: this.state.numPlayers+1});
    }

    handleSubmit(e) {
        e.preventDefault();
        let pNames = [];
        for (let i=0;i<this.state.numPlayers;i++) {
            pNames.push(e.target.querySelector(`#player-${i}`).value)
        }

        this.setState({ namesSubmitted: true, playerNames: pNames });
    }

    render() {
        if (this.state.namesSubmitted) {
            return <Game ruleList={ new GameRules() } playerNames={ this.state.playerNames }/>
        } else {
            return  (
                <div class="player-form-div">
                    <form class="player-form" onSubmit={this.handleSubmit}>
                        <div class="players">
                        {[...Array(this.state.numPlayers)].map((x, i) =>
                            <label>
                                <input type="text" class="player-input" id={`player-${i}`} name={`player-${i}`} />
                                <br />
                            </label>
                        )}
                        </div>
                        <button type="submit" class="players-submit">Submit</button>
                        <button type="button" id="player-form-add" onClick={this.addPlayer}>Add Player</button>
                    </form>
                </div>
            );
        }
    }
}

