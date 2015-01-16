'use strict';

describe('MyScriptJS: output/math/mathTerminalNode.js', function () {

    var expect = require('chai').expect;

    it('MathTerminalNode object exist', function () {
        expect(MyScript.MathTerminalNode).to.exist;
        expect(MyScript.MathTerminalNode).not.to.be.null;
        expect(MyScript.MathTerminalNode).to.not.be.undefined;
    });

    it('MathTerminalNode constructor', function () {
        var mathTerminalNode = new MyScript.MathTerminalNode();
        expect(mathTerminalNode).to.be.an('object');
        expect(mathTerminalNode).to.be.an.instanceof(MyScript.MathNode);
        expect(mathTerminalNode).to.be.an.instanceof(MyScript.MathTerminalNode);
        expect(mathTerminalNode).to.have.ownProperty('candidates');
        expect(mathTerminalNode).to.have.ownProperty('inkRanges');
    });

    it('MathTerminalNode Candidates getter', function () {
        var mathTerminalNode = new MyScript.MathTerminalNode();
        expect(mathTerminalNode.getCandidates()).to.be.empty;
    });

    it('MathTerminalNode Ink Ranges getter', function () {
        var mathTerminalNode = new MyScript.MathTerminalNode();
        expect(mathTerminalNode.getInkRanges()).to.be.empty;
    });

    it('MathTerminalNode Selected Candidate getter', function () {
        var mathTerminalNode = new MyScript.MathTerminalNode();
        expect(mathTerminalNode.getSelectedCandidate()).to.be.undefined;
    });


});