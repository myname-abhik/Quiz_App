// var box4 = document.querySelector(".boxes4");
// var prevbutton = document.querySelector('.boxes411')
// let k = 0,
//   k1 = 0,
//   k3 = 0,
//   ans = 0;
// var radio = document.getElementsByName("fav_language");
// button1 = document.querySelectorAll(".radio_btn");
// let submit = document.querySelector('.boxes5')
// let car = [
//   {
//     option0:
//       "Which data structure is typically used for implementing a Last-In-First-Out (LIFO) behavior?",
//     option1: "Queue",
//     option2: "Stack",
//     option3: "Linked List",
//     option4: "Tree",
//     answer: "2",
//   },
//   {
//     option0:
//       "What is the time complexity of the quicksort algorithm in the average case?",
//     option1: "O(n)",
//     option2: " O(n log n)",
//     option3: "O(n^2)",
//     option4: "O(log n)",
//     answer: "2",
//   },
//   {
//     option0:
//       "In a binary search tree (BST), which traversal method visits the nodes in non-decreasing order?",
//     option1: "Inorder",
//     option2: "Preorder",
//     option3: " Postorder",
//     option4: "Levelorder",
//     answer: "1",
//   },
//   {
//     option0:
//       "Which data structure is best suited for implementing a priority queue?",
//     option1: "Linked List",
//     option2: "Stack",
//     option3: "Queue",
//     option4: "Heap",
//     answer: "4",
//   },
//   {
//     option0:
//       "Which sorting algorithm has the worst-case time complexity of O(n^2) but can perform better than many other algorithms for smaller datasets or mostly sorted arrays?",
//     option1: "Quicksort",
//     option2: "Mergesort",
//     option3: "Insertion Sort",
//     option4: "Bubble Sort",
//     answer: "3",
//   },
// ];
// Option0 = document.querySelectorAll(".label1");
// question = document.querySelector(".box21");

// question.innerHTML = car[0].option0;
// Option0[0].innerHTML = car[0].option1;
// Option0[1].innerHTML = car[0].option2;
// Option0[2].innerHTML = car[0].option3;
// Option0[3].innerHTML = car[0].option4;
// displayRadioValue = () => {
//   // var radio = document.getElementsByName('fav_language');

//   for (i = 0; i < radio.length; i++) {
//     if (radio[i].checked) {
//       k1 = radio[i].value;
//       button1[i].checked = false;
//       //    console.log(radio[i].value,ans)
//     }
//   }

//   if (k <car.length-1) {
//     k = k + 1;
//     question.innerHTML = car[k].option0;
//     Option0[0].innerHTML = car[k].option1;
//     Option0[1].innerHTML = car[k].option2;
//     Option0[2].innerHTML = car[k].option3;
//     Option0[3].innerHTML = car[k].option4;
//     button1.checked = false;
//   }
//   if (ans < car.length) {
//     if (k1 == car[ans].answer) {
//       k3 = k3 + 1;

//       console.log(k3);

//       ans = ans + 1;
//     }
//   }
 
// }
// result = ()=>{
//     // question.innerHTML = `your result is ${k3}`;
   
//     alert(`your result is ${k3}`);
// }

// box4.addEventListener("click", displayRadioValue);
// submit.addEventListener("click", result);
