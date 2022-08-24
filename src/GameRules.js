const RulesJSON = require('./rules.json');

export class GameRules {
    constructor() {
        this.ruleList = RulesJSON["rules"];
    }

    getShuffledArrayOfRules() {
        return Array.from(this.ruleList.sort(function() {
            return Math.random() - 0.5
        }));
    }
}
