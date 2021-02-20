# Facebook-Housekeeping

<br><br>
## Overview

It seems that Facebook doesn’t want you to delete all your past activities on the platform. In fact, it is impossible to delete all your activity with a single click. This “Delete Everything Button” does not exist. So, Facebook wants you to click manually on every single activity of you to review and then delete it. Considering that most of us are active users on Facebook for several years, this process apparently will take days. However, there is a fast-track to delete your Facebook history.

This is going to be a series of scripts to delete your Facebook's Activity log. First, I just want to test each kind of Activity Log, and then compile all in just one script.

Scripts:
- **Facebook-Delete-ActivityLog-SearchHistory.js**.
- **Next ...**.


<br><br>
## Start script - For new Facebook layout:

1. Sign in.
2. Go to activity log.
3. Refresh page.
4. Open DevTool.
```
In chrome press F12.
```

5. Go to console.
6. Paste all code from **Facebook-Delete-ActivityLog-SearchHistory.js**
7. Clear console
```
CTRL + L
```

8. In console:
```
deleteFacebookActivityLog_SearchHistory();
```

9. Wait for the process to finish.



<br><br>
## Stop/Cancel script

You can stop app by enter:

```
stop();
```

OR 

```
Reload current page (Ctrl+R)
```

<br><br>
## Troubleshooting

If there are no more objects to delete, the script ends after the set number of attemps.

If facebook stop loading content:
```
click filter > activity log > Search History
```

OR
 
```
refresh page.
```

> NOTE: If you refresh page, the script will be removed. You must paste code again.



<br><br>
## License

> Licensed under the [MIT](license) license.
