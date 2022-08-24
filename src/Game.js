import { GameRules } from './GameRules'
import { Card } from './Card'
const React = require('react');

export class Game extends React.Component {
    constructor(props) {
        super(props);
        let ruleList = props.ruleList.getShuffledArrayOfRules()
        this.state = {
            currentRule: ruleList.pop(),
            playerNames: props.playerNames,
            ruleList: ruleList,
            currPlayerList: [],
            outPlayerList: []
        };
        this.nextRule = this.nextRule.bind(this);
        this.getShuffledPlayerList = this.getShuffledPlayerList.bind(this);
    }

    getShuffledPlayerList() {
        return Array.from(this.state.playerNames.sort(function() {
            return Math.random() - 0.5
        }))
    }

    nextRule() {
        let tempRules = this.state.ruleList;
        let tempRule = tempRules.pop();
        let currPlayerList = this.state.currPlayerList;
        let outPlayerList = [];
        for(let i=0;i<tempRule.numPlayers;i++) {
            if (currPlayerList.length < 1) {
                currPlayerList = this.getShuffledPlayerList()
            }
            outPlayerList.push(currPlayerList.pop());
        }
        this.setState({ 
            currentRule: tempRule, 
            ruleList: tempRules,
            currPlayerList: currPlayerList,
            outPlayerList: outPlayerList
        });
        
    }

    render() {
        console.log(`Rendering current rule: ${this.state.currentRule.ruleText}`);
        return  (
            <div key={this.state.currentRule.ruleText}>
                <Card rule={this.state.currentRule} playerNames={this.state.outPlayerList} />
                <button onClick={this.nextRule}>Next</button>
            </div>
        );
    }
}

