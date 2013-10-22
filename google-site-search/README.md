Google Site Search bookmarklet
==============================

This bookmarklet allows to search Google using `site:` operator
easily from any site. The bookmarklet takes the hostname of the URL currently
open in the browser.

Keyword input can be done in three different ways:

1. Just click the bookmarklet and it will prompt for keywords using regular 
JavaScript prompt dialog.
2. Select some text on the page and click the bookmarklet and the selected text will be used as keyword(s).
3. The bookmarklet can also be used as a quick search in browsers that support it (at least Firefox and Chrome). In Firefox just assign a keyword to the bookmark (right click the bookmark and select **Properties**). In Chrome a new "search engine" needs to be added. This can be done from **Settings > Manage search engines...** and add it to the list. You can select the keyword you want to use for the quick search (I use "gss"), but after adding the quick search you can perform the search using only keyboard. First press Ctrl-L to move focus to location bar, then type the quick search keyword (e.g. gss) followed by space and then the search keyword(s).

Install the bookmarklet by creating a new bookmark manually and copy-paste the following to the bookmark URL:

```javascript
javascript:q="%s";if(!q||q[0]=="%")q=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);if(!q)q=prompt("Google Site Search");if(q!=null)location="http://www.google.com/search?q=site:"+escape(location.hostname)+"+"+escape(q.replace(/\s+/g,"+"));void 0;
```
