var homePageContainer = document.getElementById('home-page-container');
var signUpForm = document.getElementById('sign-up-form-container');
var signInForm = document.getElementById('sign-in-form-container');
var quizPageContainer = document.getElementById('quiz-page-container');
var testDiv = document.getElementById('test-div');
var resultDiv = document.getElementById("result-div");

var name;

function showSignUp()
{
    homePageContainer.style.display = 'none';
    quizPageContainer.style.display = "none";
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
}

function showSignIn()
{
    var btnName = document.getElementById('signIn').innerHTML;

    if (btnName === 'Sign In')
    {
        homePageContainer.style.display = 'none';
        quizPageContainer.style.display = 'none';
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';   
    }
    else if (btnName === 'Sign Out')
    {
        homePageContainer.style.display = 'block';
        signUpForm.style.display = 'none';
        signInForm.style.display = 'none';
        resultDiv.style.display = 'none';
        document.getElementById('greet-div').style.display = "none";
        document.getElementById('test-timer').style.visibility = "hidden";
        document.getElementById('sign-up-button').style.display = "block";
        document.getElementById('signIn').innerHTML = "Sign In";
        document.getElementById('ins-heading').style.display = "none";
        document.getElementById('inst-list').style.display = "none";
        document.getElementById('activation-div').style.display = "none";
        document.getElementById('coming-soon-logo').style.display = "none";
        document.getElementById("menu-box").style.display = "none";
        document.getElementById("quiz-body").style.display = "none";

        var rad = document.getElementsByName("opt");
        
        for (var r = 0; r < rad.length; r++)
        {
            rad[r].checked = false;
        }

        resetTimer();
    }
}

function resetTimer()
{
    clearInterval(timer);
}

function borderStyle(x,y)
{
    document.getElementById(y).placeholder = "";

    x = document.getElementById(x);

    x.style.borderBottomColor = "mediumseagreen";
    x.style.transition = "all 1s";
    x.style.transitionTimingFunction = "ease-out";
}

function hideBorderStyle(x)
{
    x.style.borderBottomColor = "darkgrey";
}

var userName;
var userKey;
var userNameSignIn;
var userKeySignIn;
var flag2 = true;

function checkValidity()
{
    for (var i = 0; i < localStorage.length; i++)
    {
        var x = localStorage.key(i);
        var val = localStorage.getItem(x);

        var uName = document.getElementById('userName').value;
        var uKey = document.getElementById('key').value;

        if (uName === val)
        {
            alert("This Username already exists. Please choose different.");
            flag2 = false;

            document.getElementById('userName').value = "";
            document.getElementById('key').value = "";
        }
    }
}

function save()
{
    if (flag2)
    {
        userName = document.getElementById('userName').value;
        userKey = document.getElementById('key').value;

        if(userName == "" || userKey == "")
        {
            alert("User Name or Key is missing...!");
        }
        else
        {
            localStorage.setItem(userKey,userName);
            alert("Congrats! You are successfully Registered");

            document.getElementById('userName').value = "";
            document.getElementById('key').value = "";
        }    
    }
    else
    {
        alert("Cannot register with this Username!");
    }
}

function check()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(userNameSignIn == "" || userKeySignIn == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        userSignIn();
    }
}

function userSignIn()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(localStorage.length == 0)
    {
        alert("Nothing in record. Please Register First");

        document.getElementById('userNameS').value = "";
        document.getElementById('keyS').value = "";
    }
    else
    {
        var flag = true;

        for (var i = 0; i < localStorage.length; i++)
        {
            var key   = localStorage.key(i);
            var value = localStorage.getItem(key);

            if(userNameSignIn === value && userKeySignIn === key)
            {
                alert("Welcome! You are successfully Signed In");

                flag = false;

                name = userNameSignIn;

                document.getElementById('userNameS').value = "";
                document.getElementById('keyS').value = "";

                showTestPanel();

                break;
            }
        }

        if(flag === true)
        {
             alert("User Name or Key is Incorrect! \nOR You are not registered \n\nNote: To register click I want to to create new account." );

             document.getElementById('keyS').focus();
             document.getElementById('keyS').value = "";
        }
    }
}

var flag3 = true;
var x = document.getElementById('catag1-test-list');
var y = x.getElementsByTagName('li').length;
var z = document.getElementById('catag-name');

function showListItems()
{
    if (flag3)
    {
        for (var i = 0; i < y; i++)
        {
            x.getElementsByTagName('li')[i].style.visibility = "visible";
        }

        z.style.listStyleImage = "url('images/minus.png')";

        flag3 = false;
    } 
    
    else if (!flag3)
    {
        for (var i = 0; i < y; i++)
        {
            x.getElementsByTagName('li')[i].style.visibility = "hidden";
        }

        z.style.listStyleImage = "url('images/plus.png')";

        flag3 = true;
    }
    
}

function showTestPanel()
{
    quizPageContainer.style.display = "block";
    homePageContainer.style.display = "none";
    signInForm.style.display = "none"
    testDiv.style.display = "none"

    document.getElementById('greet-div').style.display = "block";
    document.getElementById('menu-box').style.display = "block";
    document.getElementById('quiz-body').style.display = "block";
    document.getElementById('ins-heading').style.display = "block";
    document.getElementById('ins-heading').innerHTML = "Instructions";
    document.getElementById('inst-list').style.display = "block";
    document.getElementById('name').innerHTML = name;
    document.getElementById('sign-up-button').style.display = "none";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('signIn').innerHTML = "Sign Out";
    document.getElementById('result-div').style.display = "none";
    document.getElementById("menu-box").style.pointerEvents = "all";
    document.getElementById("menu-box").style.opacity = 1;
}

function comingSoon()
{
    document.getElementById('ins-heading').style.display = "none";
    document.getElementById('inst-list').style.display = "none";
    document.getElementById('coming-soon-logo').style.display = "block";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('result-div').style.display = "none";

    showListItems();

}

function testActivation()
{
    document.getElementById('ins-heading').innerHTML = "Activation";
    document.getElementById('coming-soon-logo').style.display = "none";
    document.getElementById('inst-list').style.display = "none";
    document.getElementById('ins-heading').style.display = "block";
    document.getElementById('activation-div').style.display = "block";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('test-form').style.display = "none";
    resultDiv.style.display = "none";

    showListItems();
}

function activate()
{
    showListItems();

    var testKey = document.getElementById('activation-key').value;

    if (testKey === "")
    {
        showListItems();
        alert("Insert Test Key!");    
    }
    else if(testKey === "testone")
    {
        showTestForm();
    }
    else
    {
        showListItems();
        alert('Wrong Activation Key!');
    }

}

function showTestForm()
{
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('result-div').style.display = "none";
    document.getElementById('activation-div').style.display = "none";
    showListItems();
    document.getElementById('ins-heading').innerHTML = "Fill Out this Form";
    document.getElementById('test-form').style.display = "block";
    resultDiv.style.display = "none";
    document.getElementById('activation-key').value = "";    
}

function showTestInst()
{
    document.getElementById('ins-heading').innerHTML = "Terms and Conditions";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('result-div').style.display = "none";
    document.getElementById('inst-before-test').style.display = "block";

    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('edu').value = "";
    document.getElementById('institute').value = "";
}

var timer;

function startQuiz()
{
    document.getElementById('test-timer').style.visibility = "visible";
    document.getElementById("next-btn").innerHTML = "Next";
    document.getElementById('ins-heading').innerHTML = "HTML 5 - Test 1";

    startTime();

    document.getElementById('inst-before-test').style.display = "none";
    testDiv.style.display = "block";
    document.getElementById("menu-box").style.pointerEvents = "none";
    document.getElementById("menu-box").style.opacity = 0.4;
    document.getElementById('result-div').style.display = "none";
    
    changeQuestion = 0;
    score = 0;

    showQuestion();
}

function startTime()
{
    var m = 4;
    var s = 59;

    document.getElementById('min').innerHTML = "05";
    document.getElementById('sec').innerHTML = "00";

    timer = setInterval(startTimer, 1000);

    function startTimer()
    {
        s = checkTime(s);
    
        document.getElementById('min').innerHTML = "0"+m;
        document.getElementById('sec').innerHTML = s;

        s--;

        if (s < 0)
        {
            m--;
            s = 59;
            if (m < 0)
            {
                showResult();
            }
        }   
    }
}

function checkTime(i)
{
    // add zero in front of numbers < 10
    if (i < 10)
    {
        i = "0" + i
    };
    
    return i;
}

var questions = [
    {
        question: 'HTML tags are case sensitive.',
        options:
        [
            {
                option: 'Yes',
                correct: false
            },
            {
                option: 'No',
                correct: true
            },
            {
                option: 'Few',
                correct: false
            },
            {
                option: "I don't know",
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following tag represents the header of a section in HTML5?',
        options:
        [
            {
                option: 'section',
                correct: false
            },
            {
                option: 'header',
                correct: true
            },
            {
                option: 'article',
                correct: false
            },
            {
                option: 'aside',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following is correct about Web form 2.0 in HTML5?',
        options:
        [
            {
                option: 'Web Forms 2.0 is an extension to the forms features found in HTML4.',
                correct: false
            },
            {
                option: 'Form elements and attributes in HTML5 provide a greater degree of semantic mark-up than HTML4.',
                correct: false
            },
            {
                option: 'Form elements and attributes in HTML5 remove a great deal of the need for tedious scripting and styling that was required in HTML4.',
                correct: false
            },
            {
                option: 'All of the above',
                correct: true
            }
        ]
    },
    {
        question: 'Which of the following is true about Local Storage in HTML5?',
        options:
        [
            {
                option: "HTML5 introduces the localStorage attribute which would be used to access a page's local storage area without no time limit.",
                correct: false
            },
            {
                option: 'This local storage will be available whenever you would use that page.',
                correct: false
            },
            {
                option: 'Both of the above.',
                correct: true
            },
            {
                option: 'None of the above',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following is correct about Server Side Events(SSE) in HTML5?',
        options:
        [
            {
                option: "To use Server-Sent Events in a web application, you would need to add an <eventsource> element to the document.",
                correct: false
            },
            {
                option: 'The src attribute of <eventsource> element should point to an URL which should provide a persistent HTTP connection that sends a data stream containing the events.',
                correct: false
            },
            {
                option: 'The URL would point to a PHP, PERL or any Python script which would take care of sending event data consistently.',
                correct: false
            },
            {
                option: 'All of the above',
                correct: true
            }
        ]
    },
    {
        question: "Which of the following is true about 'video' tag in HTML5?",
        options:
        [
            {
                option: "MPEG4 files with H.264 video codec and AAC audio codec are supported.",
                correct: false
            },
            {
                option: 'You can use <source> tag to specify media along with media type and many other attributes.',
                correct: false
            },
            {
                option: 'An video element allows multiple source elements and browser will use the first recognized format.',
                correct: false
            },
            {
                option: 'All of the above',
                correct: true
            }
        ]
    },
    {
        question: "Which of the following attribute specifies if the user can edit the element's content or not?",
        options:
        [
            {
                option: "editable",
                correct: false
            },
            {
                option: 'contenteditable',
                correct: true
            },
            {
                option: 'contextmenu',
                correct: false
            },
            {
                option: 'content',
                correct: false
            }
        ]
    },
    {
        question: "Which of the following attribute triggers event when an element is dragged?",
        options:
        [
            {
                option: "ondragleave",
                correct: false
            },
            {
                option: 'ondrag',
                correct: true
            },
            {
                option: 'ondragend',
                correct: false
            },
            {
                option: 'ondragenter',
                correct: false
            }
        ]
    },
    {
        question: "Which of the following attribute triggers event at the start of a drag operation?",
        options:
        [
            {
                option: "ondragleave",
                correct: false
            },
            {
                option: 'ondrag',
                correct: false
            },
            {
                option: 'ondragover',
                correct: false
            },
            {
                option: 'ondragstart',
                correct: true
            }
        ]
    },
    {
        question: "Which of the following attribute triggers event when the message is triggered?",
        options:
        [
            {
                option: "onloadedmetadata",
                correct: false
            },
            {
                option: 'onloadstart',
                correct: false
            },
            {
                option: 'onmessage',
                correct: true
            },
            {
                option: 'onoffline',
                correct: false
            }
        ]
    }
];

var score = 0;
var changeQuestion = 0;
var ques = document.getElementById('question');
var op1 = document.getElementById('opt1');
var op2 = document.getElementById('opt2');
var op3 = document.getElementById('opt3');
var op4 = document.getElementById('opt4');

var radio1 = document.getElementById('r1');
var radio2 = document.getElementById('r2');
var radio3 = document.getElementById('r3');
var radio4 = document.getElementById('r4');

function decideNextOrFinish()
{
    var getBtn = document.getElementById("next-btn").innerHTML;
    var radios = document.getElementsByName("opt");

    if (getBtn === "Next")
    {    
        var formValid = false;

        var i = 0;

        while (!formValid && i < radios.length)
        {
            if (radios[i].checked)
            {
                formValid = true;
            }

            i++;        
        }

        if (!formValid)
        { 
            alert("You must choose any Option");
        }
        else
        {
            checkAnswer();
            changeQuestion++;     
            showQuestion();
        }
        
        return formValid;
    }

    else if (getBtn === 'Finish')
    {
        checkAnswer();
        showResult();
        resetTimer();
    }
}

var i;

function showQuestion()
{
    for(i = changeQuestion; i < questions.length; i++)
    {   
        ques.innerHTML = questions[i].question;
        op1.innerHTML = questions[i].options[0].option;
        op2.innerHTML = questions[i].options[1].option;
        op3.innerHTML = questions[i].options[2].option;
        op4.innerHTML = questions[i].options[3].option;

        radio1.value = questions[i].options[0].option;
        radio2.value = questions[i].options[1].option;
        radio3.value = questions[i].options[2].option;
        radio4.value = questions[i].options[3].option;

        break;
    }

    if (changeQuestion === 9) {
        document.getElementById("next-btn").innerHTML = "Finish";
    }
}

var userAnswer;

function checkAnswer()
{
    var radios = document.getElementsByName("opt");

    for (var k = 0; k < radios.length; k++)
    {
        if (radios[k].checked)
        {
            userAnswer = radios[k].value;
        }
    }
    
    for(var l = 0; l < 4; l++)
    {
        if (questions[i].options[l].option === userAnswer && questions[i].options[l].correct === true)
        {
            score = score + 10
        }
    }

    var rad = document.getElementsByName('opt');

    for (var r = 0; r < rad.length; r++)
    {
        rad[r].checked = false;
    }
}

function showResult()
{
    resultDiv.style.display = "block";
    testDiv.style.display = "none";
    document.getElementById('test-timer').style.visibility = "hidden";
    document.getElementById("menu-box").style.pointerEvents = "all";
    document.getElementById("menu-box").style.opacity = 1;

    document.getElementById('score').innerHTML = score + "%";

    if(score >= 70)
    {
        document.getElementById('remarks').innerHTML = "Congrats! You have passed.";
    }
    else
    {
        document.getElementById('remarks').innerHTML = "You are Fail. Continue Hard Work.";
    }

    resetTimer();
}