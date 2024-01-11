function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());


    

// var li = (obj) => `<li><a href="${obj.url}">${obj.label}</a></li>`;
// var ul = (arr) => `<ul>${arr.map((obj) => li(obj)).join('\n')}</ul>`;
// var arr = [
//     { url: "http://www.twitter.com", label: "Twitter" },
//     { url: "http://www.linkedin.com", label: "Linked In" },
//     { url: "http://www.facebook.com", label: "Facebook" }
// ];
// document.getElementById('list').innerHTML = ul(arr);
