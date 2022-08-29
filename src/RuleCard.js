import Card from 'react-bootstrap/Card';
const React = require('react');

export class RuleCard extends React.Component {
    constructor(props) {
        super(props);
        let rule = props.rule
        // console.log(props.playerNames)
        for (let i=1;i<=rule.numPlayers;i++) {
            rule.ruleText = rule.ruleText.replace(`@@P${i}@@`, props.playerNames.pop());
        }
        this.state = {
            rule: rule,
        };
    }

    render() {
        return  (
            <Card className="text-center">
                <Card.Text>
                    { this.state.rule.ruleText }
                </Card.Text>
            </Card>
        );
    }
}