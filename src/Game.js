import { RuleCard } from './RuleCard'
import Button from 'react-bootstrap/Button';
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
            outPlayerList: props.playerNames
        };

        console.log(this.state.playerNames)
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
        console.log(`nextRule ${this.state.currPlayerList}`)
        return  (
            <div key={this.state.currentRule.ruleText}>
                <RuleCard rule={this.state.currentRule} playerNames={this.state.outPlayerList} />
                <Button onClick={this.nextRule}>Next</Button>
            </div>
        );
    }
}

