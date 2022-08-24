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
            ruleList: ruleList
        };
        this.nextRule = this.nextRule.bind(this);
    }

    nextRule() {
        let tempRules = this.state.ruleList
        let tempRule = tempRules.pop();
        console.log(tempRules);
        console.log(tempRule.ruleText);
        this.setState({ currentRule: tempRule, ruleList: tempRules });
        
    }

    render() {
        console.log(`Rendering current rule: ${this.state.currentRule.ruleText}`);
        return  (
            <div key={this.state.currentRule.ruleText}>
                <Card rule={this.state.currentRule} />
                <button onClick={this.nextRule}>Next</button>
            </div>
        );
    }
}

