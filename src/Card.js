const React = require('react');

export class Card extends React.Component {
    constructor(props) {
        super(props);
        let rule = props.rule
        for (let i=1;i<=rule.numPlayers;i++) {
            rule.ruleText = rule.ruleText.replace(`@@P${i}@@`, props.playerNames.pop());
        }
        this.state = {
            rule: rule,
        };
    }


    render() {
        return  (
            <div>
                {this.state.rule.ruleText}
            </div>
        );
    }
}