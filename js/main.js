var countOfTasks = 1;
function addTask() {
  var task = document.getElementById('addText').value;
  if(task!='') {
    let div = document.createElement('div');
    div.setAttribute('id', 'tasks'+countOfTasks);
    div.className = 'tasks row justify-content-center';
    div.innerHTML = '<div class="col-xl-7 col-md-8 col-sm-9 col-9">\n' +
      '<input type="checkbox" class="hidden-box" id="check'+countOfTasks+'"/>'+
      '<label for="check'+countOfTasks+'" class="check--label">'+
      '<span class="check--label-box" "></span>'+
      ' <a class="check--label-text"><span>'+task+'</span></a>'+
      '</label>'+
      '    </div>\n' +
      '    <div class="d-flex justify-content-end">\n' +
      '      <button type="button" id="tasks'+countOfTasks+'" onclick="delTask(this.id)" class="delBtn btn btn-danger btn-icon btn-circle" >\n' +
      '        <span class="icon"><i class="fas fa-times"></i></span>\n' +
      '      </button>\n' +
      '    </div>';

    countOfTasks++;
    document.getElementById('list').appendChild(div);
    document.getElementById('addText').value = '';
  }
}
function delTask(elem) {
  document.getElementById(elem).remove();
}

function search() {
  // Declare variables
  let input, filter, ul, span, strong, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('list');
  span = ul.getElementsByTagName('a');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < span.length; i++) {
    strong = span[i].getElementsByTagName('span')[0];

    if (strong.innerHTML.toUpperCase().indexOf(filter) > -1) {
      span[i].parentNode.parentNode.parentNode.style.display = '';
    } else {
      span[i].parentNode.parentNode.parentNode.style.display = 'none';
    }
  }
}

//SHARE FOOTER
Share = {
  facebook: function(purl, ptitle, pimg, text) {
    url  = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]='     + encodeURIComponent(ptitle);
    url += '&p[summary]='   + encodeURIComponent(text);
    url += '&p[url]='       + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
  },
  twitter: function(purl, ptitle) {
    url  = 'http://twitter.com/share?';
    url += 'text='      + encodeURIComponent(ptitle);
    url += '&url='      + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);
    Share.popup(url);
  },
  linkedin : function(purl, ptitle, pimg, text) {
    url  = 'https://www.linkedin.com/cws/share/?';
    url += 'url='          + encodeURIComponent(purl);
    url += '&title='       + encodeURIComponent(ptitle);
    url += '&description=' + encodeURIComponent(text);
    url += '&imageurl='    + encodeURIComponent(pimg);
    Share.popup(url);
  },

  popup: function(url) {
    window.open(url,'','toolbar=0,status=0,width=626,height=436');
  }
};
