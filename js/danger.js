"use strict";

var paragraphs = [
    {
        isDanger: true,
        isCorrect: false,
        object: $('.p-one')
    },
    {
        isDanger: false,
        isCorrect: false,
        object: $('.p-two')
    },
    {
        isDanger: true,
        isCorrect: false,
        object: $('.p-three')
    },
    {
        isDanger: true,
        isCorrect: false,
        object: $('.p-four')
    },
    {
        isDanger: false,
        isCorrect: false,
        object: $('.p-five')
    }
    // {
    //     isDanger: true,
    //     isCorrect: false,
    //     object: $('.p-six')
    // },
    // {
    //     isDanger: false,
    //     isCorrect: false,
    //     object: $('.p-seven')
    // },
    // {
    //     isDanger: false,
    //     isCorrect: false,
    //     object: $('.p-eight')
    // },
    // {
    //     isDanger: false,
    //     isCorrect: false,
    //     object: $('.p-nine')
    // },
    // {
    //     isDanger: true,
    //     isCorrect: false,
    //     object: $('.p-ten')
    // },
    // {
    //     isDanger: false,
    //     isCorrect: false,
    //     object: $('.p-eleven')
    // }
];

$(document).ready(function () {
    var speed = 1500;
    var $counter = $("#counter");
    var $btnQuestion = $("#button-show");
    var $btnIsDanger = $("#is-danger");
    var $btnNotDanger = $("#not-danger");
    var correctAnswers = 0;

    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].isDanger) {
            correctAnswers++;
        }
    }

    $('.animate-paragraphs').hide();

    if (getCounterValue() === null) {
        disableAnswerButtons();
    }

    $btnQuestion.click(function () {
        if (isBtnEnabled($btnQuestion)) {
            enableAnswerButtons();
            disableQuestionButton();
            incrementUntil();

            paragraphs[getCounterValue()].object.removeClass('fail');
            paragraphs[getCounterValue()].object.removeClass('success');

            showQuestion(getCounterValue());
        }
    });

    $btnIsDanger.click(function () {
        if (isBtnEnabled($btnIsDanger)) {
            enableQuestionButton();
            disableAnswerButtons();

            if (paragraphs[getCounterValue()].isDanger) {
                paragraphs[getCounterValue()].isCorrect = true;
                paragraphs[getCounterValue()].object.addClass('fail');
                hideQuestion(getCounterValue());
                ensureQuizEnd();
            } else {
                paragraphs[getCounterValue()].isCorrect = false;
                hideQuestion(getCounterValue());
            }
        }
    });

    $btnNotDanger.click(function () {
        if (isBtnEnabled($btnNotDanger)) {
            enableQuestionButton();
            disableAnswerButtons();

            if (!paragraphs[getCounterValue()].isDanger) {
                paragraphs[getCounterValue()].isCorrect = true;
                paragraphs[getCounterValue()].object.addClass('success');
                hideQuestion(getCounterValue());
            } else {
                paragraphs[getCounterValue()].isCorrect = false;
                hideQuestion(getCounterValue());
            }
        }
    });

    function getCounterValue() {
        var value = $counter.val();
        return value === '' ? null : parseInt(value);
    }

    function showQuestion(index) {
        if (index >= 0 && index < paragraphs.length) {
            paragraphs[index].object.show(speed);
        }
    }

    function hideQuestion(index) {
        if (index >= 0 && index < paragraphs.length) {
            paragraphs[index].object.hide(speed);
        }
    }

    function disableAnswerButtons() {
        $btnIsDanger.attr('disabled', true);
        $btnNotDanger.attr('disabled', true);
    }

    function enableAnswerButtons() {
        $btnIsDanger.attr('disabled', false);
        $btnNotDanger.attr('disabled', false);
    }

    function disableQuestionButton() {
        $btnQuestion.attr('disabled', true);
    }

    function enableQuestionButton() {
        $btnQuestion.attr('disabled', false);
    }

    function isBtnEnabled($el) {
        return $el.attr('disabled') !== 'disabled';
    }

    function incrementUntil() {
        if (getCounterValue() === null) {
            $counter.val(0);
        } else {
            $counter.val(getCounterValue() + 1);
            if (getCounterValue() >= paragraphs.length) {
                $counter.val(0);
            }

            var paragraph = paragraphs[getCounterValue()];

            if (paragraph.isCorrect) {
                incrementUntil();
            }
        }
    }

    function ensureQuizEnd() {
        var numberOfCorrectAnswers = 0;
        var numberOfCorrectQuestions = 0;

        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].isDanger) {
                numberOfCorrectQuestions++;
            }
        }

        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].isCorrect && paragraphs[i].isDanger) {
                numberOfCorrectAnswers++;
            }

        }

        if (numberOfCorrectAnswers >= numberOfCorrectQuestions) {
            alert('Finish quiz!');
        }
    }
});
