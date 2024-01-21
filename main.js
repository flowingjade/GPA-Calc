let count = 0;

function addElement() {
  count++;
  const enter = document.createElement("div");
  const divId = "input" + count;
  enter.setAttribute("class", divId);
  enter.innerHTML = "<input type='text' id='className' placeholder='Class'>" +
                    "<select name='course type' class='courseSelect' id='courseSelect'>" +
                    "<option value='' disabled selected hidden>Type</option>" +
                    "<option>AP/KAP</option>" +
                    "<option>Academic/Elective</option>" +
                    "</select>" +
                    "<select class='allSelect' id='allSelect'>" +
                    "<option value='' disabled selected hidden>Sem1</option>" +
                    "<option value='A'>A</option>" +
                    "<option value='B'>B</option>" +
                    "<option value='C'>C</option>" +
                    "<option value='F'>F</option>" +
                    "</select>" +
                    "<select class='allSelect2' id='allSelect2'>" +
                    "<option value='' disabled selected hidden>Sem2</option>" +
                    "<option value='A'>A</option>" +
                    "<option value='B'>B</option>" +
                    "<option value='C'>C</option>" +
                    "<option value='F'>F</option>" +
                    "</select>" +
                    "<button class='allSelect' onclick='removeElement(\"" + divId + "\")'>X</button>";

  document.getElementById("input").appendChild(enter);
}




function removeElement(elementClass) {
  const elementsToRemove = document.getElementsByClassName(elementClass);
  for (let i = 0; i < elementsToRemove.length; i++) {
    const element = elementsToRemove[i];
    element.parentNode.removeChild(element);
  }
}




function unweighted(grades){
  let unweighted=[];
  for(let i = 0;i<grades.length;i++){
    if(grades[i]=='A'){
      unweighted[i]=4;
    }
    else if(grades[i]=='B'){
      unweighted[i]=3;
    }
    else if(grades[i]=='C'){
      unweighted[i]=2;
    }
    else{
      unweighted[i]=0;
    }
  }
  return unweighted;
}
function weighted(grades,courses){
  let weighted =[];
  for(let i = 0;i<grades.length;i++){
    if(courses[i]=='AP/KAP'){
      if(grades[i]=='A'){
        weighted[i]=5
      }
      else if(grades[i]=='B'){
        weighted[i]=4;
      }
      else if(grades[i]=='C'){
        weighted[i]=3;
      }
      else{
        weighted[i]=0;
      }
    }
    else{
      if(grades[i]=='A'){
        weighted[i]=4;
      }
      else if(grades[i]=='B'){
        weighted[i]=3;
      }
      else if(grades[i]=='C'){
        weighted[i]=2;
      }
      else{
        weighted[i]=0;
      }
    }
  }
  return weighted;
}
function getSelectedText(element) {
  if (element && element.options) {
    let selected = element.options[element.selectedIndex];
    if (selected && selected.text !== undefined) {
      return selected.text;
    }
  }
  return null;
}
function saveData() {
  document.getElementById("gpatotal").innerText = "";
  let elements = Array.from(document.getElementsByClassName('allSelect'));
  let grades1 = [];
  let grades = Array.from(document.getElementsByClassName('allSelect2'));
  let grades2 = [];
  let classes = Array.from(document.getElementsByClassName('courseSelect'));
  let courses = [];

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let selectedText = getSelectedText(element);
    if (selectedText !== null) {
      grades1.push(selectedText);
    } else {
      console.error("Selected text is undefined for element:", element);
    }
  }

  console.log("grades1:", grades1);


  for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let selectedText = getSelectedText(element);
      if (selectedText !== null) {
          grades1.push(selectedText);
      } else {
          console.error("Selected text is undefined for element:", element);
      }
  }

  for (let i = 0; i < grades.length; i++) {
      let element = grades[i];
      let selectedText = getSelectedText(element);
      if (selectedText !== null) {
          grades2.push(selectedText);
      } else {
          console.error("Selected text is undefined for element:", element);
      }
  }

  for (let v = 0; v < classes.length; v++) {
      let element = classes[v];
      let selectClass = getSelectedText(element);
      if (selectClass !== null) {
          courses.push(selectClass);
      } else {
          console.error("Selected text is undefined for element:", element);
      }
  }

  const weighted1 = weighted(grades1, courses);
  const weighted2 = weighted(grades2, courses);
  const unweighted1 = unweighted(grades1);
  const unweighted2 = unweighted(grades2);

  console.log("weighted1:", weighted1);
  console.log("weighted2:", weighted2);
  console.log("unweighted1:", unweighted1);
  console.log("unweighted2:", unweighted2);

  let weightedarr = [];
  let unweightedarr = [];
  
  let maxArrayLength = Math.max(weighted1.length, weighted2.length);
  
  for (let i = 0; i < maxArrayLength; i++) {
    // Populate the arrays with actual data from weighted1, weighted2, unweighted1, and unweighted2
    let w1 = i < weighted1.length ? weighted1[i] : 0;
    let w2 = i < weighted2.length ? weighted2[i] : 0;
    let uw1 = i < unweighted1.length ? unweighted1[i] : 0;
    let uw2 = i < unweighted2.length ? unweighted2[i] : 0;
  
    weightedarr[i] = (w1 + w2) / 2;
    unweightedarr[i] = (uw1 + uw2) / 2;
  }
  
  let weightedTotal = 0;
  let unweightedTotal = 0;
  
  for (let i = 0; i < maxArrayLength; i++) {
    weightedTotal += weightedarr[i];
    unweightedTotal += unweightedarr[i];
  }
  
  weightedTotal /= maxArrayLength;
  weightedTotal = Math.round(weightedTotal * 100) / 100;
  unweightedTotal /= maxArrayLength;
  unweightedTotal = Math.round(unweightedTotal * 100) / 100;
  
  const endText = document.getElementById("gpatotal");
  endText.appendChild(document.createTextNode(' Your unweighted GPA is: ' + unweightedTotal));
  endText.appendChild(document.createTextNode(' Your weighted GPA is: ' + weightedTotal));
}  