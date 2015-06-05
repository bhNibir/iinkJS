'use strict';

describe('ShapeRenderer: rendering/shapeRenderer.js', function () {

    describe('Default construction', function () {

        var shapeRenderer;
        before(function (done) {
            shapeRenderer = new MyScript.ShapeRenderer();
            done();
        });

        it('check initial state', function () {
            expect(shapeRenderer).to.be.an('object');
            expect(shapeRenderer).to.be.an.instanceof(MyScript.AbstractRenderer);
            expect(shapeRenderer).to.be.an.instanceof(MyScript.ShapeRenderer);
        });

    });

    describe('Accessors', function () {

        var shapeRenderer;
        before(function (done) {
            shapeRenderer = new MyScript.ShapeRenderer();
            shapeRenderer.getParameters().setShowBoundingBoxes(true);
            done();
        });

        var context = document.createElement('canvas').getContext('2d');
        context.canvas.clientWidth = 800;
        context.canvas.clientHeight = 600;

        var stroke1 = new MyScript.Stroke();
        stroke1.setX([183, 185, 185, 186, 187, 188, 187, 186, 185, 184, 185, 186]);
        stroke1.setY([148, 148, 149, 149, 149, 150, 150, 149, 149, 149, 149, 149]);

        var stroke2 = new MyScript.Stroke();
        stroke2.setX([194, 194, 194, 194, 195, 195, 195, 195, 195, 196, 196, 196, 197, 197, 197, 197, 198, 198, 198, 198, 198, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199]);
        stroke2.setY([152, 150, 148, 147, 146, 145, 144, 143, 142, 141, 140, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 129, 128, 127, 126, 124, 122, 120, 118, 117, 116, 115, 113, 112, 111, 110, 109, 108, 107, 105, 104, 103, 102, 101, 99, 98, 96, 95, 94, 93, 91, 90, 89, 88, 87, 86, 84, 83]);

        var stroke3 = new MyScript.Stroke();
        stroke3.setX([175, 176, 177, 178, 179, 180, 182, 183, 186, 188, 190, 192, 194, 196, 198, 199, 201, 202, 203, 204, 205, 207, 208, 209, 210, 211, 213, 214, 214, 212, 210, 208, 206, 203, 201, 199, 197, 194, 192, 189, 187, 185, 183, 181, 179, 177, 176, 174, 172, 171, 173, 175, 178, 181, 185, 188, 192, 197, 200, 201, 202, 204, 205, 207, 206, 204, 202, 200, 197, 195, 193, 190, 187, 185, 182, 180, 178, 176, 175, 174, 173, 172, 171, 172, 174, 176, 179, 182, 186, 189, 193, 196, 198, 200, 202, 203, 205, 207, 209, 211, 212, 211, 210, 209, 207, 205, 203, 201, 199, 196, 194, 192, 191, 190, 191, 193, 195, 197, 199, 202, 205, 207, 210, 213, 215, 216, 214, 210, 204, 198, 193, 187, 182, 178, 175, 175, 174, 175, 176, 178, 180, 182, 184, 187, 189, 191, 193, 195, 197, 199, 201, 202, 201, 199, 197, 195, 192, 190, 188, 185, 183, 181, 180, 179, 178, 180, 183, 186, 193, 200, 207, 215, 222, 228, 232, 233, 234, 233, 232, 231, 230, 228, 225, 222, 219, 215, 211, 208, 205, 203, 201, 200, 197, 194, 192, 190, 190, 189, 187, 184, 180, 177, 174, 171, 170, 169]);
        stroke3.setY([88, 88, 88, 88, 88, 88, 88, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 86, 86, 86, 86, 86, 86, 86, 87, 87, 88, 89, 89, 90, 91, 92, 92, 93, 94, 94, 95, 96, 96, 97, 98, 98, 98, 99, 99, 100, 100, 100, 101, 101, 102, 102, 103, 104, 104, 105, 105, 105, 105, 105, 106, 106, 106, 107, 107, 108, 109, 109, 110, 111, 111, 112, 112, 113, 114, 114, 114, 114, 114, 115, 115, 115, 115, 115, 115, 115, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 117, 117, 118, 118, 119, 119, 119, 120, 121, 121, 122, 122, 123, 123, 123, 123, 123, 124, 124, 125, 126, 127, 128, 128, 129, 129, 130, 131, 131, 133, 133, 133, 134, 134, 134, 135, 135, 135, 135, 135, 135, 136, 136, 137, 137, 138, 138, 138, 139, 139, 140, 140, 141, 141, 141, 142, 142, 143, 144, 145, 145, 146, 147, 147, 147, 147, 147, 147, 147, 149, 149, 149, 149, 149, 150, 150, 150, 150, 150, 151, 151, 151, 151, 151, 152, 152, 152, 152, 152, 152, 152, 152, 153, 153, 154, 154, 155, 155, 155, 156, 158, 159, 161, 161, 161, 162]);

        var strokes = [stroke1, stroke2, stroke3];

        var shapeLine = new MyScript.ShapeLine({
            type: 'line',
            firstPoint: {x: 242.55331, y: 220.25092},
            lastPoint: {x: 1020.905, y: 220.25092},
            beginDecoration: 'ARROW_HEAD',
            endDecoration: 'ARROW_HEAD',
            beginTangentAngle: 1,
            endTangentAngle: 1
        });
        var shapeEllipse = new MyScript.ShapeEllipse({type: 'ellipse'});

        var recognitionResult = new MyScript.ShapeDocument();
        it('Draw shape recognition result', function () {
            shapeRenderer.drawRecognitionResult(strokes, recognitionResult, context);
        });

        var boundingBox = new MyScript.Rectangle({x: 242.55331, y: 220.25092, height: 0, width: 778.35169});
        it('Get shape line bounding box', function () {
            expect(shapeRenderer.getPrimitiveBoundingBox(shapeLine)).to.deep.equal(boundingBox);
        });

        var obj = {
            type: 'recognizedShape',
            primitives: [shapeLine, shapeEllipse]
        };
        var shapeRecognized = new MyScript.ShapeRecognized(obj);

        it('Draw shape segment: ShapeRecognized', function () {
            var seg = {
                candidates: [shapeRecognized],
                selectedCandidateIndex: 0
            };
            var shapes = [new MyScript.ShapeSegment(seg)];
            shapeRenderer.drawShapes(strokes, shapes, context);
        });

        var shapeNotRecognized = new MyScript.ShapeNotRecognized();
        var inkRange = new MyScript.ShapeInkRange({firstStroke: 1, lastStroke: 1, firstPoint: 0, lastPoint: 408});

        it('Draw shape segment: ShapeNotRecognized', function () {
            var seg = {
                inkRanges: [inkRange],
                candidates: [shapeNotRecognized],
                selectedCandidateIndex: 0
            };
            var shapes = [new MyScript.ShapeSegment(seg)];
            shapeRenderer.drawShapes(strokes, shapes, context);
        });

        var parameters = new MyScript.RenderingParameters();
        it('Draw shape segment with custom params', function () {
            var seg = {
                inkRanges: [inkRange],
                candidates: [shapeRecognized, shapeNotRecognized],
                selectedCandidateIndex: 0
            };
            var shapes = [new MyScript.ShapeSegment(seg)];
            shapeRenderer.drawShapes(strokes, shapes, context, parameters);
        });

        var components = [];

        components.push(shapeLine);
        it('Draw shape components: ShapeLine', function () {
            var test = [shapeLine];
            shapeRenderer.drawComponents(test, context);
        });

        components.push(shapeEllipse);
        it('Draw shape components: ShapeEllipse', function () {
            var test = [shapeEllipse];
            shapeRenderer.drawComponents(test, context);
        });

        components.push(stroke1);
        it('Draw shape components: Stroke', function () {
            var test = [stroke1];
            shapeRenderer.drawComponents(test, context);
        });

        var unknown = {test: 'test'};
        components.push(unknown);
        it('Draw shape components: Unknown', function () {
            var test = [unknown];
            expect(function () {
                shapeRenderer.drawComponents(test, context);
            }).to.throw(Error);
        });

    });

});