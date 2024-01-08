function addElement(){
  const enter = document.createElement("div");
  enter.innerHTML="<input type='text'><select name='course type' class='courseSelect'><option>AP/KAP</option><option>Academic/Elective</option></select><select class='allSelect'><option value='A'>A</option><option value='B'>B</option><option value='C'>C</option><option value='F'>F</option></select>";
  document.getElementById("input").appendChild(enter);
}
function foo(node) {
  node.property;
}

function calculate(){
  let elements = document.getElementsByClassName('allSelect');
  let grades = [];
  let classes = document.getElementsByClassName('courseSelect');
  let courses = [];

  for(let i = 0; i<elements.length; i++){
    let element = elements[i];
    let selected = element.options[element.selectedIndex].text;
    grades.push(selected);
  }
  for(let v = 0; v<classes.length; v++){
    let element = classes[v];
    let selectClass = element.options[element.selectedIndex].text;
    courses.push(selectClass);
  }
  let unweighted = 0;
  let weighted = 0;
  for(let i = 0;i<grades.length;i++){
    if(courses[i]=='AP/KAP'){
      if(grades[i]=='A'){
        weighted+=5;
        unweighted+=4;
      }
      else if(grades[i]=='B'){
        weighted+=4;
        unweighted+=3;
      }
      else if(grades[i]=='C'){
        weighted+=3;
        unweighted+=2;
      }
      else{
        weighted+=0;
        unweighted+=0;
      }
    }
    else{
      if(grades[i]=='A'){
        weighted+=4;
        unweighted+=4;
      }
      else if(grades[i]=='B'){
        weighted+=3;
        unweighted+=3;
      }
      else if(grades[i]=='C'){
        weighted+=2;
        unweighted+=2;
      }
      else{
        weighted+=0;
        unweighted+=0;
      }
    }
  }
  unweighted/=grades.length;
  weighted/=grades.length;

  for(let i = 0;i<grades.length;i++){
    
  }
  const endText=document.getElementById("gpatotal");
  const text = document.createTextNode(' Your unweighted GPA is: '+unweighted);
  const text2 = document.createTextNode(' Your weighted GPA is: '+weighted);
  endText.appendChild(text);
  endText.appendChild(text2);
  console.log(grades);
  console.log(courses);
  console.log(unweighted);
  console.log(weighted);
  
  
}