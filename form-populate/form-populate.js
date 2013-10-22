// formPopulate is a bookmarklet used to paste data to multiple form fields 
// with one click (one click only works in IE, with other browsers user 
// must paste the string manually when prompted).

// Data format:
// form_data;form_info
//  where form_data = field_1_value:field_2_value:...:field_n_value
//  and   form_info = field_1_name:field_2_name:...:field_n_name:form_name[:frame_name]

// Example:
// Google advanced search:
//  bookmarklet:javascript:browser bookmark:supercalifragilisticexpialidocious:wikipedia.org;as_q:as_epq:as_oq:as_eq:as_sitesearch:f
// Generic:
//  Text value:1;name1:name2:forms[0]

(function (){
  t='';
  // if clipboard available
  if (window.clipboardData) {
    // get clipboard object
    c=window.clipboardData;
    
    // get text from clipboard
    t=c.getData('Text');
    
    // empty clipboard to prevent duplicate processing
    c.setData('Text','');
  }
  
  // if we didn't get data from clipboard
  if (!t)  {
    // prompt for input
    t=window.prompt('Paste:');
  }
  
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
})();
