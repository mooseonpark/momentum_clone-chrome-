# momentum_clone-chrome-

<--html element 가져오기-->
document.querySelector("#hello"); // returns the FIRST element that is a descendant of node that matches selectors.
document.getElementById("hello");
같은 역할이지만 querySelector로는 css처럼 elements를 가져올 수 있다.(ex. #hello h1)
여러개 가져오기 = document.querySelectorAll("#hello h1"); // array 형태로 반환
