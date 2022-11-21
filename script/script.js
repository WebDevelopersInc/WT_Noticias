let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

// SEARCH
function searchFunction() {
	let input = document.getElementById('myInput').value;
	input = input.toLowerCase();
	let h2 = document.getElementsByClassName('h2');
	let card = document.getElementsByClassName('card');

	let container1 = document.getElementById('container1');
	let propaganda = document.getElementById('propaganda');
	let carr = document.getElementById('carr');
	let h1 = document.getElementById('NA');
	
	for (i = 0; i < h2.length; i++) {
		if (!h2[i].innerText.toLowerCase().includes(input)) {
			h2[i].style.display="none";
			card[i].style.display="none";

			container1.style.display="none";
			propaganda.style.display="none";
			carr.style.display="none";

      if (!h2) {
        h1.style.display="";
      }
		}
		else {
			h2[i].style.display="";
			card[i].style.display="";

			container1.style.display="";
			propaganda.style.display="";
			carr.style.display="";
		}
	}
}
