const React = require('react');

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rule: props.rule
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