'use strict';

describe('MyScriptJS: output/math/mathSymbolTreeResultElement.js', function () {

    it('MathSymbolTreeResultElement object exist', function () {
        expect(MyScript.MathSymbolTreeResultElement).to.exist;
        expect(MyScript.MathSymbolTreeResultElement).not.to.be.null;
        expect(MyScript.MathSymbolTreeResultElement).to.not.be.undefined;
    });

    var mathSymbolTreeResultElement = new MyScript.MathSymbolTreeResultElement();
    it('MathSymbolTreeResultElement constructor', function () {
        expect(mathSymbolTreeResultElement).to.be.an('object');
        expect(mathSymbolTreeResultElement).to.be.an.instanceof(MyScript.MathResultElement);
        expect(mathSymbolTreeResultElement).to.be.an.instanceof(MyScript.MathSymbolTreeResultElement);
    });

    it('MathSymbolTreeResultElement Root getter', function () {
        expect(mathSymbolTreeResultElement.getRoot()).to.be.undefined;
    });

    it('Test MathSymbolTreeResultElement object construction: MathNonTerminalNode construction', function () {
        var obj = {
            root: {
                type: 'nonTerminalNode'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathNonTerminalNode);
    });

    it('Test MathSymbolTreeResultElement object construction: MathCellNonTerminalNode construction', function () {
        var obj = {
            root: {
                type: 'cell'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathCellNonTerminalNode);
    });

    it('Test MathSymbolTreeResultElement object construction: MathBorderNonTerminalNode construction', function () {
        var obj = {
            root: {
                type: 'border'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathBorderNonTerminalNode);
    });

    it('Test MathSymbolTreeResultElement object construction: MathTerminalNode construction', function () {
        var obj = {
            root: {
                type: 'terminalNode'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathTerminalNode);
    });

    it('Test MathSymbolTreeResultElement object construction: MathRuleNode construction', function () {
        var obj = {
            root: {
                type: 'rule'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathRuleNode);
    });

    it('Test MathSymbolTreeResultElement object construction: MathTableRuleNode construction', function () {
        var obj = {
            root: {
                type: 'table'
            }
        };
        var symbolTree = new MyScript.MathSymbolTreeResultElement(obj);
        expect(symbolTree.getRoot()).to.be.an.instanceof(MyScript.MathTableRuleNode);
    });

    it('Test MathSymbolTreeResultElement object construction: wrong node type', function () {
        var data = {
            root: {
                type: 'ruleNode'
            }
        };
        expect(function(){new MyScript.MathSymbolTreeResultElement(data);}).to.throw(Error);
    });

});