formPopulate bookmarklet
========================

formPopulate is a bookmarklet used to paste data to multiple form fields 
at once.

User needs to get the data to clipboard in correct format from somewhere.
After that they can use this bookmarklet to paste the data. In Internet Explorer
it is possible to get the data straight from the clipboard so the paste 
is literally one click (requires that Security option *Allow paste operations 
via script* is enabled). With other browsers and with restricted security options
user must paste the string manually when prompted.

Also supports pasting to multipage forms. When clipboard access is not
available, user must first paste the entire data, then copy rest of the
data again after form on the first page has been populated, move on to next
page, click the bookmarklet again, paste the data, copy again if more pages
left and so on. With clipboard access available, user only needs to click the
bookmarklet on each page.

## Install

Install the bookmarklet by creating a new bookmark manually and copy-paste the following to the bookmark URL:

```javascript
javascript:(function(){t='';c=window.clipboardData;if(c){t=c.getData('Text');}if(!t){t=window.prompt('Paste:');}p=t.split('|');t=p.shift();t=t.split(';');v=t[0].split(':');f=t[1].split(':');l=v.length;d=((f.length>l+1)?'window.'+f[l+1]+'.':'')+'document.'+f[l]+'.';for(i=0;i<l;i++){eval(d+f[i]).value=v[i];}p=p.join('|');if(c){c.setData('Text',p);}else if(p){window.prompt('Copy:',p);}})();
```
## Example

1. Install the bookmarklet
2. Copy this: `bookmarklet:javascript:browser bookmark:supercalifragilisticexpialidocious:wikipedia.org;as_q:as_epq:as_oq:as_eq:as_sitesearch:f`
3. Open [Google advanced search](https://www.google.com/advanced_search)
4. Click the bookmarklet
5. Paste the data when prompted

## Data format

`form_data;form_info[|form_data;form_info|n]`
> where `form_data` = `field_1_value:field_2_value:...:field_n_value`<br />
> and `form_info` = `field_1_name:field_2_name:...:field_n_name:form_name[:frame_name]`<br />
> | separates data for multipage forms, first page first etc.
