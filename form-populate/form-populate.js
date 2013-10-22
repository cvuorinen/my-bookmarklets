// formPopulate is a bookmarklet used to paste data to multiple form fields 
// with one click (one click only works in IE, with other browsers user 
// must paste the string manually when prompted). Also supports pasting to
// multipage forms.

// Data format:
// form_data;form_info[|form_data;form_info|n]
//  where form_data = field_1_value:field_2_value:...:field_n_value
//  and   form_info = field_1_name:field_2_name:...:field_n_name:form_name[:frame_name]
//  | separates data for multipage forms, first page first etc.

// Example:
// Google advanced search:
//  bookmarklet:javascript:browser bookmark:supercalifragilisticexpialidocious:wikipedia.org;as_q:as_epq:as_oq:as_eq:as_sitesearch:f
// Generic:
//  Text value:1;name1:name2:forms[0]

(function (){
  // init data var
  t='';
  
  // get clipboard object
  c=window.clipboardData;
  
  // if clipboard available
  if (c) {
    // get text from clipboard
    t=c.getData('Text');
  }
  
  // if we didn't get data from clipboard
  if (!t)  {
    // prompt for input
    t=window.prompt('Paste:');
  }
  
  // split multipage data to individual pages and get first remaining page
  p=t.split('|');
  t=p.shift();
  
  // split text to get individual values of form data and form info
  t=t.split(';');
  v=t[0].split(':');
  f=t[1].split(':');
  l=v.length;
  
  // construct DOM path to the form  [window.FRAME_NAME.]document.FORM_NAME.
  d=((f.length>l+1)?'window.'+f[l+1]+'.':'')+'document.'+f[l]+'.';
  
  // assign values to form fields
  for(i=0;i<l;i++) {
    eval(d+f[i]).value=v[i];
  }
  
  // join rest of multipage data back to string
  p=p.join('|');
  
  // if clipboard available
  if (c) {
    // put rest of multipage data back or empty clipboard
    c.setData('Text',p);
  }
  // clipboard not available and multipage data remaining
  else if (p) {
    // prompt user to copy remaining data
    window.prompt('Copy:',p);
  }
})();
