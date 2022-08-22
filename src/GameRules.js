const RulesJSON = require('./rules.json');

class GameRules {
    // Text of new rule on every line in rule_list.txt
    // in root of app
    constructor() {
        this.ruleList = RulesJSON["rules"];
        console.log(this.ruleList);
    }

    getShuffledArrayOfRules() {
        return this.ruleList.sort(function() {
            return Math.random() - 0.5
        });
    }
}
