import Model from './model.js';

window.onload = function () {
  const foo = new String('foo');
  console.log(foo);
  typeof foo;
  // write relevant code.
  document.getElementById("Q").style.background = "#0281E8";

  var thisModel = new Model();
  // const newTitle = thisModel.data.questions[0].title;
  // document.getElementById("c3").innerHTML = newTitle;
  // console.log(newTitle);
  let arrofqid = [];
  for (let i = 0; i < thisModel.data.questions.length; i++) {
    arrofqid.push(thisModel.data.questions[i].qid);
  }
  console.log(arrofqid);
  createTable(arrofqid);

  let elements = document.getElementsByClassName("c3");
  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      document.getElementById("main").style.display = "none";
      document.getElementById("AnswerPage").style.display = "block";
      document.getElementById("Q").style.background = "darkgrey";
      answersPage(i);
    }
function answersPage(i){
  document.getElementById("titleOfQuestion").innerHTML = thisModel.data.questions[i].title;
      document.getElementById("numForAns").innerHTML = thisModel.data.questions[i].answers.length;
      document.getElementById("NumViews").innerHTML = (thisModel.data.questions[i].views += 1);
      document.getElementById("QDescription").innerHTML = (thisModel.data.questions[i].text);
      document.getElementById("User1").innerHTML = (thisModel.data.questions[i].askedBy + "<br>");
      document.getElementById("Date1").innerHTML = (thisModel.data.questions[i].askedOn + "<br>");
      document.getElementById("Time1").innerHTML = (thisModel.data.questions[i].askedAt);
      let answerTable = document.getElementById("AnswerTable");
      for (let j = 0; j < thisModel.data.questions[i].answers.length; j++) {
        let answerTag = thisModel.data.questions[i].answers[j];
        console.log(answerTag);

        for (let k = 0; k < thisModel.data.answers.length; k++) {
          let answerID = thisModel.data.answers[k].aid;
          console.log(answerID);
          if (answerTag === answerID) {
            answerTable.innerHTML += 
        `<tr id = rowAnswer class="border-bottom">
        <td id= answerToQuestion colspan=2 width = "75%">`+ thisModel.data.answers[k].text + `</td>
        <td id = "colum3" width = "25%"> 
         <span id="c5">Ans by</span>
         <span id="User2">` + thisModel.data.answers[k].ansBy + `<br></span>
         <span id="c6">On</span>
         <span id="Date2">` + thisModel.data.answers[k].ansOn +`<br></span>
         <span id="c7">At</span>
         <span id="Time2">` + thisModel.data.answers[k].ansAt +`</span>
         <style>
           tr.border-bottom td {
             padding-bottom: 7px;
             border-bottom: 1pt dotted black;
           }
           </style>
        </td>
        </tr>`
          }
        }
      }
    }

      
  }
  document.getElementById("AButtonFormat").onclick = function () {
    document.getElementById("AnswerPage").style.display = "none";
    document.getElementById("AnsweringQuestion").style.display = "block";
    document.getElementById("Q").style.background = "darkgrey";
    document.getElementById("SubmitAnswer").onclick = function () {
      console.log(document.getElementById("UsernameTextInput1").value.length);
      if (document.getElementById("UsernameTextInput1").value.length == 0) {
        document.getElementById("ErrorMsgBox1").style.display = "block";
        let errorNode1 = document.createElement('div');
        errorNode1.classList.add("ErrorMsgBox1");
        errorNode1.innerHTML = "Username cannot be empty!\n"
      }
      if (document.getElementById("UsernameTextInput1").value.length == 0) {
        document.getElementById("ErrorMsgBox1").style.display = "block";
        let errorNode1 = document.createElement('div');
        errorNode1.classList.add("ErrorMsgBox1");
        errorNode1.innerHTML = "Username cannot be empty!\n"
      }
      else {
        let answerText = document.getElementById("UsernameTextInput1").value;
        let usernameInput = document.getElementById("UsernameTextInput1").value;
        let newAid = "a" + String(thisModel.data.answers.length + 1);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        mm = getMonth(mm);
        today = mm + ' ' + dd + ', ' + yyyy;
        var timeOfInput = new Date();
        let hr = String(timeOfInput.getHours());
        let min = String(timeOfInput.getMinutes());
        timeOfInput = hr + ':' + min;
        let newAnswer = {
          aid: newAid,
          text: answerText,
          ansBy: usernameInput,
          ansOn: today,
          ansAt: timeOfInput,
        };
        thisModel.addA(newAnswer);
        document.getElementById("AnsweringQuestion").style.display = "none";
        document.getElementById("AnswerPage").style.display = "block";
        var parent = document.getElementById("AnswerTable");
        while (parent.hasChildNodes()) {
          parent.removeChild(parent.firstChild);
        }
      }
    }
  }

  // function answerPageFunction(){
  //   document.getElementById("main").style.display = "none";
  //   document.getElementById("AnswerPage").style.display = "block";

  // }

  document.getElementById("QButton").onclick = function () {
    document.getElementById("main").style.display = "none";
    document.getElementById("AskingQuestion").style.display = "block";
    document.getElementById("Q").style.background = "darkgrey";

    document.getElementById("SubmitQuestionButton").onclick = function () {
      if (document.getElementById("QuestionTitleText").value.length == 0) {
        document.getElementById("ErrorMsgBox").style.display = "block";
        let errorNode = document.createElement('div');
        errorNode.classList.add("ErrorMsgBox");
        errorNode.innerHTML = "Question Title cannot be empty!\n"
        document.getElementById("ErrorMsgBox").appendChild(errorNode);
      }
      if (document.getElementById("QuestionTextInput").value.length == 0) {
        document.getElementById("ErrorMsgBox").style.display = "block";
        let errorNode = document.createElement('div');
        errorNode.classList.add("ErrorMsgBox");
        errorNode.innerHTML = "Question text cannot be empty!\n"
        document.getElementById("ErrorMsgBox").appendChild(errorNode);
      }
      if (document.getElementById("TagsTextInput").value.length == 0) {
        document.getElementById("ErrorMsgBox").style.display = "block";
        let errorNode = document.createElement('div');
        errorNode.classList.add("ErrorMsgBox");
        errorNode.innerHTML = "Tags cannot be empty!\n"
        document.getElementById("ErrorMsgBox").appendChild(errorNode);
      }
      if (document.getElementById("UsernameTextInput").value.length == 0) {
        document.getElementById("ErrorMsgBox").style.display = "block";
        let errorNode = document.createElement('div');
        errorNode.classList.add("ErrorMsgBox");
        errorNode.innerHTML = "Username cannot be empty!\n"
        document.getElementById("ErrorMsgBox").appendChild(errorNode);
      }
      else {
        let titleInput = document.getElementById("QuestionTitleText").value;
        let questionInput = document.getElementById("QuestionTextInput").value;
        let tagsInput = document.getElementById("TagsTextInput").value;
        let usernameInput = document.getElementById("UsernameTextInput").value;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        mm = getMonth(mm);
        today = mm + ' ' + dd + ', ' + yyyy;
        var timeOfInput = new Date();
        let hr = String(timeOfInput.getHours());
        let min = String(timeOfInput.getMinutes());
        timeOfInput = hr + ':' + min;
        let newQid = "q" + String(thisModel.data.questions.length + 1);
        console.log(newQid);
        var arrOfTags = tagsInput.split(" ");
        var arrOfTagIDs = [];
        for (let i = 0; i < arrOfTags.length; i++) {
          for (let j = 0; j < thisModel.data.tags.length; j++) {
            if (arrOfTags[i] === thisModel.data.tags[j].name) {
              arrOfTagIDs.push(thisModel.data.tags[j].tid);
            }
          }
          arrOfTagIDs.push("t" + String(thisModel.data.tags.length + 1));
          let newTag = {
            tid: "t" + String(thisModel.data.tags.length + 1),
            name: arrOfTags[i]
          }
          thisModel.addTag(newTag);
        }
        let newQuestion = {
          qid: newQid,
          title: titleInput,
          text: questionInput,
          tagIds: arrOfTagIDs,
          askedBy: usernameInput,
          askedOn: today,
          askedAt: timeOfInput,
          answers: [],
          views: 0,
        };
        thisModel.addQ(newQuestion);
        document.getElementById("AskingQuestion").style.display = "none";

        document.getElementById("main").style.display = "block";
        var parent = document.getElementById("TableFormat");
        while (parent.hasChildNodes()) {
          parent.removeChild(parent.firstChild);
        }
        createTable();
      }
    }
  }
  function createTable(arr) {
    let tableFormat = document.getElementById("TableFormat");
    const numberOfQuestions = thisModel.data.questions.length;
    for (let i = 0; i < numberOfQuestions; i++) {
      let refQID = thisModel.data.questions[i].qid;
      for (let j = 0; j < arr.length; j++) {
        if (refQID === arr[j]) {
          tableFormat.innerHTML += `<colgroup>
        <col>
        <col style="width: 50%">
        <col style="width: 25%">
        <col style="width: 25%">
        </colgroup>
        <tr class="border-bottom">
        <td id = "col1">
          <span id = "numOfViews">`+ thisModel.data.questions[i].views + `</span>
          <span id = "c1">Views<br></span>
          <span id = "numOfAns">`+ thisModel.data.questions[i].answers.length + `</span>
          <span id = "c2">Answers</span>
          </td>
          <td id = "col2">
          <div class = "c3">
          <span id = "c3">`+ thisModel.data.questions[i].title + `<br></span>
          </div>
          </td>
          <td id = "col3">
          <span id = "c5">Asked by</span>
          <span id = "User">`+ thisModel.data.questions[i].askedBy + `<br></span>
          <span id = "c6">On</span>
          <span id = "Date">`+ thisModel.data.questions[i].askedOn + `<br></span>
          <span id = "c7">At</span>
          <span id = "Time">`+ thisModel.data.questions[i].askedAt + `</span>
          <style>
          tr.border-bottom td {
            padding-bottom: 7px;
            border-bottom: 1pt dotted black;
          }
          </style> 
          </td>`
          console.log("new question");
          addTags(i);
        }
      }

    }
    countQuestions();
  }
  function countQuestions() {
    var numOfQ = document.getElementById("TableFormat").rows.length;
    document.getElementById("NumQ").innerHTML = numOfQ;
  }
  function addTags(x) {
    console.log(x);
    let counter = 0;
    for (let j = 0; j < thisModel.data.questions[x].tagIds.length; j++) {
      console.log(thisModel.data.questions[x].tagIds.length);
      let s = document.createElement('span');
      s.classList.add("c4");
      let textNode = thisModel.data.questions[x].tagIds[j];
      //  console.log(textNode); 
      let tagN = getTag(textNode);
      var tagElement = document.createElement('span');
      s.appendChild(tagElement);
      tagElement.innerHTML = tagN;
      document.getElementById("c3").appendChild(s);
      console.log("added tag");
    }
  }

  function getTag(word) {
    for (let i = 0; i < thisModel.data.tags.length; i++) {
      if (word === thisModel.data.tags[i].tid) {
        return thisModel.data.tags[i].name;
      }
    }
  }
  function getMonth(mm) {
    if (mm === "01") {
      return ("Jan")
    }
    if (mm === "02") {
      return ("Feb")
    }
    if (mm === "03") {
      return ("Mar")
    }
    if (mm === "04") {
      return ("Apr")
    }
    if (mm === "05") {
      return ("May")
    }
    if (mm === "06") {
      return ("Jun")
    }
    if (mm === "07") {
      return ("Jul")
    }
    if (mm === "08") {
      return ("Aug")
    }
    if (mm === "09") {
      return ("Sep")
    }
    if (mm === "10") {
      return ("Oct")
    }
    if (mm === "11") {
      return ("Nov")
    }
    if (mm === "12") {
      return ("Dec")
    }
    else {
    }
  }

  document.getElementById("SText").addEventListener("keypress", function (x) {
    if (x.key === "Enter") {
      search();
    }
  });

  function search() {
    var parent = document.getElementById("TableFormat");
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
    document.getElementById("AllQ").innerHTML = "Search Results";
    let searchText = document.getElementById("SText").value;
    var searchArr = searchText.split(" ");
    var qArr = []
    for (let i = 0; i < searchArr.length; i++) {
      if (searchArr[i].startsWith("[")) {
        for (let j = 0; j < thisModel.data.tags.length; j++) {
          if (searchArr[i].toUpperCase().includes(thisModel.data.tags[j].name.toUpperCase())) {
            let tagID = thisModel.data.tags[j].tid;
            for (let k = 0; k < thisModel.data.questions[k].tagIds; k++) {
              if (thisModel.data.questions[k].tagIds.includes(tagID)) {
                qArr.push(thisModel.data.questions[k].qid);
              }
            }
          }
        }
      }
      else {
        for (let j = 0; j < thisModel.data.questions.length; j++) {
          if (thisModel.data.questions[j].title.toUpperCase().match(searchArr[i].toUpperCase())) {
            let tagID = thisModel.data.tags[j].tid;
            qArr.push(thisModel.data.questions[j].qid);
          }
        }
      }
    }
    if (qArr.length > 0) {
      console.log(qArr)
      let uniqueQArr = [...new Set(qArr)];
      console.log(uniqueQArr);
      createTable(uniqueQArr);
    }
    else {
      document.getElementById("AllQ").innerHTML = "No Questions Found";
      countQuestions();
    }
  }
}