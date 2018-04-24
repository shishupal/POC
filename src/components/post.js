

var post = (postdata)=>{
  fetch('http//localhost:8000', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
   body: postdata
 }).then(function(response) {
   return response.json();
 });
}

export default post;
