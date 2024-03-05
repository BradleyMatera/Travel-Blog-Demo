# Instructions

Update this document where indicated [look for the brackets!]. Replace text inside the brackets with your own information. For example: Course Name should be the name of this course, and not the generic words "Course Name".

## PROJECT AND PORTFOLIO I: WEB DEVELOPMENT - ONLINE

### **Bradely Matera**
### **March 10th 2024**

This paper addresses some of the topic matter covered in research and activity this week. Be sure to include reference links below to the research and information you used to complete this assignment.

## Topic: Terminal

Professional developers use Terminal daily. It's essential to understand some fundamental commands to use the application.

Update the information below to demonstrate your knowledge on this topic.

**Using Terminal, there are essential commands to know**

List the correct Terminal commands to do the actions listed below. Replace **CMD** with the correct command sequence. You can keep or enhance the brief description.

**The last bullet provides an example**.


- ``Ctrl+E``: Clear the Screen
- ``PWD``: Print the "Working Directory" // Full path to the working directory
- ``ls``: List files and folders
- ``ls -a``: List files and folders, including invisible files
- ``ls -lh``: List all files and folders, in human-readable form
- ``cd`` [folder: Change directory ex: cd /users/my name/documents/
- ``cd`` /: Change directory, go to root directory
- ``cd`` ~: Change directory and go to user home directory
- ``cd ..``: Change directory, go up one folder level
- ``cd ../..``: Change directory, go up two folder levels
- ``cd ~/Desktop``: Change the directory to my desktop!

**Using Terminal**


**Folder Drop:** Try typing "cd" followed by a space, and then drag a folder into the terminal and press return. Test this out and describe your results below.

It opened up the content directory or the cd when I dragged and dropped it into the terminal after inputting the cmd,
- ``~ cd``
- ``~ cd``
- ``~ /Users/bradleymatera/Desktop/FullSail``

### Topic: Version Control & Git

Version control, also known as revision control, records changes to a file or set of files over time so that you can recall specific versions later. In this class, we are learning Git. Update the information below where indicated.

**. There are three types of version control.**


- **Local: Only you have access to the repository (No network connection needed)**
- **Centralized: A single central server controls the codebase and everyone works off that same copy**
- **Distributed: Everyone has a full copy of the entire project history; no need for a central authority**


**. Using Terminal, there are also essential Git commands to know.**

List the correct Git commands to do the actions listed below in Terminal. Replace CMD with the correct command and keep or enhance the brief description.

- ``git clone repository URL``: Clones a remote repository
- ``git config --global user.name"[Your Name]"``: Set up a global username
- ``git config --global user.email "[your.email@example.com]"``: Set up a global email address (to match my GitHub account email)
- ``git status``: Shows the current state of your directory and staging area
- ``git add .``: Add modified files to the next commit
- ``git commit -m "[commit message]"]``: Make a commit with a new message
- ``git log``: Show my commit history
- ``git --help``: Show Git's help screen

### **Connecting to GitHub using Terminal**  
HTTPS is the correct way to connect to GitHub in this course. Describe how you connect to GitHub from Terminal using this protocol. What steps

### Configure your login by using the cmd

``git config --global user.name "Your User Name"``

``git config --global user.email "Your Email Address"``

 ### Confirm it by retyping cmds

``git config --global user.name``
``git config --global user.email``

 ### Clone repo: Go to the folder where you want to put the cloned repo in the terminal

 Type git clone https://github.com/username/repo

 ### Wait for a prompt/Confirm

- Wait for it to prompt you for your access key if necessary. If not, move on to step 5. If you haven't set up your passkey and it asked for access key then you will have to go you your repo page directly to set it up.]
- If it did prompt you in the terminal it would look like this:  
 ``Cloning into 'folderName'...``
 ``remote: Counting objects: 57, done.``
 ``remote: Total 57 (delta 0), reused 0 (delta 0), pack-reused 56.  ``
 ``Receiving objects: 100% (57/57), 49.8KiB``
 ``After pressing enter, you should now see all the contents from the repo.``

###  To push changes from the local machine to Github

 First, make sure you are in the correct directory
 Then type ``git push origin master``
 ``git commit -a.``
 ``git commit -m "commit message"``
 ``git commit -am "commit message"``
 ``git commit --amend.``

 6 To pull changes from Github to your local machine

 ``git pull origin master``

### **Using .gitignore and Why it's Important**

Most repositories contain a .gitignore file.

- What is the purpose of this file?
<br>
The .gitignore file specifies intentionally untracked files that Git should ignore. This is useful for ignoring build artifacts, personal IDE config files, and other files that don't need to be version-controlled.

- What is the "**.DS_Store**" file and why would you want to ignore it?
<br>
  .DS_Store is a file created by macOS Finder to store custom attributes of folders and files. It should be ignored because it's a system-generated file that doesn't need to be version-controlled.

- What other file or folder would you want to add to a .gitignore file and why?

 Node modules folder (node_modules/) - this contains dependencies installed by Node.js package managers which shouldn't be committed to version control.
<br>

### Reference Links

Research Summary: What resource(s) did you find most helpful this past week and why? 

**Terminal Commands**  
[Link For Terminal Commands](https://github.com/0nn0/terminal-mac-cheatsheet#english-version)

**Three Types of Version Control**  
[Link For my research on the 3 types of version controls 1](https://about.gitlab.com/topics/version-control/)

[Link For my research on the 3 types of version controls 2](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

**Git Commands**  
[Git Commands](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#hiding-content-with-comments)

**Connecting to GitHub using Terminal**  
[Connecting To Git Hub using Terminal 1](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

[Connecting To Git Hub using Terminal 2](https://gist.github.com/albatrocity/1201187/5247457788890f0795a6e121275867e3551d0dc2)

**Using .gitignore and Why it's Important**  
[Reaserch For Git Ignore 1](https://git-scm.com/docs/gitignore#:~:text=The%20purpose%20of%20gitignore%20files,being%20reintroduced%20in%20later%20commits.)

[Reaserch For Git Ignore 2](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)
