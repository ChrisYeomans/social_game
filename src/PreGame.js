import { Game } from './Game'
import { GameRules } from './GameRules'
import Button from 'react-bootstrap/Button';
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
        this.removePlayer = this.removePlayer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addPlayer() {
        this.setState({ numPlayers: this.state.numPlayers+1});
    }

    removePlayer() {
        if (this.state.numPlayers > 1) {
            this.setState({ numPlayers: this.state.numPlayers-1});
        }
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
                <div class="player-form-div form">
                    <form class="player-form form form-group col-md-4 offset-md-4 align-center mt-5" onSubmit={this.handleSubmit}>
                        <div class="players">
                        {[...Array(this.state.numPlayers)].map((x, i) =>
                            <div class="row">
                                <input autocomplete="off" type="text" class="player-input mt-1 mb-1" id={`player-${i}`} name={`player-${i}`} />
                            </div>
                        )}
                        </div>
                        <div class="row mt-1 mb-1">
                            <Button type="submit" className="players-submit col-md-12">Submit</Button>
                        </div>
                        <div class="row mt-1 mb-1">
                            <Button type="button" id="player-form-add" className="col-md-12" onClick={this.addPlayer}>Add Player</Button>
                        </div>
                        <div class="row mt-1 mb-1">
                            <Button type="button" id="player-form-add" className="col-md-12" onClick={this.removePlayer}>Remove Player</Button>
                        </div>  
                    </form>
                </div>
            );
        }
    }
}

