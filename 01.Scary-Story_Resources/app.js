window.addEventListener("load", solve);

function solve() {
  // First Name, Last Name, Age, Genre, Story title and Story text
  let publishBtn = document.getElementById("form-btn");

  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let genre = document.getElementById("genre");
  let storyTitle = document.getElementById("story-title");
  let storyText = document.getElementById("story");

  let storyInfo = document.getElementById("preview-list");
  let mainDiv = document.getElementById("main");
  let divsArr = document.getElementsByTagName("div");


  publishBtn.addEventListener("click", (e) =>{
    
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let genreValue = genre.value;
    let storyTitleValue = storyTitle.value;
    let storyTextValue = storyText.value;

    let data = [firstNameValue, lastNameValue, ageValue, genreValue, storyTitleValue, storyTextValue];
    if (data.includes("")) {return};
    publishBtn.disabled = true;

    let articleElement = document.createElement('article');
    let liElement = document.createElement('li');
    liElement.setAttribute("class", "story-info")

    let h4Name = document.createElement("h4");
    let pAge = document.createElement("p");
    let pTitle = document.createElement("p");
    let pGenre = document.createElement("p");
    let pStory = document.createElement("p");

    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.textContent = "Save Story";
    saveBtn.addEventListener("click", (e) =>{
      for (let i = 1; i<= divsArr.length; i++){
        divsArr[1].remove()
      }
    
      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      mainDiv.appendChild(h1);

    })

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit Story";
    editBtn.addEventListener("click", (e) =>{
      let previewSection = e.target.parentElement;
      let article = e.target.parentElement.getElementsByTagName("article")[0];
      let [fName, lName] = article.getElementsByTagName('h4')[0].innerHTML.split(": ")[1].split(" ");
      firstName.value = fName;
      lastName.value = lName;
      age.value = article.getElementsByTagName('p')[0].innerHTML.split(": ")[1];
      genre.value = article.getElementsByTagName('p')[2].innerHTML.split(": ")[1];
      storyTitle.value = article.getElementsByTagName('p')[1].innerHTML.split(": ")[1];
      storyText.value = article.getElementsByTagName('p')[3].innerHTML;


      publishBtn.disabled = false;
      previewSection.remove()
    })

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener("click", (e) =>{
      let previewSection = e.target.parentElement;
      publishBtn.disabled = false;
      previewSection.remove();
    })

    h4Name.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    pAge.textContent = `Age: ${ageValue}`;
    pTitle.textContent = `Title: ${storyTitleValue}`;
    pGenre.textContent = `Genre: ${genreValue}`;
    pStory.textContent = storyTextValue;

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    genre.value = '';
    storyTitle.value = '';
    storyText.value = '';

    articleElement.appendChild(h4Name);
    articleElement.appendChild(pAge);
    articleElement.appendChild(pTitle);
    articleElement.appendChild(pGenre);
    articleElement.appendChild(pStory);

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    storyInfo.appendChild(liElement);
    
  } );

}
