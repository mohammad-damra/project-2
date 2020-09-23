// create main div to contain the list

const mainDiv = $("<div class = 'vid-list'></div>");

// iterate over the videos array (f object)

videos.forEach((elem, index) => {
  mainDiv.append(
    $(
      `<div onclick="clicked(${index})"><img src="${videos[index].thumbnail}"> <span>${videos[index].title}</span></div>`
    )
  );
});

// click function

const clicked = (index) => {
  $(".video iframe").attr(
    "src",
    `https://www.youtube.com/embed/${videos[index].id}`
  );
  $("#mainTitle").text(`${videos[index].title}`);
};

// add mainDiv to the body

$(".container").append(mainDiv);
